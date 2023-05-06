export default {
  API_URL: "http://localhost:8000/api/",
  wsServer: new WebSocket("ws://127.0.0.1:27800"),
  getImage(image) {
    var imagestring = this.API_URL + "image/" + image;
    return imagestring;
  },
};
