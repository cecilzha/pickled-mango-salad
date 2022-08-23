import React, {useMemo, useState} from "react";
import { DatePicker, DatePickerInput } from 'carbon-components-react';

const SimpleDatePicker = () => {
    const [today, setToday] = useState<string>("");

    useMemo(() => {
        let date = new Date().toLocaleDateString();
        setToday(date);
    }, []);

    return (
        <>
            <DatePicker
                locale="my"
                dateFormat="m/d/Y"
                datePickerType="single"
            >
                <DatePickerInput
                    id="date-picker-calendar-id"
                    placeholder="mm/dd/yyyy"
                    type="text"
                    value={today}
                    labelText={""}
                />
            </DatePicker>
        </>
    )
}

export default SimpleDatePicker;
