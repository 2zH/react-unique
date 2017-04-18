import React, { Component } from 'react';
// material-ui-component
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
// icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// mobx
import {observer} from "mobx-react";
import drawer from "../store/drawer";


// console.log(theme);

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

@observer
class Header extends Component {

  render() {
    return (
        <header>
          <AppBar
            title="Unique Moe"
            iconElementRight={<Logged />}
            onLeftIconButtonTouchTap={drawer.trigger}
          />
        </header>
    );
  }
}

export default Header;
