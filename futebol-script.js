// DADOS DOS TIMES DE FUTEBOL - 94 times no total!

const footballTeams = {
    brasileiraoA: [
        {name:"Flamengo",strength:80,logo:"futebol/brasileiraoA/flamengo.png"},
        {name:"Palmeiras",strength:79,logo:"futebol/brasileiraoA/palmeiras.png"},
        {name:"Cruzeiro",strength:78,logo:"futebol/brasileiraoA/cruzeiro.png"},
        {name:"Fluminense",strength:78,logo:"futebol/brasileiraoA/fluminense.png"},
        {name:"Corinthians",strength:78,logo:"futebol/brasileiraoA/corinthians.png"},
        {name:"Botafogo",strength:76,logo:"futebol/brasileiraoA/botafogo.png"},
        {name:"Bahia",strength:77,logo:"futebol/brasileiraoA/bahia.png"},
        {name:"São Paulo",strength:75,logo:"futebol/brasileiraoA/saopaulo.png"},
        {name:"Grêmio",strength:76,logo:"futebol/brasileiraoA/gremio.png"},
        {name:"RB Bragantino",strength:76,logo:"futebol/brasileiraoA/bragantino.png"},
        {name:"Mirassol",strength:74,logo:"futebol/brasileiraoA/mirassol.png"},
        {name:"Atlético-MG",strength:75,logo:"futebol/brasileiraoA/atleticomg.png"},
        {name:"Santos",strength:74,logo:"futebol/brasileiraoA/santos.png"},
        {name:"Internacional",strength:74,logo:"futebol/brasileiraoA/internacional.png"},
        {name:"Vasco",strength:74,logo:"futebol/brasileiraoA/vasco.png"},
        {name:"Vitória",strength:73,logo:"futebol/brasileiraoA/vitoria.png"},
        {name:"Coritiba",strength:75,logo:"futebol/brasileiraoA/coritiba.png"},
        {name:"Athletico-PR",strength:76,logo:"futebol/brasileiraoA/athleticopr.png"},
        {name:"Chapecoense",strength:72,logo:"futebol/brasileiraoA/chapecoense.png"},
        {name:"Remo",strength:73,logo:"futebol/brasileiraoA/remo.png"}
    ],
    brasileiraoB: [
        {name:"Ceará",strength:73,logo:"futebol/brasileiraoB/ceara.png"},
        {name:"Fortaleza",strength:73,logo:"futebol/brasileiraoB/fortaleza.png"},
        {name:"Juventude",strength:73,logo:"futebol/brasileiraoB/juventude.png"},
        {name:"Sport",strength:72,logo:"futebol/brasileiraoB/sport.png"},
        {name:"Criciúma",strength:73,logo:"futebol/brasileiraoB/criciuma.png"},
        {name:"Goiás",strength:73,logo:"futebol/brasileiraoB/goias.png"},
        {name:"Novorizontino",strength:72,logo:"futebol/brasileiraoB/novorizontino.png"},
        {name:"CRB",strength:71,logo:"futebol/brasileiraoB/crb.png"},
        {name:"Avaí",strength:71,logo:"futebol/brasileiraoB/avai.png"},
        {name:"Cuiabá",strength:71,logo:"futebol/brasileiraoB/cuiaba.png"},
        {name:"Atlético-GO",strength:71,logo:"futebol/brasileiraoB/atleticogo.png"},
        {name:"Operário",strength:70,logo:"futebol/brasileiraoB/operario.png"},
        {name:"Vila Nova",strength:72,logo:"futebol/brasileiraoB/vilanova.png"},
        {name:"América-MG",strength:69,logo:"futebol/brasileiraoB/americamg.png"},
        {name:"Athletic Club",strength:69,logo:"futebol/brasileiraoB/athletic.png"},
        {name:"Botafogo-SP",strength:69,logo:"futebol/brasileiraoB/botafogosp.png"},
        {name:"Ponte Preta",strength:66,logo:"futebol/brasileiraoB/pontepreta.png"},
        {name:"Londrina",strength:69,logo:"futebol/brasileiraoB/londrina.png"},
        {name:"Náutico",strength:69,logo:"futebol/brasileiraoB/nautico.png"},
        {name:"São Bernardo",strength:69,logo:"futebol/brasileiraoB/saobernardo.png"}
    ],
    champions: [
        {name:"Arsenal",strength:85,logo:"futebol/champions/arsenal.png"},
        {name:"Bayern",strength:85,logo:"futebol/champions/bayern.png"},
        {name:"Liverpool",strength:84,logo:"futebol/champions/liverpool.png"},
        {name:"Barcelona",strength:84,logo:"futebol/champions/barcelona.png"},
        {name:"Chelsea",strength:83,logo:"futebol/champions/chelsea.png"},
        {name:"Man City",strength:83,logo:"futebol/champions/mancity.png"},
        {name:"Real Madrid",strength:84,logo:"futebol/champions/realmadrid.png"},
        {name:"Inter",strength:81,logo:"futebol/champions/inter.png"},
        {name:"PSG",strength:86,logo:"futebol/champions/psg.png"},
        {name:"Newcastle",strength:80,logo:"futebol/champions/newcastle.png"},
        {name:"Juventus",strength:80,logo:"futebol/champions/juventus.png"},
        {name:"Atlético Madrid",strength:80,logo:"futebol/champions/atleticomadrid.png"},
        {name:"Tottenham",strength:79,logo:"futebol/champions/tottenham.png"},
        {name:"Sporting",strength:79,logo:"futebol/champions/sporting.png"},
        {name:"Borussia",strength:79,logo:"futebol/champions/borussia.png"},
        {name:"Atalanta",strength:78,logo:"futebol/champions/atalanta.png"},
        {name:"Benfica",strength:78,logo:"futebol/champions/benfica.png"},
        {name:"Napoli",strength:78,logo:"futebol/champions/napoli.png"},
        {name:"PSV",strength:78,logo:"futebol/champions/psv.png"},
        {name:"Leverkusen",strength:77,logo:"futebol/champions/leverkusen.png"},
        {name:"Ajax",strength:77,logo:"futebol/champions/ajax.png"},
        {name:"Marseille",strength:77,logo:"futebol/champions/marseille.png"},
        {name:"Olympiacos",strength:76,logo:"futebol/champions/olympiacos.png"},
        {name:"Club Brugge",strength:76,logo:"futebol/champions/brugge.png"},
        {name:"Galatasaray",strength:76,logo:"futebol/champions/galatasaray.png"},
        {name:"Monaco",strength:76,logo:"futebol/champions/monaco.png"},
        {name:"Qarabag",strength:75,logo:"futebol/champions/qarabag.png"},
        {name:"Bodo/Glimt",strength:75,logo:"futebol/champions/bodo.png"}
    ],
    america: [
        {name:"River Plate",strength:76,logo:"futebol/america/riverplate.png"},
        {name:"Racing",strength:76,logo:"futebol/america/racing.png"},
        {name:"LDU",strength:76,logo:"futebol/america/ldu.png"},
        {name:"Boca Juniors",strength:75,logo:"futebol/america/boca.png"},
        {name:"Estudiantes",strength:75,logo:"futebol/america/estudiantes.png"},
        {name:"Vélez",strength:75,logo:"futebol/america/velez.png"},
        {name:"Rosario Central",strength:75,logo:"futebol/america/rosario.png"},
        {name:"Nacional",strength:75,logo:"futebol/america/nacional.png"},
        {name:"Peñarol",strength:75,logo:"futebol/america/penarol.png"},
        {name:"Barcelona SC",strength:75,logo:"futebol/america/barcelonasc.png"},
        {name:"Ind. del Valle",strength:75,logo:"futebol/america/indvalle.png"},
        {name:"Colo-Colo",strength:75,logo:"futebol/america/colocolo.png"},
        {name:"U. Católica",strength:75,logo:"futebol/america/ucatolica.png"},
        {name:"Atl. Nacional",strength:75,logo:"futebol/america/atlnacional.png"},
        {name:"Argentinos Jrs",strength:74,logo:"futebol/america/argentinos.png"},
        {name:"Huracán",strength:74,logo:"futebol/america/huracan.png"},
        {name:"Independiente",strength:74,logo:"futebol/america/independiente.png"},
        {name:"Lanús",strength:74,logo:"futebol/america/lanus.png"},
        {name:"U. de Chile",strength:74,logo:"futebol/america/uchile.png"},
        {name:"Bolívar",strength:74,logo:"futebol/america/bolivar.png"},
        {name:"The Strongest",strength:74,logo:"futebol/america/strongest.png"},
        {name:"Junior",strength:74,logo:"futebol/america/junior.png"},
        {name:"Ind. Medellín",strength:74,logo:"futebol/america/indmedellin.png"},
        {name:"Libertad",strength:74,logo:"futebol/america/libertad.png"},
        {name:"Olimpia",strength:74,logo:"futebol/america/olimpia.png"},
        {name:"Alianza Lima",strength:74,logo:"futebol/america/alianza.png"}
    ]
};

