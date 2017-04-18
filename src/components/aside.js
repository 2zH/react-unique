import React, { Component } from 'react';
// material-ui-componentonMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Inbox from 'material-ui/svg-icons/content/inbox';
import Send from 'material-ui/svg-icons/content/send';
import Drafts from 'material-ui/svg-icons/content/drafts';
import Grade from 'material-ui/svg-icons/action/grade';
// mobx
import {observer} from "mobx-react";
import drawer from "../store/drawer";
// router
import {
  Link
} from 'react-router-dom'

@observer
class Aside extends Component {

  render() {
    return (
      <aside style={drawer.css.aside}>
        <Menu style={drawer.css.menu}>
          <Link to="/"><MenuItem primaryText="Home" rightIcon={<Inbox />} /></Link>
          <Link to="/starred"><MenuItem primaryText="Starred" rightIcon={<Grade />} /></Link>
          <Link to="/inbox"><MenuItem primaryText="Inbox" rightIcon={<Inbox />} /></Link>
          <Link to="/drafts"><MenuItem primaryText="Drafts" rightIcon={<Drafts />} /></Link>
          <Link to="/sentmail"><MenuItem primaryText="Sent mail" rightIcon={<Send />} /></Link>
        </Menu>
      </aside>
    );
  }
}

export default Aside;
