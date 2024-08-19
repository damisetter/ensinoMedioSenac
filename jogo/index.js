let inventario = []
let vida = 50
let nome = "Mohhamed Al Salami"

let jogoAtivo = true

function jogoRodando() {
    while (jogoAtivo) {
        historia()
    }
}

function verVida() {
    if (vida <= 40) {
        console.log("Sua vida é menor que 40! Você perdeu");
        jogoAtivo = false
    }
}

function vida100() {
    if (vida >= 100) {
        alert('Você chegou nas olimpíadas! Parabéns')
        verVida()
    }
}

function interagir() {
    let npc = 'Omar'
    alert('Professor Omar - olá Mohhamed, eu sou o ' + npc + ', andei reparando que você é muito bom em atletismo. Você gostaria de seguir no ramo dos esportes? Acredito que você se daria bem participando do campeonato da nossa escola. Se você tentar, terá todo meu apoio.\nMohhamed - obrigada professor Omar, eu gostaria muito de participar do campeonato da escola. Seria de grande ajuda para mim se o senhor me apoiasse e fico muito realizado que o senhor já me notou. Faz um tempo que tento conversar com você.\nProfessor Omar - maravilha! Posso conseguir uma indicação para você participar do campeonato, mas você precisa me prometer que vai se dedicar e dar o seu melhor! Não me decepcione Mohhamed, confio em você, sei que tens potencial.\nMohhamed - muito obrigada professor, pode ter certeza que irei dar o meu melhor, não vou te decepcionar.')
}

function coletarItem(item) {
    inventario.push(item)
}

function explorar() {
    alert('~Enquanto ninguém está vendo, Mohhamed entra no porão~')
    alert('~O barco parecia tão pequeno, mas tinha uma escada que descia para um tipo de despensa. Lá embaixo, Mohhamed encontrou um monte de comida, e um homem que estava pegando essa comida. Esse homem não parecia do navio, ele parecia estar roubando a comida. Mohhamed sente que precisa fazer alguma coisa~')
    enfrentarDesafio()
}

function enfrentarDesafio() {
    alert('~Mohhamed corre para cima e chama um dos donos do barco, os quais estão ajudando os refugiados~')
    alert('Mohhamed - senhor, tem um homem lá embaixo no porão roubando alimentos!!\nDono do barco - no porão?? Você não deveria ter entrado lá, por favor, fique aqui e não conte para ninguém o que foi visto, mas obrigado por avisar.')
}

function Zena() {
    alert('~No outro dia de manhã~\n~Enquanto Mohhamed levava Zena para sua casa, eles encontram os pais de Zena no caminho~')
    alert('Zena - esses são meus papais!~ diz Zena enquanto corre a encontro deles~\nMãe de Zena - ZENA!! ONDE VOCÊ ESTAVA? MORRI DE PREOCUPAÇÃO~ diz enquanto chora histericamente e abraça Zena~\nPai de Zena - você é quem?~ pergunta a Mohhamed~\nMohhamed - olá senhor, sou o Mohhamed. Quando estava voltando pra casa ontem escutei um barulho de gritos e resolvi checar o que estava acontecendo. Quando fui ver, sua filha estava sendo sequestrada por dois homens, que falavam algo sobre recompensa. Eu resolvi ajudá-la e levei ela para minha casa hoje, para minha mãe cuidar dela, e pretendia trazer ela hoje.\nPai de Zena - muito obrigada Mohhamed, sou muito grato a você, você salvou minha filha!!\nMohhamed - imagina! Só fiz o que deveria ser feito.')
    coletarItem('empatia')
}

