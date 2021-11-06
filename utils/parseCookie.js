import cookie from "cookie";

const parseCookie = (req) => {
  const rawCookie = req.headers.cookie ?? "";
  const parsedCookie = cookie.parse(rawCookie);

  return parsedCookie.token ? parsedCookie : { token: "" };
};

export default parseCookie;
