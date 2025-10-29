const axios = require('axios');
const API_URL = 'http://localhost:3000';

exports.getLogin = (req, res) => {
  res.render('login', { message: null });
};

exports.postLogin = async (req, res) => {
  const { login, senha } = req.body;
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username: login,
      password: senha
    });
    if (response.status === 200 && response.data.token) {
      res.cookie('token', response.data.token, { httpOnly: true });
      return res.redirect('/menu');
    }
    res.render('login', { message: 'Credenciais inválidas.' });
  } catch (err) {
    let msg = err.response && err.response.data && err.response.data.message ? err.response.data.message : 'Erro ao autenticar.';
    res.render('login', { message: msg });
  }
};

exports.getRegister = (req, res) => {
  res.render('register', { message: null });
};

exports.postRegister = async (req, res) => {
  const { login, senha } = req.body;
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username: login,
      password: senha
    });
    if (response.status === 201) {
      return res.redirect('/login');
    }
    res.render('register', { message: 'Erro ao cadastrar.' });
  } catch (err) {
    let msg = err.response && err.response.data && err.response.data.message ? err.response.data.message : 'Erro ao cadastrar.';
    res.render('register', { message: msg });
  }
};
