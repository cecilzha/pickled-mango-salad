import {Button, Column, Grid, Search, Tab, Tabs,} from 'carbon-components-react';

// @ts-ignore
import {TabList, TabPanel, TabPanels} from '@carbon/react';

import './_news-feed.scss'

import {PLATFORM_NAME} from "../../global/constants/constants";
import Date from "../../components/date/Date";
import SimpleNewsCard from "../../components/newscards/simplenewscard/SimpleNewsCard";

/**
 * This component represents Newspaper.
 * It contains a news feed to display all the recent news.
 */
const NewsFeed = () => {
    return (<div>
            <Grid fullWidth>
                <Column lg={16} md={8} sm={4} className="news-feed__banner">
                    <Date/>
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
                                onChange={() => {
                                }}
                                onKeyDown={() => {
                                }}
                            />
                        </div>
                        <TabPanels>
                            <TabPanel>
                                <div className="cds--group">
                                    <div className="cds--grid">
                                        <div className="cds--row">
                                            <div className="cds--col">
                                                <SimpleNewsCard
                                                    title='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ'
                                                    description='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ '
                                                    source="ဘီဘီစီ မြန်မာ"
                                                    url='www.google.com'
                                                    imageUrl='https://images.unsplash.com/photo-1588097281266-310cead47879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80'
                                                />
                                            </div>
                                            <div className="cds--col">
                                                <SimpleNewsCard
                                                    title='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ'
                                                    description='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ '
                                                    source="ဘီဘီစီ မြန်မာ"
                                                    url='www.google.com'
                                                    imageUrl='https://images.unsplash.com/photo-1588097281266-310cead47879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80'
                                                />
                                            </div>
                                            <div className="cds--col">
                                                <SimpleNewsCard
                                                    title='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ'
                                                    description='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ '
                                                    source="ဘီဘီစီ မြန်မာ"
                                                    url='www.google.com'
                                                    imageUrl='https://images.unsplash.com/photo-1588097281266-310cead47879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80'
                                                />
                                            </div>
                                            <div className="cds--col">
                                                <SimpleNewsCard
                                                    title='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ'
                                                    description='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ '
                                                    source="ဘီဘီစီ မြန်မာ"
                                                    url='www.google.com'
                                                    imageUrl='https://images.unsplash.com/photo-1588097281266-310cead47879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cds--grid">
                                        <div className="cds--row">
                                            <div className="cds--col">
                                                <SimpleNewsCard
                                                    title='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ'
                                                    description='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ '
                                                    source="ဘီဘီစီ မြန်မာ"
                                                    url='www.google.com'
                                                    imageUrl='https://images.unsplash.com/photo-1588097281266-310cead47879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80'
                                                />
                                            </div>
                                            <div className="cds--col">
                                                <SimpleNewsCard
                                                    title='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ'
                                                    description='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ '
                                                    source="ဘီဘီစီ မြန်မာ"
                                                    url='www.google.com'
                                                    imageUrl='https://images.unsplash.com/photo-1588097281266-310cead47879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80'
                                                />
                                            </div>
                                            <div className="cds--col">
                                                <SimpleNewsCard
                                                    title='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ'
                                                    description='မြန်မာနိုင်ငံမှာ မှတ်ပုံတင်မရှိသူ ၁၂ သန်းကျော်ရှိနေ '
                                                    source="ဘီဘီစီ မြန်မာ"
                                                    url='www.google.com'
                                                    imageUrl='https://images.unsplash.com/photo-1588097281266-310cead47879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80'
                                                />
                                            </div>
                                            <div className="cds--col">
                                            </div>
                                        </div>
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
