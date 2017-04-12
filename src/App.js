import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';
// material-ui-component
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
// icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// css
import './App.css';
// mobx
import {observer} from "mobx-react";

console.log(theme);

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
class App extends Component {

  TestFetchProxy = async() => {
    const req = await fetch("https://unique.moe/api/article/1").then(body => body.json());
    console.log(req);
    return 1;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <AppBar
          title="Unique Moe"
          iconElementRight={<Logged />}
        />
      </MuiThemeProvider>
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //     <button onClick={this.TestFetchProxy}>If you click me, i will fetch test's data and log in console.</button>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
