import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({displayDrawer}) {
  return (
    <React.Fragment>
      { displayDrawer ? (
	<div className='flex-it'>
          <div className='menuItem'>
            <p>Your notifications</p>
          </div>
          <div className='Notifications'>
            <p>
              Here is the list of notifications
            </p>
            <button 
	      style={{
	        display: 'inline',
                position: 'absolute',
	        right: '0px',
	        top: '2px',
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
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value= "New resume available" />
              <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
          </div>
	</div>
      ) : (
	<div className='menuItem'>
	  <p>YourNotifications</p>
	</div>
      )}
    </React.Fragment>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
}

Notifications.defaultProps = {
  displayDrawer: true,
}
