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

function calcularTotal(contagem) {
  let total = 0;
  for (let i = 0; i < DENOMINACOES.length; i++) {
    const qtd = Number(contagem[i] || 0);
    total += qtd * DENOMINACOES[i].valor;
  }
  return total;
}

exports.getResultado = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/login');
  const contagem = req.session.contagem || [];
  const total = calcularTotal(contagem);
  res.render('resultado', { contagem, total, revisando: false, message: null });
};

exports.postRevisar = (req, res) => {
  const contagem = req.session.contagem || [];
  res.render('resultado', { contagem, total: calcularTotal(contagem), revisando: true, message: null });
};

exports.postRecalcular = (req, res) => {
  const { quantidades } = req.body;
  req.session.contagem = quantidades;
  res.render('resultado', { contagem: quantidades, total: calcularTotal(quantidades), revisando: false, message: 'Total recalculado!' });
};
