const DENOMINACOES = [
  { tipo: 'nota', valor: 200 },
  { tipo: 'nota', valor: 100 },
  { tipo: 'nota', valor: 50 },
  { tipo: 'nota', valor: 20 },
  { tipo: 'nota', valor: 10 },
  { tipo: 'nota', valor: 5 },
  { tipo: 'nota', valor: 2 },
  { tipo: 'moeda', valor: 1 },
  { tipo: 'moeda', valor: 0.5 },
  { tipo: 'moeda', valor: 0.25 },
  { tipo: 'moeda', valor: 0.1 },
  { tipo: 'moeda', valor: 0.05 }
];

exports.getContagem = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/login');
  // Inicializa contagem se não existir
  if (!req.session.contagem) {
    req.session.contagem = [];
    req.session.idx = 0;
  }
  const idx = req.session.idx || 0;
  const denom = DENOMINACOES[idx];
  res.render('contagem', {
    denom,
    idx,
    total: req.session.contagem,
    message: null
  });
};

exports.postNextDenominacao = (req, res) => {
  const { quantidade } = req.body;
  const idx = req.session.idx || 0;
  if (!req.session.contagem) req.session.contagem = [];
  req.session.contagem[idx] = quantidade;
  req.session.idx = idx + 1;
  if (req.session.idx >= DENOMINACOES.length) {
    return res.redirect('/resultado');
  }
  res.redirect('/contagem');
};

exports.postFinalizarContagem = (req, res) => {
  res.redirect('/resultado');
};
