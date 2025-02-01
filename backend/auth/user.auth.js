const auth = (req, res, next) => {
  console.log("Authenticate");
  next();
};

export default auth;
