import React from 'react'
import './_date.scss'
import {SimpleLocalize} from "simple-burmese-date-localization/lib/SimpleLocalize";

const Date = () => {
    return (<div className="date-container">
            <small className="days-of-the-week">ကြာသပတေးနေ့ </small>
            <h1 className="date">{SimpleLocalize('2022 November 22')} </h1>
        </div>)
}

export default Date