function procurar() {
    alert('Mohhamed resolve procurar de onde vem o grito. Ele começa a andar na direção do barulho e, conforme se aproxima, escuta pessoas conversando e dizendo coisas estranhas. Mohhamed chega em uma casa, que é de onde vem o barulho, e se esconde atrás da porta, e começa a espiar o que está acontecendo. Mohhamed vê dois homens conversando.\nHomem 1 - vamos levar essa aqui, os pais dela vão vir procurar ela, eles devem ter dinheiro.\nHomem 2 - vamos pedir uma recompensa bem alta, com essa guerra as coisas estão ficando caras, e está tudo escasso.\n~Nesse momento, os homens pegam uma menina de mais ou menos 5 anos, eles agarram ela pelo braço e começam a puxá-la. Quando eles fazem isso, ela começa a gritar desesperadamente~')
    let pergunta4 = prompt('Mohhamed deve ajudar a menina? S/N ')
    if (pergunta4 == 'S') {
        alert('Mohhamed - EI! VOCÊS AÍ! O QUE ESTÃO FAZENDO?~ diz Mohhamed enquanto entra na casa~\n~Os homens olham assustados para Mohhamed, mas quando viram que era um homem sozinho, começaram a rir~\nHomem 1 - quem você pensa que é? Acha que só por gritar conosco vai nos impedir de conseguir nosso dinheiro?\nMohhamed - larguem a criança e deixo vocês em paz\nHomem 2 - fica na sua, você não sabe onde está se envolvendo.\n~Mohhamed pega uma pedra que estava na casa, segurando a porta, e joga a pedra no Homem 1, que estava segurando o braço da criança~\nHomem 1 - VOCÊ ESTÁ LOUCO?~ diz enquanto solta a criança pela dor que sentiu no braço~\n~O Homem 2 vai pra cima de Mohhamed, no intuito de bater nele, Mohhamed se defende e então começa uma briga entre os 3. Mohhamed grita para a menina fugir e se esconder. Quando ela faz isso, os homens tentam ir atrás dela, mas Mohhamed os impede, e a briga fica mais violenta~\n~Mohhamed não consegue vencer a briga e acaba desmaiando. Após um tempo, Mohhamed acorda e vê que os homens já tinham ido embora. Preocupado com a criança, ele tenta se levantar, mas sente muita dor. Quando ele toca em sua cabeça, sente sangue~')
        alert('~Mohhamed se levanta e acaba caindo novamente, o que faz com que ele se machuque ainda mais. \nApós mais algumas horas, já está quase de noite, Mohhamed se sente melhor e resolve se levantar para procurar a criança.~\n~Mohhamed se levanta e começa a procurar a menina. Após alguns minutos, ele encontra um porão escondido na casa e decide abri-lo, encontrando a menina lá~')
        alert('Mohhamed - olá querida, qual seu nome?~ diz Mohhamed enquanto analisa a menina~\nMenina - oi.. eu sou a Zena\nMohhamed - oi Zena, eu sou o Mohhamed, sabe me dizer onde estão seus pais?\nZena - meus pais saíram para buscar água e procurar algumas coisas para comer. Foi logo depois disso que os titios chegaram e começaram a dizer coisas ruins, como "vamos matar ela", e o outro dizia "não! Vamos só levá-la e ganhar uma boa recompensa". Eu fiquei com medo e comecei a gritar\nMohhamed - mas a porta da sua casa já estava aberta?\nZena - sim, eu queria ir brincar lá fora\nMohhamed - entendi, não acho seguro ficarmos aqui. Vamos para minha casa e amanhã voltamos para procurar seus pais. Você tem algum outro parente além deles?\nZena - sim, tem a minha vovó, mas ela foi com eles\nMohhamed - acho melhor você vir comigo e amanhã de manhã voltamos aqui.\nZena - ok')
        vida -= 5;
    } else {
        alert('~Mohhamed estava prestes a voltar pra casa, pois não queria ajudar a menina e se envolver em problemas, mas ele se sente mal pela menina e resolve voltar para ajudá-la. Quando ele chega lá, os homens já estão fora da casa, arrastando a menina pelo chão~\n~Mohhamed joga uma pedra neles, na esperança de largarem a menina~')
        alert('~Os homens largam a menina e começam a correr atrás de Mohhamed. Ele grita para a menina se esconder e correr, o que ela faz~\n~Após alguns minutos correndo deles, Mohhamed se esconde e espera eles irem embora para procurar a menina~\n~Mohhamed esperou algumas horas para voltar e procurar a menina, e encontra a menina escondida atrás de um muro~\nMohhamed - olá menina, qual seu nome? Eu me chamo Mohhamed, sabe me dizer onde estão seus pais?\nMenina - oi, eu sou a Zena. Meus papais foram buscar água e procurar comida, minha vovó foi com eles.\nMohhamed - o que acha de irmos para minha casa e amanhã voltamos para procurar seus pais?\nZena - pode ser...')
    }
    verVida()
}

