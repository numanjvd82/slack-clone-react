import React, { useState, useEffect } from 'react';
import './sidebar.styles.scss';
import SidebarOption from './sidebaroption';
import db from '../../firebase/firebase';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import ChatIcon from '@material-ui/icons/Chat';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    //  Run this code ONCE when the sidebar component loads
    db.collection('rooms').onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().Name,
        }))
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>SlayerN5</h2>
          <h3>
            <FiberManualRecordIcon />
            Numan Javed
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={ChatIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & User groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File Browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channels" />

      {/* Connect to DB and Get all the channels in the database */}
      {/* Also gonna use sidebarOption component again for channels icon */}
      {channels.map((channel) => {
        return (
          <SidebarOption
            key={channel.id}
            title={channel.name}
            id={channel.id}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
