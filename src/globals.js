export default {
  API_DEBAG: "http://127.0.0.1:8000/api/",
  API_URL: "https://minimalsoc.eurodir.ru/api/",
  API_PROD: "https://minimalsoc.eurodir.ru/api/",
  wsServer: new WebSocket("wss://introvert696.site:27800"),
  // wsServer: new WebSocket("ws://127.0.0.1:27800"),
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
