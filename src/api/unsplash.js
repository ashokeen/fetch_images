import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YeDCCEAG3k4UQZjm5c865jiXHoheDPFnTZcMinqefJw",
  },
});
