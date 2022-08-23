import React, { useMemo, useState, useCallback } from "react";
import { Dropdown } from 'carbon-components-react';
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

import { selectCenter } from '../../redux/reducers/mapCenterSlice';
import { useDispatch, useSelector } from "react-redux";
import { isMapMoving } from "../../redux/reducers/mapEventMoveSlice";
import {REGIONS, Region} from "../../constants/constants";

const regions : Map<string, Region> = REGIONS

const StatesDropdown = () => {
    const [items, setItems] = useState<string[]>([]);

    const dispatch = useDispatch();
    const coordinate = useSelector(selectCenter);
    const isPanning = useSelector(isMapMoving);

    useMemo(() => {
        setItems((prevState) => {
            regions.forEach((value, key) => {
                prevState.push(value.name)
            })
            return prevState
        })

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
        return "ပြည်နယ်/တိုင်းဒေသကြီးကိုမြင်ကွင်းထဲသို့ချဲ့ရန်"
    }, [isPanning])


    return(
        <Dropdown
            ariaLabel="State Selection"
            hideLabel
            id="state-dropdown"
            items={items}
            selectedItem="ပြည်နယ်/တိုင်းဒေသကြီးကိုမြင်ကွင်းထဲသို့ချဲ့ရန်"
            renderSelectedItem={handleRenderSelectedItem}
            direction="top"
            onChange={onChangeDropdown}
            label="ပြည်နယ်/တိုင်းဒေသကြီးသို့ချဲ့ရန်"
            size='md' />
    )
}

export default StatesDropdown;