// CONCATENAR TODOS OS TIMES EM UMA LISTA
const allFootballTeams = [
    ...footballTeams.brasileiraoA,
    ...footballTeams.brasileiraoB,
    ...footballTeams.champions,
    ...footballTeams.america
];

// Criar grupos adicionais
const brasilGeral = [...footballTeams.brasileiraoA, ...footballTeams.brasileiraoB];
const europa = [...footballTeams.champions];
const americaGeral = [...footballTeams.brasileiraoA, ...footballTeams.brasileiraoB, ...footballTeams.america]; // TODOS os times das américas (Brasil + Resto)

let currentLeague = 'brasilGeral';
let selectedGameCount = 1;
let currentTeams = brasilGeral;
let penaltiesEnabled = true;

const homeTeamSelect = document.getElementById('homeTeam');
const awayTeamSelect = document.getElementById('awayTeam');
const homeTeamInfo = document.getElementById('homeTeamInfo');
const awayTeamInfo = document.getElementById('awayTeamInfo');
const simulateBtn = document.getElementById('simulateBtn');
const resultContainer = document.getElementById('result');
const simulateAgainBtn = document.getElementById('simulateAgain');
const countButtons = document.querySelectorAll('.count-btn');
const leagueButtons = document.querySelectorAll('.league-btn');
const penaltiesCheckbox = document.getElementById('penaltiesEnabled');

