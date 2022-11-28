import {
    Header,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderMenuItem,
    HeaderName,
    HeaderNavigation,
} from 'carbon-components-react';
import {Settings as SettingsIcon} from '@carbon/icons-react';

import './_shell.scss';

import {CREATOR_NAME, PLATFORM_NAME} from "../../global/constants/constants";

/**
 * This component represents the UI Shell.
 * @constructor
 */
const Shell = () => {
    return (
        <Header className="header" aria-label="Platform Name">
            <HeaderName href="#" prefix={CREATOR_NAME}>{PLATFORM_NAME}</HeaderName>
            <HeaderNavigation aria-label="news genres">
                <HeaderMenuItem isCurrentPage href="/">သတင်းစာ</HeaderMenuItem>
                <HeaderMenuItem href="/categories?=videos">ရုပ်သံ</HeaderMenuItem>
                <HeaderMenuItem href="/categories?=analysis">လက်ဘက်ရည်ဆိုင်</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="ဆက်တင်" tooltipAlignment="end">
                    <SettingsIcon size={20}/>
                </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
    )
}

export default Shell;

