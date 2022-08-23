import React from "react";
import { Search, ClickableTile } from 'carbon-components-react';

import './styles.scss';

const ContentDrawer = () => {
    return(
        <section className="theme-section">
            <Search
                closeButtonLabelText="Clear search input"
                placeholder={'သတင်းခေါင်းစဉ်များရှာရန်'}
                id="content-search"
                labelText="Search"
                onChange={function noRefCheck(){}}
                onKeyDown={function noRefCheck(){}}
                size="lg"
            />
            <ClickableTile className="clickable">
                <img style={{height: '250px', width: '505px'}} src={'https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg'} />
                <div className='title'>
                    <h1>သတင်းနံပါတ် ၁</h1>
                </div>
            </ClickableTile>
        </ section>
    )
}

export default ContentDrawer;

