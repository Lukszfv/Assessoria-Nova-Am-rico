function toggleFAQ(element){
    const resposta = element.querySelector(".faq-resposta");
    const isOpen = resposta.style.display === "block";
    document.querySelectorAll(".faq-resposta").forEach(r => r.style.display = "none");
    document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("ativo"));
    if(!isOpen){
        resposta.style.display = "block";
        element.classList.add("ativo");
    }
}

const depoimentos = [
    { nome:"Maria S.", avaliacoes:"5 avaliações", tempo:"2 dias atrás", estrelas:"★★★★★", texto:"Voltei a dirigir depois de anos com medo. Excelente instrutor! Método muito prático e paciente, recomendo demais.", inicial:"M" },
    { nome:"Carlos R.", avaliacoes:"3 avaliações", tempo:"1 semana atrás", estrelas:"★★★★★", texto:"Muito paciente e profissional. As aulas foram ótimas, aprendi a dirigir com total segurança. Recomendo demais!", inicial:"C" },
    { nome:"Ana Lima", avaliacoes:"2 avaliações", tempo:"20 horas atrás", estrelas:"★★★★★", texto:"Fiz minha primeira habilitação com o apoio da assessoria. Todo o processo foi explicado com clareza. Aprovei na primeira tentativa!", inicial:"A" },
    { nome:"Roberto M.", avaliacoes:"4 avaliações", tempo:"3 dias atrás", estrelas:"★★★★★", texto:"Assessoria incrível! Me ajudaram a resolver a suspensão da minha CNH rapidamente. Equipe super atenciosa e eficiente.", inicial:"R" },
    { nome:"Fernanda K.", avaliacoes:"1 avaliação", tempo:"5 dias atrás", estrelas:"★★★★★", texto:"Recomendo a todos! Fiz o curso de reciclagem e foi muito bem organizado. Instrutores excelentes e atendimento nota 10.", inicial:"F" }
];

let depAtual = 0;

function renderDep(){
    const d = depoimentos[depAtual];
    document.getElementById("depNome").textContent = d.nome;
    document.getElementById("depAvaliacoes").textContent = d.avaliacoes;
    document.getElementById("depTempo").textContent = d.tempo;
    document.getElementById("depEstrelas").textContent = d.estrelas;
    document.getElementById("depTexto").textContent = '"' + d.texto + '"';
    document.getElementById("depAvatar").textContent = d.inicial;

    const dots = document.getElementById("depDots");
    dots.innerHTML = "";
    depoimentos.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dep-dot");
        if(i === depAtual) dot.classList.add("ativo");
        dot.onclick = () => { depAtual = i; renderDep(); };
        dots.appendChild(dot);
    });
}

function moverDep(dir){
    depAtual = (depAtual + dir + depoimentos.length) % depoimentos.length;
    renderDep();
}

renderDep();
setInterval(() => moverDep(1), 6000);