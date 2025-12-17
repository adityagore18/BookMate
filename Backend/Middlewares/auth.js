const jwt =require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  console.log("HEADER TOKEN =", token);

  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const parts = token.split(" ");
    console.log("TOKEN PARTS =", parts);

    const decoded = jwt.verify(parts[1], "secret123");
    console.log("DECODED =", decoded);

    req.user = decoded.user;
    next();
  } catch (error) {
    console.log("JWT ERROR:", error.message);
    return res.status(401).json({ msg: "Invalid token" });
  }
};
