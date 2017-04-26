import React, { Component } from 'react';
// material-ui-componentonMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Inbox from 'material-ui/svg-icons/content/inbox';
import Send from 'material-ui/svg-icons/content/send';
import Drafts from 'material-ui/svg-icons/content/drafts';
import Grade from 'material-ui/svg-icons/action/grade';
// redux
import { connect } from "react-redux";
import { getDrawerAffectedUI } from '../reducers';
// router
import {
  Link
} from 'react-router-dom'

const mapStateToProps = state => ({
  AffectedUI: getDrawerAffectedUI(state.ui)
})

@connect(mapStateToProps)
class Aside extends Component {

  render() {
    const { aside, menu } = this.props.AffectedUI;
    return (
      <aside style={aside}>
        <Menu style={menu}>
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
