import {
    Header,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
} from '@carbon/react';

import {
    Switcher as SwitcherIcon,
    Credentials,
    Information,
    Settings as SettingsIcon } from '@carbon/icons-react';

const Shell = () => {
    return (
        <Header aria-label="Platform Name">
            <HeaderName href="#" prefix="ဆွေမျိုးမေ့">
                သရက်ချဉ်သုပ်
            </HeaderName>
            <HeaderNavigation>
                <HeaderMenuItem isCurrentPage href="#">
                    ပြည်တွင်းရေးရာ
                </HeaderMenuItem>
                <HeaderMenuItem href="#">စီးပွားရေး</HeaderMenuItem>
                <HeaderMenuItem href="#">ဆောင်းပါး</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
                <HeaderGlobalAction
                    aria-label="ဆက်တင်"
                    tooltipAlignment="end">
                    <SettingsIcon size={20}/>
                </HeaderGlobalAction>
                <HeaderGlobalAction
                    aria-label="Credits"
                    tooltipAlignment="end">
                    <Credentials size={20}/>
                </HeaderGlobalAction>
                <HeaderGlobalAction
                    aria-label="Credits"
                    tooltipAlignment="end">
                    <Information size={20}/>
                </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
    )
}

export default Shell;
