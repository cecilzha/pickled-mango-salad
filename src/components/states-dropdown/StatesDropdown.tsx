import React, { useMemo, useState} from "react";
import { Dropdown } from '@carbon/react';
import regions from './regions.json';

const StatesDropdown = () => {
    const [items, setItems] = useState<string[]>([]);

    useMemo(() => {
        for(let i = 0; i < regions.regions.length; i++) {
            setItems((prevState) => {
                prevState.push(regions.regions.at(i).name);
                return prevState;
            });
        }
        return () => setItems([]);
    }, []);

    return(
        <Dropdown
            ariaLabel="State Dropdown"
            id="state-dropdown"
            items={items}
            initialSelectedItem={'တတိုင်းပြည်လုံး အတိုင်းအတာ'}
            label="တတိုင်းပြည်လုံး အတိုင်းအတာ"
            size='lg' />
    )
}

export default StatesDropdown;

