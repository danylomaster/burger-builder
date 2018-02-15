import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-fe9d7.firebaseio.com/"
});

export default instance;
