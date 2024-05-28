import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>
        Here is the list of notifications
      </p>
      <button 
	style={{
	  display: 'inline',
          position: 'absolute',
	  right: 0,
	  top: 0,
	  backgroundColor: 'transparent',
	  border: 'none',
	  padding: '8px',
	  margin: '5px',
        }}
	aria-label="Close"
	onClick={() => console.log('Close button has been clicked')}
       >
         <img src={closeIcon} alt="Close Icon" style={{ width: '16px', height: '16px'}} />
       </button>
        <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification()}} />
      </ul>
    </div>
  );
}
