import {autorun, observable, action, computed, extendObservable} from 'mobx';
import Api from '../api';

class Waterfall {

  @observable containerWidth;
  @observable childs = [];
  @observable toggler = false;

  constructor() {
    const data = Api.getMockData(10);
    this.childs = data;
    autorun(() => {
      console.log(`container: ${this.containerWidth}`);
      console.dir(this.childs);
    })
  }

  @computed get getAutoResponsiveProps() {
    return {
      itemMargin: 10,
      containerWidth: this.containerWidth || document.body.clientWidth - 224,
      itemClassName: 'item',
      transitionDuration: '.5'
    }
  }

  @action setContainerWidth = v => {
    this.containerWidth = v;
  }

  @action setChilds = (childList) => {
    this.childs = childList;
  }

  @action setChildsStyle = arr => { 
    console.log(arr);
    let childsClone = this.childs.slice();
    for (let i = 0;i < arr.length; i++) {
      extendObservable(childsClone[i], {
        style: observable(arr[i])
      });
    }
    this.setChilds(childsClone);
    this.setToggler();
  }

  @action setToggler = () => {
    if (!this.toggler) this.toggler = true;
  }

  @action setChildsSize = (key, obj) => {
    let size = Object.assign(this.childs[key].style, obj);
    this.childs[key].style = size;
  }
}

let waterfall = new Waterfall();

export default waterfall;