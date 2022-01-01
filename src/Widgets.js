import React from 'react';
import './Widgets.css';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => {
         return (<div className={"widgets__article"}>

            <div className="widgets__articleleft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleright">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
            </div>

        </div>)
    };

    return (
        <div className={"widgets"}>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <ImportContactsIcon/>
            </div>

            {newsArticle("react topic","latest news-405 readers")}
            {newsArticle('javaascript module','trending topic 900 readers')}

            {newsArticle('sunny Day','Hot news 500 readers')}

            {newsArticle('linkedin hacked','hacking news-100 readers')}

        </div>
    );
}

export default Widgets;