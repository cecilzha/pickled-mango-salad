import {
    Header,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderName,
    HeaderNavigation,
    HeaderMenuItem,
} from 'carbon-components-react';
import {
    Information,
    Settings as SettingsIcon } from '@carbon/icons-react';

import { PLATFORM_NAME, CREATOR_NAME } from "../../constants/constants";

const Shell = () => {
    return (
        <Header aria-label="Platform Name">
            <HeaderName href="#" prefix={CREATOR_NAME}>
                {PLATFORM_NAME}
            </HeaderName>
            <HeaderNavigation aria-label="news genres">
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
                    <Information size={20}/>
                </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
    )
}

export default Shell;
