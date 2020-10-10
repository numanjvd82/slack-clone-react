import React from 'react';
import './message.styles.scss';

const Message = ({ user, image, msg, timestamp }) => {
  return (
    <div className="message">
      <img src={image} alt="" />
      <div className="message__info">
        <h4>
          {user}{' '}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default Message;