function switchLeague(league) {
    currentLeague = league;
    document.body.className = league + '-theme';
    populateTeamSelects();
    resetSelections();
}

function populateTeamSelects() {
    let teamsToShow = [];
    
    // Filtrar times baseado na liga selecionada
    if (currentLeague === 'geral') {
        teamsToShow = allFootballTeams;
        console.log('Liga GERAL selecionada - Mostrando todos os 94 times');
    } else if (currentLeague === 'brasileiraoA') {
        teamsToShow = footballTeams.brasileiraoA;
        console.log('Brasileirão A selecionado - Mostrando 20 times');
    } else if (currentLeague === 'brasileiraoB') {
        teamsToShow = footballTeams.brasileiraoB;
        console.log('Brasileirão B selecionado - Mostrando 20 times');
    } else if (currentLeague === 'brasilGeral') {
        teamsToShow = brasilGeral;
        console.log('Brasil Geral selecionado - Mostrando 40 times brasileiros');
    } else if (currentLeague === 'champions') {
        teamsToShow = footballTeams.champions;
        console.log('Champions (Europa) selecionada - Mostrando 28 times');
    } else if (currentLeague === 'americaGeral') {
        teamsToShow = americaGeral;
        console.log('América Geral selecionada - Mostrando 66 times das américas');
    } else if (currentLeague === 'america') {
        teamsToShow = footballTeams.america;
        console.log('Resto da América selecionado - Mostrando 26 times (sem Brasil)');
    } else {
        teamsToShow = allFootballTeams;
        console.log('Fallback - Mostrando todos os times');
    }
    
    console.log('Total de times a mostrar:', teamsToShow.length);
    
    const sorted = [...teamsToShow].sort((a,b) => a.name.localeCompare(b.name));
    homeTeamSelect.innerHTML = '<option value="">Selecione...</option>';
    awayTeamSelect.innerHTML = '<option value="">Selecione...</option>';
    
    sorted.forEach(team => {
        const opt1 = document.createElement('option');
        opt1.value = team.name;
        opt1.textContent = team.name;
        homeTeamSelect.appendChild(opt1);
        
        const opt2 = document.createElement('option');
        opt2.value = team.name;
        opt2.textContent = team.name;
        awayTeamSelect.appendChild(opt2);
    });
}