function historia() {
    alert('Vamos começar com a história!\n' + nome + ' nasceu em Damasco. Quando mais jovem, ele estudava na escola de Aleppo. Certo dia, um professor de esportes notou seu talento e sugeriu que ele participasse do campeonato das escolas de Aleppo. Foi após isso que nasceu sua paixão por esportes. ' + nome + ' precisou sair de Damasco com sua família por conta da guerra que ficou violenta, porém ele precisou voltar. ' + nome + ' continuou treinando em Damasco, apesar da guerra, e se formou em esportes. Após um tempo, eles precisaram fugir novamente, dessa vez para Berlim. Agora em Berlim, ele treina para seu sonho, as Olimpíadas em Paris. Será que você vai conseguir ajudá-lo a chegar lá?\n Vamos começar nosso jogo!')

    while (vida >= 40 && jogoAtivo) {
        let fase1 = false
        while (!fase1) {
            alert('Mohhamed acorda com um barulho de tiros, mas para ele é apenas um dia normal em Damasco. Ele se levanta e se arruma para ir para sua escola em Aleppo.\n~Chegando na escola de Aleppo~\n~Mohhamed percebe que o professor Omar está sozinho anotando algumas coisas em sua prancheta. Seria o momento ideal para conversar com ele, já faz um tempo que Mohhamed tenta chamar sua atenção~.')
            let pergunta = prompt('Mohhamed deve interagir com o professor Omar? S/N')
            if (pergunta == 'S') {
                interagir()
                vida += 1;
                verVida()
                fase1 = true
            } else {
                alert('Mohhamed decide ignorar o professor Omar, isso impede ele de participar do campeonato da escola de Aleppo, pois não teve a indicação do professor Omar.\nReinicie a fase')
                vida -= 2;
                verVida()
            }
        }
        let fase2 = false
        while (!fase2) {
            alert('Mohhamed consegue a indicação do professor Omar para participar do campeonato da escola de Aleppo')
            alert('Mohhamed está indo para casa após conversar com o professor Omar e conseguir sua indicação para participar do campeonato. Nesse momento, Mohhamed escuta um barulho, parecia um grito de uma criança. Ele se sente horrorizado e tenta procurar de onde vem o grito.')
            let pergunta3 = prompt('Ele deve procurar de onde vem o grito? S/N')
            if (pergunta3 == 'S') {
                procurar()
                Zena()
                alert('~Após levar Zena aos pais, Mohhamed vai para a escola de Aleppo. Ele fica lá até tarde, e quando chega em casa, vai imediatamente treinar para o campeonato~')
                verVida()
            } else {
                alert('Mohhamed volta para casa normalmente, fingindo que nada aconteceu. Então ele se prepara para dormir e ir para a escola de esportes (escola de Aleppo, onde ele está estudando para se formar em professor de esportes).')
                alert('~No outro dia~')
                alert('~Mohhamed acorda e vai para a escola de Aleppo, ele fica na escola até anoitecer, e quando chega em casa, imediatamente vai treinar para poder competir~')
                verVida()
            }
            fase2 = true
        }
        let fase3 = false
        while (!fase3) {
            alert('~~Alguns meses depois...~~')
            alert('~~Mohhamed participou do campeonato de Aleppo e ganhou em primeiro lugar em salto triplo e em segundo lugar no salto em comprimento~~')
            alert('~~Após esse período, Mohhamed precisou sair de Damasco por conta da guerra, mas foi necessário voltar, pois ele não conseguiu praticar seu esporte. Então, mesmo com a guerra, ele se formou em esportes em Damasco...~~')
            alert('~Mohhamed está em Damasco e agora quer sair de Damasco e ir para Berlim, pois ele quer se inscrever para as Olimpíadas~')
            let pergunta6 = prompt('Mohhamed está pensando em se inscrever para as Olimpíadas, pois ele tem todas as características necessárias para isso. Ele deve solicitar a inscrição? S/N')
            if (pergunta6 == 'S') {
                alert('~Mohhamed se inscreveu para as Olimpíadas~')
                vida += 10
                verVida()
                alert('~Após se inscrever para as Olimpíadas, Mohhamed precisa ir para Berlim, para sair da Síria por conta da guerra, e praticar para as Olimpíadas~')
            } else {
                vida -= 100
                verVida()
            }
            fase3 = true
        }
        let fase4 = false
        while (!fase4) {
            alert('~Chegou o dia de Mohhamed ir para Berlim, ele se despede da sua família e vai para seu barco~')
            let pergunta7 = prompt('Mohhamed está em um barco de refugiados, é um barco muito pequeno, onde cabem apenas 20 pessoas e uma mochila por pessoa. Mas ele percebe que tem uma espécie de porão no barco. Ele deve explorar o porão? S/N')
            verVida()
            if (pergunta7 == 'S') {
                explorar()
                alert('~Após sua aventura no porão, Mohhamed resolve ficar junto com os outros refugiados e espera chegar até Berlim~')
                verVida()
            } else {
                alert('~Mohhamed resolve não explorar o porão~')
                alert('~Cansado de já viver tantas aventuras, Mohhamed apenas fica junto com os outros refugiados e espera chegar até Berlim~')
            }
            fase4 = true
        }
        let fase5 = false
        while (!fase5) {
            alert('~Chegando em Berlim~')
            alert('~Mohhamed finalmente chegou em Berlim, ansioso para participar das Olimpíadas. Ele resolve passear pela cidade~')
            alert('~Dia de participar das Olimpíadas~')
            alert('~Mohhamed encontra seu antigo professor Omar e resolve ir conversar com ele~')
            alert('Professor Omar - olá Mohhamed, sabia que você não iria me decepcionar. Estou muito feliz com você aqui!\nMohhamed - oi professor Omar, estou muito feliz de estar aqui. Queria que minha família também estivesse aqui para me ver e se orgulhar junto comigo.\nProfessor Omar - imagino como você se sente Mohhamed, mas eles estão orgulhosos de você mesmo longe. Em breve sei que estarão com você.\nMohhamed - obrigada professor Omar, também acredito nisso.\nProfessor Omar - ficou sabendo Mohhamed? Que você só poderá participar das Olimpíadas se tiver feito alguma ação boa durante sua vida? Você precisa ter o item "empatia" guardado com você.\nMohhamed - não sabia professor, preciso verificar! Obrigado por avisar.')
            if (inventario.includes('empatia')) {
                vida += 100
                verVida()
            } else {
                vida -= 100
                verVida()
            }
            fase5 = true
        }
        if (fase5) {
            jogoAtivo = false
        }
        vida100()
    }
    if (vida <= 40) {
        console.log("O jogo terminou. Você perdeu.");
    } else {
        console.log("O jogo terminou. Você venceu!");
    }
}

let escolha2 = prompt('Vamos iniciar o jogo? S/N')
if (escolha2 == "S") {
    alert('Olá jogador(a), seja bem-vindo ao mundo de ' + nome + '! Espero que você se divirta!\n Vamos começar!')
    jogoRodando()
} else {
    alert('Obrigada por jogar conosco!')
    jogoAtivo = false
}