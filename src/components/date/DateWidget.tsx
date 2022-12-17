import React, {useEffect, useState} from 'react'
import './_date.scss'

import {DateTime, Settings} from "luxon";
import moment from "moment/moment";
import 'moment/locale/my';

const DateWidget = () => {
    const [currentDate, setCurrentDate] = useState<string>(moment().locale("my").format('YYYY MMMM D'))
    const [currentDay, setCurrentDay] = useState<string>(moment().locale("my").format('dddd'))

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(moment().locale("my").format('YYYY MMMM D'))
            setCurrentDay(moment().locale("my").format('dddd'))
        }, 1000)

        return () => clearInterval(interval)
    })

    return (<div className="date-container">
            <p className="days-of-the-week">
                {
                    currentDay + 'နေ့'
                }
            </p>
            <h1 className="date">
                {
                    currentDate
                }
            </h1>
        </div>)
}

export default DateWidget
