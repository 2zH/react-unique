import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// material-ui-component
import {Card, CardHeader, CardText} from 'material-ui/Card';
// waterfall
import AutoResponsive from 'autoresponsive-react';
// basic component
import HiddenLayout from './layout/HiddenLayout';
// redux
import { connect } from 'react-redux';
import { getCards, getContainerWidth, getCardsUI } from '../reducers';
import { setContainerWidth, setChildsStyle } from '../actions';

const cardFactory = (arr, ui) => {
  if (!arr) return;
  return arr.map((obj, key) => {
    return (
      <Card key={Math.random().toString(36).substr(2)} style={ui ? ui.key : {width: "240px"}} className="item">
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

const mapStateToProps = state => ({
  cards: getCards(state.cards),
  containerWidth: getContainerWidth(state.ui),
  uiCard: getCardsUI(state.ui)
})

const getAutoResponsiveProps = containerWidth => ({
  itemMargin: 10,
  containerWidth: containerWidth,
  itemClassName: 'item',
  transitionDuration: '.5'
})

@connect(mapStateToProps, { setContainerWidth, setChildsStyle })
class Drafts extends Component {

  componentDidMount() {
    const { setContainerWidth, setChildsStyle } = this.props;
    window.addEventListener('resize', () => {
      setContainerWidth(ReactDOM.findDOMNode(this.refs.container).clientWidth)
    })
    setChildsStyle(this.getChildsHeight()
      .map((height, key) => {
        return {
          width: "240px", 
          height: `${height}px`
        };
      }))
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
    const { cards } = this.props;
    return (
      <section>
        <AutoResponsive ref="container" {...getAutoResponsiveProps()}>
          {cardFactory(cards)}
        </AutoResponsive>
        <HiddenLayout ref="hiddenContainer">{cardFactory(cards)}</HiddenLayout>
      </section>
    );
  }
}

export default Drafts;
