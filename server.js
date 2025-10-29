const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const session = require('express-session');

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'controlecaixa_secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Rotas
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const contagemRoutes = require('./routes/contagem');
const resultadoRoutes = require('./routes/resultado');

app.use('/', authRoutes);
app.use('/menu', menuRoutes);
app.use('/contagem', contagemRoutes);
app.use('/resultado', resultadoRoutes);

// Página inicial redireciona para login
app.get('/', (req, res) => {
  res.redirect('/login');
});

// 404
app.use((req, res) => {
  res.status(404).render('404');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