function showTeamInfo(teamName, infoElement) {
    const team = allFootballTeams.find(t => t.name === teamName);
    
    if (team) {
        infoElement.innerHTML = `
            <div class="team-logo">
                <img src="${team.logo}" alt="${team.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='⚽';">
            </div>
            <div class="record">Força: ${team.strength}/100</div>
            <div class="win-pct">⭐⭐⭐⭐⭐</div>
        `;
        infoElement.classList.add('active');
    } else {
        infoElement.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">${infoElement.id === 'homeTeamInfo' ? '🏟️' : '✈️'}</div>
                <p>Selecione o time</p>
            </div>
        `;
        infoElement.classList.remove('active');
    }
    checkReadyToSimulate();
}

function checkReadyToSimulate() {
    const h = homeTeamSelect.value;
    const a = awayTeamSelect.value;
    simulateBtn.disabled = !(h && a && h !== a);
}

function simulateSingleMatch(homeTeam, awayTeam, isHomeAdvantage) {
    const homeBonus = isHomeAdvantage ? 4 : 0; // 4 pontos de bônus casa (reduzido)
    const randomness = 8; // 8 pontos de aleatoriedade (reduzido de 12)
    
    // Calcular força real de cada time neste jogo
    const homeStr = homeTeam.strength + homeBonus + (Math.random() * 2 - 1) * randomness;
    const awayStr = awayTeam.strength + (Math.random() * 2 - 1) * randomness;
    
    // A DIFERENÇA REAL entre os times determina o resultado
    const diff = homeStr - awayStr;
    
    console.log(`${homeTeam.name} (${homeTeam.strength}) vs ${awayTeam.name} (${awayTeam.strength})`);
    console.log(`Força no jogo: ${homeStr.toFixed(1)} vs ${awayStr.toFixed(1)} | Diferença: ${diff.toFixed(1)}`);
    
    let homeGoals, awayGoals;
    
    // SISTEMA BASEADO NA DIFERENÇA ENTRE OS TIMES
    // ZEBRAS AGORA SÃO MUITO MAIS RARAS
    
    // ========================================
    // DIFERENÇA ABSURDA (>= 12 pontos) - Arsenal vs Atlético-GO
    // ========================================
    if (diff >= 12) {
        // Time casa ABSURDAMENTE mais forte - IMPOSSÍVEL perder
        const rand = Math.random() * 100;
        if (rand < 3) { homeGoals = 2; awayGoals = 0; }        // 3%: 2-0
        else if (rand < 12) { homeGoals = 3; awayGoals = 0; }  // 9%: 3-0
        else if (rand < 30) { homeGoals = 3; awayGoals = 1; }  // 18%: 3-1
        else if (rand < 55) { homeGoals = 4; awayGoals = 0; }  // 25%: 4-0
        else if (rand < 80) { homeGoals = 4; awayGoals = 1; }  // 25%: 4-1
        else if (rand < 95) { homeGoals = 3; awayGoals = 2; }  // 15%: 3-2
        else { homeGoals = 2; awayGoals = 1; }                  // 5%: 2-1
    }
    else if (diff <= -12) {
        const rand = Math.random() * 100;
        if (rand < 3) { homeGoals = 0; awayGoals = 2; }
        else if (rand < 12) { homeGoals = 0; awayGoals = 3; }
        else if (rand < 30) { homeGoals = 1; awayGoals = 3; }
        else if (rand < 55) { homeGoals = 0; awayGoals = 4; }
        else if (rand < 80) { homeGoals = 1; awayGoals = 4; }
        else if (rand < 95) { homeGoals = 2; awayGoals = 3; }
        else { homeGoals = 1; awayGoals = 2; }
    }
    
    // ========================================
    // DIFERENÇA GIGANTE (8 a 11 pontos)
    // ========================================
    else if (diff >= 8 && diff < 12) {
        // Time casa MUITO mais forte - domínio quase total
        const rand = Math.random() * 100;
        if (rand < 5) { homeGoals = 1; awayGoals = 0; }        // 5%: 1-0
        else if (rand < 18) { homeGoals = 2; awayGoals = 0; }  // 13%: 2-0
        else if (rand < 38) { homeGoals = 2; awayGoals = 1; }  // 20%: 2-1
        else if (rand < 60) { homeGoals = 3; awayGoals = 0; }  // 22%: 3-0
        else if (rand < 80) { homeGoals = 3; awayGoals = 1; }  // 20%: 3-1
        else if (rand < 95) { homeGoals = 4; awayGoals = 1; }  // 15%: 4-1
        else if (rand < 99) { homeGoals = 2; awayGoals = 2; }  // 4%: 2-2 (raro)
        else { homeGoals = 1; awayGoals = 1; }                  // 1%: 1-1 (muito raro)
    }
    else if (diff > -12 && diff <= -8) {
        const rand = Math.random() * 100;
        if (rand < 5) { homeGoals = 0; awayGoals = 1; }
        else if (rand < 18) { homeGoals = 0; awayGoals = 2; }
        else if (rand < 38) { homeGoals = 1; awayGoals = 2; }
        else if (rand < 60) { homeGoals = 0; awayGoals = 3; }
        else if (rand < 80) { homeGoals = 1; awayGoals = 3; }
        else if (rand < 95) { homeGoals = 1; awayGoals = 4; }
        else if (rand < 99) { homeGoals = 2; awayGoals = 2; }
        else { homeGoals = 1; awayGoals = 1; }
    }
    
    // ========================================
    // DIFERENÇA GRANDE (5 a 7 pontos)
    // ========================================
    else if (diff >= 5 && diff < 8) {
        // Time casa mais forte - vantagem clara
        const rand = Math.random() * 100;
        if (rand < 8) { homeGoals = 1; awayGoals = 0; }        // 8%: 1-0
        else if (rand < 20) { homeGoals = 2; awayGoals = 0; }  // 12%: 2-0
        else if (rand < 40) { homeGoals = 2; awayGoals = 1; }  // 20%: 2-1
        else if (rand < 58) { homeGoals = 3; awayGoals = 1; }  // 18%: 3-1
        else if (rand < 72) { homeGoals = 3; awayGoals = 2; }  // 14%: 3-2
        else if (rand < 84) { homeGoals = 1; awayGoals = 1; }  // 12%: 1-1
        else if (rand < 94) { homeGoals = 2; awayGoals = 2; }  // 10%: 2-2
        else if (rand < 98) { homeGoals = 1; awayGoals = 2; }  // 4%: 1-2 (zebra)
        else { homeGoals = 0; awayGoals = 1; }                  // 2%: 0-1 (zebra rara)
    }
    else if (diff > -8 && diff <= -5) {
        const rand = Math.random() * 100;
        if (rand < 8) { homeGoals = 0; awayGoals = 1; }
        else if (rand < 20) { homeGoals = 0; awayGoals = 2; }
        else if (rand < 40) { homeGoals = 1; awayGoals = 2; }
        else if (rand < 58) { homeGoals = 1; awayGoals = 3; }
        else if (rand < 72) { homeGoals = 2; awayGoals = 3; }
        else if (rand < 84) { homeGoals = 1; awayGoals = 1; }
        else if (rand < 94) { homeGoals = 2; awayGoals = 2; }
        else if (rand < 98) { homeGoals = 2; awayGoals = 1; }
        else { homeGoals = 1; awayGoals = 0; }
    }
    
    // ========================================
    // DIFERENÇA MÉDIA (3 a 4 pontos)
    // ========================================
    else if (diff >= 3 && diff < 5) {
        // Time casa favorito moderado
        const rand = Math.random() * 100;
        if (rand < 10) { homeGoals = 1; awayGoals = 0; }       // 10%: 1-0
        else if (rand < 24) { homeGoals = 2; awayGoals = 0; }  // 14%: 2-0
        else if (rand < 44) { homeGoals = 2; awayGoals = 1; }  // 20%: 2-1
        else if (rand < 60) { homeGoals = 1; awayGoals = 1; }  // 16%: 1-1
        else if (rand < 73) { homeGoals = 3; awayGoals = 1; }  // 13%: 3-1
        else if (rand < 83) { homeGoals = 0; awayGoals = 0; }  // 10%: 0-0
        else if (rand < 91) { homeGoals = 0; awayGoals = 1; }  // 8%: 0-1
        else if (rand < 97) { homeGoals = 2; awayGoals = 2; }  // 6%: 2-2
        else { homeGoals = 1; awayGoals = 2; }                  // 3%: 1-2
    }
    else if (diff > -5 && diff <= -3) {
        const rand = Math.random() * 100;
        if (rand < 10) { homeGoals = 0; awayGoals = 1; }
        else if (rand < 24) { homeGoals = 0; awayGoals = 2; }
        else if (rand < 44) { homeGoals = 1; awayGoals = 2; }
        else if (rand < 60) { homeGoals = 1; awayGoals = 1; }
        else if (rand < 73) { homeGoals = 1; awayGoals = 3; }
        else if (rand < 83) { homeGoals = 0; awayGoals = 0; }
        else if (rand < 91) { homeGoals = 1; awayGoals = 0; }
        else if (rand < 97) { homeGoals = 2; awayGoals = 2; }
        else { homeGoals = 2; awayGoals = 1; }
    }
    
    // ========================================
    // DIFERENÇA PEQUENA (1 a 2 pontos)
    // ========================================
    else if (diff >= 1 && diff < 3) {
        // Time casa levemente favorito
        const rand = Math.random() * 100;
        if (rand < 14) { homeGoals = 1; awayGoals = 0; }       // 14%: 1-0
        else if (rand < 26) { homeGoals = 0; awayGoals = 0; }  // 12%: 0-0
        else if (rand < 42) { homeGoals = 1; awayGoals = 1; }  // 16%: 1-1
        else if (rand < 58) { homeGoals = 2; awayGoals = 1; }  // 16%: 2-1
        else if (rand < 72) { homeGoals = 2; awayGoals = 0; }  // 14%: 2-0
        else if (rand < 84) { homeGoals = 0; awayGoals = 1; }  // 12%: 0-1
        else if (rand < 93) { homeGoals = 2; awayGoals = 2; }  // 9%: 2-2
        else if (rand < 98) { homeGoals = 1; awayGoals = 2; }  // 5%: 1-2
        else { homeGoals = 3; awayGoals = 1; }                  // 2%: 3-1
    }
    else if (diff > -3 && diff <= -1) {
        const rand = Math.random() * 100;
        if (rand < 14) { homeGoals = 0; awayGoals = 1; }
        else if (rand < 26) { homeGoals = 0; awayGoals = 0; }
        else if (rand < 42) { homeGoals = 1; awayGoals = 1; }
        else if (rand < 58) { homeGoals = 1; awayGoals = 2; }
        else if (rand < 72) { homeGoals = 0; awayGoals = 2; }
        else if (rand < 84) { homeGoals = 1; awayGoals = 0; }
        else if (rand < 93) { homeGoals = 2; awayGoals = 2; }
        else if (rand < 98) { homeGoals = 2; awayGoals = 1; }
        else { homeGoals = 1; awayGoals = 3; }
    }
    
    // ========================================
    // TOTALMENTE EQUILIBRADO (-0.9 a 0.9)
    // ========================================
    else {
        // Jogo 50/50 perfeito
        const rand = Math.random() * 100;
        if (rand < 16) { homeGoals = 1; awayGoals = 0; }       // 16%: 1-0
        else if (rand < 32) { homeGoals = 0; awayGoals = 1; }  // 16%: 0-1
        else if (rand < 48) { homeGoals = 1; awayGoals = 1; }  // 16%: 1-1
        else if (rand < 62) { homeGoals = 0; awayGoals = 0; }  // 14%: 0-0
        else if (rand < 75) { homeGoals = 2; awayGoals = 1; }  // 13%: 2-1
        else if (rand < 88) { homeGoals = 1; awayGoals = 2; }  // 13%: 1-2
        else if (rand < 94) { homeGoals = 2; awayGoals = 0; }  // 6%: 2-0
        else if (rand < 99) { homeGoals = 0; awayGoals = 2; }  // 5%: 0-2
        else { homeGoals = 2; awayGoals = 2; }                  // 1%: 2-2
    }
    
    console.log(`Resultado: ${homeGoals} x ${awayGoals}`);
    console.log('---');
    
    return { homeGoals, awayGoals };
}

// ========================================
// FUNÇÃO DE PÊNALTIS
// ========================================
function simulatePenalties() {
    // Placares possíveis de pênaltis (mais realistas)
    const possibleScores = [
        [3, 0], [0, 3],  // Domínio total
        [3, 1], [1, 3],  // Domínio
        [3, 2], [2, 3],  // Apertado
        [2, 1], [1, 2],  // Muito apertado
        [2, 0], [0, 2],  // Bom controle
        [4, 1], [1, 4],  // Longo domínio
        [4, 2], [2, 4],  // Longo apertado
        [4, 3], [3, 4],  // Muito longo apertado
        [5, 2], [2, 5],  // Muito longo domínio
        [5, 3], [3, 5],  // Muito longo
        [5, 4], [4, 5],  // Extremamente longo
        [6, 5], [5, 6]   // Disputa épica
    ];
    
    const randomIndex = Math.floor(Math.random() * possibleScores.length);
    const [homeScore, awayScore] = possibleScores[randomIndex];
    
    console.log(`PÊNALTIS: ${homeScore} x ${awayScore}`);
    
    return { homePenalties: homeScore, awayPenalties: awayScore };
}

function simulateMatches() {
    const h = homeTeamSelect.value;
    const a = awayTeamSelect.value;
    const team1 = allFootballTeams.find(t => t.name === h);
    const team2 = allFootballTeams.find(t => t.name === a);
    
    const matches = [];
    let team1TotalGoals = 0;
    let team2TotalGoals = 0;
    
    for (let i = 0; i < selectedGameCount; i++) {
        const isTeam1Home = i % 2 === 0;
        const result = simulateSingleMatch(
            isTeam1Home ? team1 : team2,
            isTeam1Home ? team2 : team1,
            true
        );
        
        const matchData = {
            gameNumber: i + 1,
            homeTeam: isTeam1Home ? team1 : team2,
            awayTeam: isTeam1Home ? team2 : team1,
            homeGoals: result.homeGoals,
            awayGoals: result.awayGoals,
            location: isTeam1Home ? team1.name : team2.name,
            penalties: null
        };
        
        // Acumular gols para placar agregado
        if (isTeam1Home) {
            team1TotalGoals += result.homeGoals;
            team2TotalGoals += result.awayGoals;
        } else {
            team2TotalGoals += result.homeGoals;
            team1TotalGoals += result.awayGoals;
        }
        
        matches.push(matchData);
    }
    
    // VERIFICAR SE PRECISA DE PÊNALTIS
    let needsPenalties = false;
    
    if (penaltiesEnabled) {
        if (selectedGameCount === 1) {
            // 1 jogo: pênaltis se empatar
            const match = matches[0];
            if (match.homeGoals === match.awayGoals) {
                needsPenalties = true;
                match.penalties = simulatePenalties();
            }
        } else if (selectedGameCount === 2) {
            // 2 jogos: pênaltis se agregado empatar
            if (team1TotalGoals === team2TotalGoals) {
                needsPenalties = true;
                // Adiciona pênaltis no segundo jogo
                matches[1].penalties = simulatePenalties();
            }
        }
    }
    
    displayResults(matches, team1, team2, team1TotalGoals, team2TotalGoals, needsPenalties);
}

function displayResults(matches, team1, team2, team1Total, team2Total, hasPenalties) {
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';
    
    // Se for 2 jogos, mostrar placar agregado primeiro
    if (matches.length === 2) {
        const aggregateDiv = document.createElement('div');
        aggregateDiv.className = 'aggregate-score';
        
        let team1Winner = team1Total > team2Total;
        let team2Winner = team2Total > team1Total;
        
        // Se teve pênaltis, verificar quem ganhou
        if (hasPenalties && matches[1].penalties) {
            const pen = matches[1].penalties;
            team1Winner = pen.homePenalties > pen.awayPenalties;
            team2Winner = pen.awayPenalties > pen.homePenalties;
        }
        
        aggregateDiv.innerHTML = `
            <div class="team-agg ${team1Winner ? 'winner' : ''}">
                <span class="team-name">${team1.name}</span>
                <span class="team-total">${team1Total}</span>
            </div>
            <span class="vs-agg">AGREGADO</span>
            <div class="team-agg ${team2Winner ? 'winner' : ''}">
                <span class="team-name">${team2.name}</span>
                <span class="team-total">${team2Total}</span>
            </div>
        `;
        
        container.appendChild(aggregateDiv);
    }
    
    // Mostrar cada partida
    matches.forEach(match => {
        const isDraw = match.homeGoals === match.awayGoals && !match.penalties;
        const homeWin = match.penalties 
            ? match.penalties.homePenalties > match.penalties.awayPenalties
            : match.homeGoals > match.awayGoals;
        
        const card = document.createElement('div');
        card.className = 'game-card';
        
        // Título do jogo com badge de pênaltis se houver
        const penaltiesBadge = match.penalties 
            ? '<span class="penalties-badge">⚽ PÊNALTIS</span>' 
            : '';
        
        card.innerHTML = `
            <div class="game-header">
                <span class="game-number">Jogo ${match.gameNumber}${penaltiesBadge}</span>
                <span class="game-location">📍 ${match.location}</span>
            </div>
            <div class="game-scoreboard">
                <div class="game-team home ${homeWin && !isDraw ? 'winner' : ''}">
                    <div class="game-team-logo">
                        <img src="${match.homeTeam.logo}" alt="${match.homeTeam.name}" onerror="this.style.display='none';this.parentElement.innerHTML='⚽';">
                    </div>
                    <div class="game-team-info">
                        <div class="game-team-name">${match.homeTeam.name}</div>
                        <div class="game-team-score">${match.homeGoals}</div>
                    </div>
                </div>
                <div class="game-vs">
                    ${isDraw ? '<span class="result-badge draw">EMPATE</span>' : 'VS'}
                </div>
                <div class="game-team away ${!homeWin && !isDraw ? 'winner' : ''}">
                    <div class="game-team-logo">
                        <img src="${match.awayTeam.logo}" alt="${match.awayTeam.name}" onerror="this.style.display='none';this.parentElement.innerHTML='⚽';">
                    </div>
                    <div class="game-team-info">
                        <div class="game-team-name">${match.awayTeam.name}</div>
                        <div class="game-team-score">${match.awayGoals}</div>
                    </div>
                </div>
            </div>
            ${match.penalties ? `
                <div style="text-align: center;">
                    <div class="penalties-score">
                        <span class="pen-label">Pênaltis:</span>
                        <span class="pen-score">${match.penalties.homePenalties}</span>
                        <span>x</span>
                        <span class="pen-score">${match.penalties.awayPenalties}</span>
                    </div>
                </div>
            ` : ''}
        `;
        
        container.appendChild(card);
    });
    
    resultContainer.classList.remove('hidden');
    setTimeout(() => resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
}

function resetSelections() {
    homeTeamSelect.value = '';
    awayTeamSelect.value = '';
    homeTeamInfo.innerHTML = '<div class="empty-state"><div class="empty-icon">🏟️</div><p>Selecione o time da casa</p></div>';
    homeTeamInfo.classList.remove('active');
    awayTeamInfo.innerHTML = '<div class="empty-state"><div class="empty-icon">✈️</div><p>Selecione o time visitante</p></div>';
    awayTeamInfo.classList.remove('active');
    resultContainer.classList.add('hidden');
    simulateBtn.disabled = true;
}

homeTeamSelect.addEventListener('change', e => showTeamInfo(e.target.value, homeTeamInfo));
awayTeamSelect.addEventListener('change', e => showTeamInfo(e.target.value, awayTeamInfo));

countButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        countButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedGameCount = parseInt(btn.dataset.count);
    });
});

leagueButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        leagueButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        switchLeague(btn.dataset.league);
    });
});

simulateBtn.addEventListener('click', simulateMatches);
simulateAgainBtn.addEventListener('click', () => {
    resetSelections();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Event listener para checkbox de pênaltis
penaltiesCheckbox.addEventListener('change', (e) => {
    penaltiesEnabled = e.target.checked;
    console.log('Pênaltis:', penaltiesEnabled ? 'ATIVADO' : 'DESATIVADO');
});

populateTeamSelects();