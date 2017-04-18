import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// material-ui-component
import {Card, CardHeader, CardText} from 'material-ui/Card';
// mobx
import {observer} from "mobx-react";
import waterfall from '../store/waterfall';
// waterfall
import AutoResponsive from 'autoresponsive-react';
// basic component
import HiddenLayout from './layout/HiddenLayout';


const getCards = (arr) => {
  if (!arr) return;
  return arr.map(obj => {
    return (
      <Card key={Math.random().toString(36).substr(2)} style={obj.style || {width: "240px"}} className="item">
        <CardHeader 
          title={obj.title}
          subtitle={obj.subtitle}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          {obj.content}
        </CardText>
      </Card>
    )
  })
}

@observer
class Sentmail extends Component {

  componentDidMount() {
    window.addEventListener('resize', () => {
      waterfall.setContainerWidth(ReactDOM.findDOMNode(this.refs.container).clientWidth)
    })
    waterfall.setChildsStyle(this.getChildsHeight()
      .map(height => {
        return {
          width: "220px", 
          height: `${height}px`
        };
      }))
  }

  componentWillReact() {
        console.log("I will re-render, since the todo has changed!");
    }

  getChildsHeight = () => {
    let list = [];
    const hiddenContainer = ReactDOM.findDOMNode(this.refs.hiddenContainer).childNodes;
    hiddenContainer.forEach(node => {
      list.push(node.clientHeight);
    })
    return list;
  } 

  render() {
    return (
      <section>
        {waterfall.toggler && <AutoResponsive ref="container" {...waterfall.getAutoResponsiveProps}>
          {getCards(waterfall.childs)}
        </AutoResponsive>}
        <HiddenLayout ref="hiddenContainer">{getCards(waterfall.childs)}</HiddenLayout>
      </section>
    );
  }
}

export default Sentmail;
