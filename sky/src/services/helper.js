export const dateMaker = (timestamp) => {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let timeObject = new Date(timestamp * 1000);
  let date = timeObject.toLocaleDateString("en-US", options)
  // console.log(date)
  return date
}

export const timeConverter = (timestamp) => {
  let timeObject = new Date(timestamp * 1000);
  let time = Object.values(timeObject.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3"));
  return time
}