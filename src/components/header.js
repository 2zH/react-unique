import React, { Component } from 'react';
// material-ui-component
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
// icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// redux
import { setDrawerToggler } from '../actions';
import { connect } from 'react-redux';


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

@connect(null, { setDrawerToggler })
class Header extends Component {

  render() {
    const { setDrawerToggler } = this.props;
    return (
        <header>
          <AppBar
            title="Unique Moe"
            iconElementRight={<Logged />}
            onLeftIconButtonTouchTap={() => setDrawerToggler()}
          />
        </header>
    );
  }
}

export default Header;
