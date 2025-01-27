let urlCartoesData = "../data/campeonato-brasileiro-cartoes.csv";
let urlEstatisticasData = "../data/campeonato-brasileiro-estatisticas-full.csv";
let urlPartidasData = "../data/campeonato-brasileiro-full.csv";
let urlGolsData = "../data/campeonato-brasileiro-gols.csv";

let urlCartoes = "../data/campeonato-brasileiro-cartoes.csv";
let urlEstatisticas = "./view-estatisticas.json";
let urlPartidas = "../data/campeonato-brasileiro-full.csv";
let urlGols = "../data/campeonato-brasileiro-gols.csv";

fetch(urlEstatisticas)
    .then(res => res.json())
        .then(out => {
            vegaEmbed('#vis', out);
        })
    .catch(err => { throw err });