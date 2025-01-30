let urlCartoesData = "../data/campeonato-brasileiro-cartoes.csv";
let urlEstatisticasData = "../data/campeonato-brasileiro-estatisticas-full.csv";
let urlPartidasData = "../data/campeonato-brasileiro-full.csv";
let urlGolsData = "../data/campeonato-brasileiro-gols.csv";

let urlCartoes = "./view-cartoes.json";
let urlEstatisticas = "./view-estatisticas.json";
let urlPartidas = "./view-partidas.json";
let urlGols = "./view-gols.json";
let urlPorAno = "./view-por-ano.json";

let urlList = [urlGols, urlPartidas, urlEstatisticas, urlCartoes, urlPorAno]
    

async function render(urlList) {
    let index = 0
    
    for (url of urlList){
        const id = `vis${index}`
        const body  = document.querySelector('body');
        const div = document.createElement('div');
        div.id = id;
        body.appendChild(div);
        
        const res = await fetch(url);
        const out = await res.json();
        vegaEmbed(`#${id}`, out);
        index += 1;
    }
}

render(urlList)



