import React from 'react'
import {Link} from 'react-router-dom'

import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems } from 'carbon-components-react';
import { Switcher, Notification, UserAvatar} from '@carbon/icons-react';


const MainHeader = () => (
    <HeaderContainer
        render={({isSideNavExpanded, onClickSideNavExpand}) => (
            <Header aria-label="Carbon Tutorial">
                <SkipToContent />
                <HeaderMenuButton
                    aria-label={"Open Menu"}
                    onClick={onClickSideNavExpand}
                    isActive={isSideNavExpanded}
                />
                <HeaderName href="/" prefix="IBM">
                    Carbon Tutorial
                </HeaderName>
                <HeaderNavigation aria-label="Carbon Tutorial">
                    <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
                </HeaderNavigation>
                <SideNav
                    aria-label="Side Navigation"
                    expanded={isSideNavExpanded}
                    isPersistent={false}
                >
                    <SideNavItems>
                        <HeaderSideNavItems>
                            <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
                        </HeaderSideNavItems>
                    </SideNavItems>
                </SideNav>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="center">
                        <Notification size={20} />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
                        <UserAvatar size={20} />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="center">
                        <Switcher size={20} />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        )}
    />
)

export default MainHeader;
