exports.getMenu = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/login');
  res.render('menu');
};

exports.postLogout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
};
