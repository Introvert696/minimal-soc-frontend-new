export default {
  API_DEBAG: "http://localhost:8000/api/",
  API_URL: "http://localhost:8000/api/",
  API_PROD: "https://minimalsoc.eurodir.ru/api/",
  wsServer: new WebSocket("ws://193.104.57.31:27800"),
  getImage(image) {
    var imagestring = this.API_URL + "image/" + image;
    return imagestring;
  },
};
