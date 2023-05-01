import React from 'react';
import './Widgets.css';
import { forwardRef } from 'react'
import FlipMove from 'react-flip-move';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = forwardRef((ref) => {
  const newsArticle = (heading, subtitle, url) => (
    <div ref={ref} className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <a href={url}><h4>{heading}</h4></a>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>

      <FlipMove>
        {newsArticle('Meta to launch web version of flagging Threads app', 'The tech giant says it is working to add new features after many early users drifted away.','https://www.bbc.com/news/technology-66574762')}
        {newsArticle('Microsoft makes new bid to unblock Call of Duty deal', 'Firm makes fresh offer to acquire Activision after UK regulators rejected its first bid.','https://www.bbc.com/news/business-66578883')}
        {newsArticle('AI scans could detect Parkinson\'s, scientists say', 'The study detected physical differences in the eyes of people with Parkinson\'s and those without the condition.','https://www.bbc.com/news/uk-england-london-66576107')}
        {newsArticle('Trudeau slams Facebook over wildfire news ban', 'The prime minister accuses the company of putting profits over safety amid Canada\'s wildfire crisis.','https://www.bbc.com/news/world-us-canada-66573512')}
        {newsArticle('Earthquake shakes parts of California during storm', 'As residents sheltered from a once-in-80 years storm, the floor shook from an earthquake.','https://www.bbc.com/news/world-us-canada-66568991')}
      </FlipMove>
    </div>
  )
})

export default Widgets