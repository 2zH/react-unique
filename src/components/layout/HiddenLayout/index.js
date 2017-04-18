import React, {Component} from 'react';


const style = () => {
  return {
    position: "fixed",
    visibility: "hidden",
    zIndex: "-1"
  }
}

export default class HiddenLayout extends Component {

  render () {
    return (
      <div style={style()}>
        {this.props.children}
      </div>
    )
  }
}