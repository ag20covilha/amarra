/* Gerado por ferramentas/atalho-site.js (repositório da Amarra). Não editar aqui. */
(function () {
  var EXEC = {
  "pioneiros": "https://script.google.com/a/macros/escutismo.pt/s/AKfycbxAulDShEPLMTE1WeFjjmllVb_xh7Gbwjv5VxfdwpxUvDaaqJMldkTFrHGDP4YXcnYT/exec"
};
  var n = 0;
  function perguntar(endereco, cb) {
    if (!endereco) return cb(null);
    var nome = 'amarraEstado_' + (++n) + '_' + Date.now(), s = document.createElement('script'), feito = false;
    var t = setTimeout(function () { fim(null); }, 10000);
    function fim(v) {
      if (feito) return; feito = true; clearTimeout(t);
      try { delete window[nome]; } catch (e) { window[nome] = undefined; }
      if (s.parentNode) s.parentNode.removeChild(s);
      cb(v);
    }
    window[nome] = function (r) { fim(r && typeof r.aberta === 'boolean' ? r.aberta : null); };
    s.onerror = function () { fim(null); };
    s.src = endereco + '?estado=1&cb=' + nome;
    (document.head || document.documentElement).appendChild(s);
  }
  /* por pasta (lobitos, exploradores, pioneiros, caminheiros) */
  function seccao(pasta, cb) { perguntar(EXEC[pasta], cb); }
  /* alguma aberta? true assim que uma responder true; false se todas fechadas */
  function alguma(cb) {
    var ps = Object.keys(EXEC), falta = ps.length, sim = false, duvida = false;
    if (!falta) return cb(false);
    ps.forEach(function (p) { seccao(p, function (a) {
      if (sim) return;
      if (a === true) { sim = true; return cb(true); }
      if (a === null) duvida = true;
      if (--falta === 0) cb(duvida ? null : false);
    }); });
  }
  window.AmarraEstado = { exec: EXEC, perguntar: perguntar, seccao: seccao, alguma: alguma };
})();
