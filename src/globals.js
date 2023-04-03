export default {
  API_URL: "http://127.0.0.1:8000/api/",
  methods: {
    getImage(image) {
      var imagestring = this.API_URL + "image/" + image;
      return imagestring;
    },
  },
};
