import React, {useMemo, useState, useCallback, useRef} from "react";
import { Dropdown } from '@carbon/react';
import regions from './regions.json';
import {
    flyToBago,
    flyToRakhine,
    flyToKachin,
    flyToAyeyarwaddy,
    flyToChin,
    flyToKayin,
    flyToKayah,
    flyToMagway,
    flyToMon,
    flyToMandalay,
    flyToSagaing,
    flyToShan,
    flyToYangon,
    flyToTanintharyi,
    flyBack } from "../../redux/reducers/mapCenterSlice";

import { selectCount } from '../../redux/reducers/mapCenterSlice';
import { useDispatch, useSelector } from "react-redux";
import {hasStoppedMoving, isMapMoving} from "../../redux/reducers/mapEventMoveSlice";
import store from "../../redux/store";

const StatesDropdown = () => {
    const [items, setItems] = useState<string[]>([]);

    const dispatch = useDispatch();
    const coordinate = useSelector(selectCount);
    const isPanning = useSelector(isMapMoving);

    useMemo(() => {
        for(let i = 0; i < regions.regions.length; i++) {
            setItems((prevState) => {
                prevState.push(regions.regions.at(i).name);
                return prevState;
            });
        }
        return () => setItems([]);
    }, []);

    const onChangeDropdown = useCallback((item: { selectedItem: string }) => {
        switch(item.selectedItem) {
            case 'တတိုင်းပြည်လုံး အတိုင်းအတာ':
                dispatch(flyBack());
                break;
            case 'ကချင်ပြည်နယ်':
                dispatch(flyToKachin());
                break;
            case 'ကယားပြည်နယ်':
                dispatch(flyToKayah());
                break;
            case 'ကရင်ပြည်နယ်':
                dispatch(flyToKayin());
                break;
            case 'ချင်းပြည်နယ်':
                dispatch(flyToChin());
                break;
            case 'မွန်ပြည်နယ်':
                dispatch(flyToMon());
                break;
            case 'ရခိုင်ပြည်နယ်':
                dispatch(flyToRakhine());
                break;
            case 'ရှမ်းပြည်နယ်':
                dispatch(flyToShan());
                break;
            case 'ပဲခူးတိုင်းဒေသကြီး':
                dispatch(flyToBago());
                break;
            case 'စစ်ကိုင်းတိုင်းဒေသကြီး':
                dispatch(flyToSagaing());
                break;
            case 'တနင်္သာရီတိုင်းဒေသကြီး':
                dispatch(flyToTanintharyi());
                break;
            case 'မကွေးတိုင်းဒေသကြီး':
                dispatch(flyToMagway());
                break;
            case 'မန္တလေးတိုင်းဒေသကြီး':
                dispatch(flyToMandalay());
                break;
            case 'ရန်ကုန်တိုင်းဒေသကြီး':
                dispatch(flyToYangon());
                break;
            case 'ဧရာဝတီတိုင်းဒေသကြီး':
                dispatch(flyToAyeyarwaddy());
                break;
            default:
                dispatch(flyBack());
                break;
        }
    }, [coordinate, isPanning]);

    const handleRenderSelectedItem = useCallback(() => {

        if(isPanning) return "ပြည်နယ်/တိုင်းဒေသကြီးကိုမြင်ကွင်းထဲသို့ချဲ့ရန်"

    }, [isPanning])

    const handleSelectedItem = useCallback(() => {
        return "ပြည်နယ်/တိုင်းဒေသကြီးကိုမြင်ကွင်းထဲသို့ချဲ့ရန်"
    }, [isPanning])

    return(
        <Dropdown
            ariaLabel="State Dropdown"
            hideLabel
            id="state-dropdown"
            items={items}
            renderSelectedItem={handleRenderSelectedItem}
            selectedItem={handleSelectedItem}
            direction="top"
            onChange={onChangeDropdown}
            label="ပြည်နယ်/တိုင်းဒေသကြီးသို့ချဲ့ရန်"
            size='md' />
    )
}

export default StatesDropdown;

