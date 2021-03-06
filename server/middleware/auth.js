const jwt = require('jsonwebtoken');
const config = require('../config/index');

const { JWT_SECRET } = config;

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: '토큰 없음, 인증 거부 ' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({ mes: '토큰값이 유효하지 않습니다' });
  }
};
module.exports = auth;
