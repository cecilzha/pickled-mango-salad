import {ChangeEvent, ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {Button, Column, Grid, Search, SkeletonPlaceholder, Tab, Tabs,} from 'carbon-components-react';

// @ts-ignore
import {TabList, TabPanel, TabPanels} from '@carbon/react';

import './_news-feed.scss'

import {PLATFORM_NAME} from "../../global/constants/constants";
import DateWidget from "../../components/date/DateWidget";
import SimpleNewsCard from "../../components/newscards/simplenewscard/SimpleNewsCard";
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {Database} from "../../../lib/database.types";
import moment from "moment/moment";
import {ProperSourceId} from "../../biz/Definitions";
import {supabase} from "../../utilities/supabaseClient";
import Fuse from "fuse.js";
import FuseResult = Fuse.FuseResult;
import IFuseOptions = Fuse.IFuseOptions;

type Story = {
    title: string,
    description: string,
    url: string,
    image_url: string,
    published_date: string,
    modified_date: string,
    source_id: string
}

let today = moment().locale("en").subtract(15, 'day').format('YYYY-MM-DD')
let tomorrow = moment().locale("en").subtract(11, 'day').format('YYYY-MM-DD')

/**
 * This component represents Newspaper.
 * It contains a news feed to display all the recent news.
 */
const NewsFeed = () => {
    const [fetchedFeed, setFetchedFeed] = useState<Story[]>([])
    const [filteredFeed, setFilteredFeed] = useState<Story[]>([])
    const [loaded, setLoaded] = useState<boolean>(false)
    const [query, setQuery] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState<string>('')

    // This is a memoized instance of Fuse
    const fuseInstance = useMemo(
        () => new Fuse<Story>(fetchedFeed, {
            keys: ['title']
        })
        ,[fetchedFeed]);

    useEffect(() => {
        async function initFetchFeed(): Promise<void> {
            try {
                await supabase()
                    .from('stories')
                    .select()
                    .lt('published_date', tomorrow)
                    .gt('published_date', today)
                    .then(({data}) => {
                        setFetchedFeed(data as Story[])
                    })
            } catch (e) {
                console.log(e)
            }
        }

        initFetchFeed().then(() => {
            console.log("FetchFeedUpdated")
            setLoaded(true)
        })

    }, [])

    useEffect(() => {
        if(query) {
            const filteredResult: Story[] = []
            const fuseResult: FuseResult<Story>[] = fuseInstance.search(searchTerm)
            fuseResult.map((result) => {
                const { item } = result
                filteredResult.push(item)
            })
            setFilteredFeed(filteredResult)
        }

        // resets the query after key press
        setQuery(false)
    }, [query])

    /**
     * An abstract function that renders a list of given stories.
     * Used for rendering all the fetched stories or filter stories.
     * @param items
     */
    const render: (items: Story[]) => ReactNode[] = (items: Story[]) => {
        if(items.length == 0) {
            return(
                [<p key={"no result"}>No Result</p>]
            )
        }

        return items.map((story, index) => {
            const {title, description, source_id, url, image_url} = story
            return(
                <div className='story' key={index}>
                    <SimpleNewsCard
                        title={title}
                        description={description}
                        source={source_id}
                        url={url}
                        imageUrl={image_url}
                    />
                </div>
            )
        })
    }

    /**
     * Renders stories on NewsFeed.
     */
    const renderStories: () => ReactNode[] = useCallback(() => {
        if(loaded) {
            return searchTerm.length > 0 ? render(filteredFeed) : render(fetchedFeed)
        } else {
            return(
                [<SkeletonPlaceholder />]
            )
        }

    }, [fetchedFeed, filteredFeed, loaded])

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setQuery(true)
        setSearchTerm(event.target.value)
    }, [query])

    return (<div>
            <Grid fullWidth>
                <Column lg={16} md={8} sm={4} className="news-feed__banner">
                    <DateWidget />
                </Column>
                <Column lg={16} md={8} sm={4} className="news-feed__r2">
                    <Tabs selected={0}>
                        <div className="tabs-group-row-and-search-filter">
                            <TabList className="tabs-group" aria-label="Tab navigation">
                                <Tab>အားလုံး</Tab>
                                <Tab>ပြည်တွင်ရေးရာ</Tab>
                                <Tab>နိုင်ငံတကာရေးရာ</Tab>
                                <Tab>စီးပွားရေး</Tab>
                                <Tab>ဆောင်းပါး</Tab>
                                <Tab>အခြား</Tab>
                            </TabList>
                            <Button kind="tertiary" className="expand-button">စစ်ထုတ်ရန်</Button>
                            <Search
                                size="lg"
                                placeholder="ဆောင်းပါးများရှာဖွေရန်"
                                labelText="Search"
                                className="search-box"
                                closeButtonLabelText="Clear search input"
                                id="search-1"
                                onChange={handleOnChange}
                            />
                        </div>
                        <TabPanels>
                            <TabPanel>
                                <div className='cds--group'>
                                    <div className='story-container'>
                                        {renderStories()}
                                    </div>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Column>
                <Footer/>
            </Grid>
        </div>)
}

/**
 * This component represents a footer, which contains useful links about the application as follows:
 * (1) အက်ပ်အကြောင်း
 * (2) သတ်မှတ်ချက်များ
 * (3) ဆက်သွယ်ရန်
 * (4) ကြေငြာချက်များ
 */
const Footer = () => {
    return (<Column lg={16} md={8} sm={4} className="footer__r1">
            <Grid>
                <Column md={4} lg={4} sm={4} className="footer__link">
                    <h3 className="footer__app-label">{PLATFORM_NAME}</h3>
                </Column>
                <Column className="footer__link" md={4} lg={4} sm={4}/>
                <Column className="footer__link" md={2} lg={2} sm={2}>အက်ပ်အကြောင်း</Column>
                <Column className="footer__link" md={2} lg={2} sm={2}>သတ်မှတ်ချက်များ</Column>
                <Column className="footer__link" md={2} lg={2} sm={2}>ဆက်သွယ်ရန်</Column>
                <Column className="footer__link" md={2} lg={2} sm={2}>ကြေငြာချက်များ</Column>
            </Grid>
        </Column>)
}

export default NewsFeed;
