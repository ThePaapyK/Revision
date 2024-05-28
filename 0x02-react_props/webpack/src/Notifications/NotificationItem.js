import React from 'react';
import './Notifications.css';
import propTypes from 'prop-types';

export default function NotificationItem({type, html, value}) {
  return (
    <>
      { type  && value? <li data-notification-type={ type }>{ value }</li> : null }
      { html? <li dangerouslySetInnerHTML={{__html: html }}></li> : null }
    </>
  );
}

