import './_simple-news-card.scss'
import {ClickableTile} from "carbon-components-react";
import {ArrowRight} from '@carbon/icons-react';

type SimpleNewsCardProps = {
    title?: string,
    description?: string,
    url?: string,
    imageUrl?: string,
    publishedDate?: Date,
    source?: string,
}

/**
 * This Component represents a News Card, which contains at-a-glance information
 * and refers the user to specified link.
 * @param props SimpleNewsCardProps
 * @constructor
 */
const SimpleNewsCard = (props: SimpleNewsCardProps) => {
    const {title, description, url, imageUrl, publishedDate, source} = props

    return (
        <ClickableTile className="snc__container" aria-label="news-card" href={url}>
            <img src={imageUrl} className="snc__image"/>
            <div className="snc__information-container">
                <h4 className="snc__source">{source}</h4>
                <h3 className="snc__title">{title}</h3>
                <p className="snc__description">{description}</p>
                <div className="snc__date-icon-container">
                    <p className="snc__published-date">၂၂ နိုဝင်ဘာလ ၂၀၂၂</p>
                    <ArrowRight size={20}/>
                </div>
            </div>
        </ClickableTile>
    )
}

export default SimpleNewsCard;
