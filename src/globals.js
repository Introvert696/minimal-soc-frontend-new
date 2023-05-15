export default {
  API_DEBAG: "http://localhost:8000/api/",
  API_URL: "http://localhost:8000/api/",
  API_PROD: "https://minimalsoc.eurodir.ru/api/",
  wsServer: new WebSocket("ws://193.104.57.31:27800"),
  getImage(image) {
    var imagestring = this.API_URL + "image/" + image;
    return imagestring;
  },
  formatDate(date) {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();
    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  },
  getPhotoUrl(name) {
    return this.API_URL + "image/" + name;
  },
};
