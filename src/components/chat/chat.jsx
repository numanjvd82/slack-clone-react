import React, { useEffect, useState } from 'react';
import './chat.styles.scss';
import Message from './message';
import db from '../../firebase/firebase';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          setRoomMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);
  console.log(roomMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header-left">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.Name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__header-right">
          <p>
            <InfoIcon />
            Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ msg, timestamp, user, image }) => {
          return (
            <Message
              msg={msg}
              timestamp={timestamp}
              user={user}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
