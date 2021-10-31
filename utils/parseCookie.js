import cookie from "cookie";

const parseCookie = (req) => {
  return cookie.parse(req ? req.headers.cookie || "" : "");
};

export default parseCookie;
