import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// css
import './App.styl';
// basic component
import Header from './components/header';
import Aside from './components/aside';
import Home from './components/home';
import { asyncComponent } from 'react-async-component';

const lazyLoad = component => asyncComponent({
  resolve: () => import(`./components/${component}`),
  name: component
})

const onUpdate = () => {window.scroll(0, 0);}

class App extends Component {

  render() {
    return (
      <Router onUpdate={onUpdate}>
        <div>
          <Header />
          <main>
            <Aside />
            <Route exact={true} path="/" component={Home}/>
            <Route path="/starred" component={lazyLoad('starred')}/>
            <Route path="/inbox" component={lazyLoad('inbox')}/>
            <Route path="/drafts" component={lazyLoad('drafts')}/>
            <Route path="/sentmail" component={lazyLoad('sentmail')}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
