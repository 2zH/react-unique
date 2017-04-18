import {observable, computed, action, autorun} from "mobx";

class Drawer{

  @observable toggle = true;

  constructor() {
    autorun(() => {
      console.log(`toggle: ${this.toggle}`);
    })
  }

  @computed get css() {
    return {
      aside: this.toggle ? {width: "280px"} : {width: "54px"},
      menu: this.toggle ? {transform: "translateX(0)"} : {transform: "translateX(-226px)"}
    }
  }

  @action trigger = () => {
    this.toggle = this.toggle ? false : true;
  }

}

let drawer = new Drawer();

export default drawer;