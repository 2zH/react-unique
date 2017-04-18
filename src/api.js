
class Api {

  static getMockData = (len) => {
    let arr = [];
    for (let i = 0; i < len; i++) {
      arr.push({
        title: "first card",
        subtitle: "from zH",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`,
        key: i
      })
    }
    return arr;
  }
  
}

export default Api;