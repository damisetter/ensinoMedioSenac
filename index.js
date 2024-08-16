let inventario = []
let vida = 50 
let nome = "Mohhamed Al Salami"
let fase 
let escolha2 = prompt('vamos iniciar o jogo? S/N')
if(escolha2 == "S"){
   alert('olá jogador(a), seja bem-vindo ao mundo de'+ nome+'! espero que você se diverta!\n Vamos começar!')
    historia()
} else{
    alert('obrigada por jogar conosco!')
}

function interagir() {
    npc = 'Omar'
    alert('Professor Omar- olá Mohhamed, eu sou o' + npc + ', andei reparando que você é muito bom em atletismo, você gostaria de seguir no ramo dos esportes? Acredito que você se daria bem participando do campeonato da nossa escola. Se você tentar, terá todo meu apoio.\n Mohhamed- obrigada professor Omar, eu gostaria muito de participar do campeonato da escola, seria de grande ajuda para mim se o senhor me apoiasse, e fico muito realizado que o senhor já tem  me notado, faz um tempo que tento conversar com você.\n Professor Omar- maravilha! Posso conseguir uma indicação para você participar do campeonato, mas você precisa me prometer que vai se dedicar e dar o seu melhor! Não me decepcione Mohhamed, confio em você, sei que tens potencial.\n Mohhamed- muito obrigada professor, pode ter certeza que irei dar o meu melhor, não vou te decepcionar. ')
}
function coletarItem(item){
    inventario.push(item)
}

function explorar(){

}
function enfrentarDesafio(){

}
function Zena(){
    alert('~no outro dia de manhã~\n ~enquanto Mohhamed levava Zena para sua casa, eles encontram os pais de Zena no caminho~ ')
    alert('Zena- esses são meus papais!~ diz Zena enquanto corre a encontro deles~\n mãe de Zena- ZENA!! ONDE VOCÊ ESTAVA? MORRI DE PREOCUPAÇÃO~diz enquanto chora histericamente e abraça Zena~\n pai de Zena- você é quem?~pergunta a Mohhamed~\n Mohhamed- olá senhor, sou o Mohhamed, quando estava voltando pra casa ontem escutei um barulho de gritos, e resolvi checar o que estava acontecendo, quando fui ver, sua filha estava sendo sequestrada por dois homens, que falavam algo sobre recompensa. Eu resolvi ajudá-la, e levei ela para minha casa hoje, para minha mãe cuidar dela, e pretendia trazer ela hoje\n pai de Zena- muito obrigada Mohhamed, sou muito grato a você, você salvou minha filha!!\n Mohhamed, imagina! só fiz o que deveria ser feito.')
    coletarItem('gratidao')
}
function procurar(){
    alert('Mohhamed resolve procurar de onde vem o grito. Ele começa a andar na direção do barulho, e conforme se aproxima, escuta pessoas conversando e dizendo coisas estranhas. Mohhamed chega em uma casa, que é de onde vem o barulho, e se esconde atrás da porta, e começa a espiar o que está acontecendo. Mohhamed vê dois homens conversando.\n Homem 1- vamos levar essa aqui, os pais dela vão vir procurar ela, eles devem ter dinheiro.\n homem 2- vamos pedir uma recompensa bem alta, com essa guerra as coisas estão ficando caras, e está tudo escasso.\n ~nesse momento, os homens pegam uma menina de mais ou menos 5 anos, eles agarram ela pelo braço, e começam a puxar ela, quando eles fazem isso, ela começa a gritar desesperadamente~ ')
    let pergunta4 = prompt('Mohhamed deve ajudar a menina? S/N ')
    if(pergunta4 == 'S'){
        alert('Mohhamed- EI! VOCÊS AÍ! O QUE ESTÃO FAZENDO?~ diz Mohhamed enquanto entra na casa~\n ~os homens olham assustados para Mohhamed, mas quando viram que era um homem sozinho, começaram a rir~\n Homem 1- quem você pensa que é? acha que só por gritar conosco vai nos impedir de conseguir nosso dinheiro?\n Mohhamed- larguem a criança, e deixo vocês em paz\n Homem 2- fica na tua, você nao sabe onde está se envolvendo.\n ~Mohhamed pega uma pedra que estava na casa, segurando a porta, e joga a pedra no Homem 1, que estava segurando o braço da criança~\n Homem 1- VOCÊ ESTÁ LOUCO?~diz enquanto solta a criança pela dor que sentiu no braço~\n ~o homem 2 vai pra cima de Mohhamed, no intuito de bater nele, Mohhamed se defende e então começa uma briga entre os 3. Mohhamed grita para a menina fugir e se enconder, quando ela faz isso, os homens tentam ir atrás dela, mas Mohhamed os impede, e a briga fica mais violenta~\n~Mohhamed não consegue vencer a briga, e acaba desmaiando. Após um tempo, Mohhamed acorda e vê que os homens já tinham ido embora. Preocupado com a criança, ele tenta se levantar, mas sente muita dor, quando ele toca em sua cabeça, sente sangue~')
       
            alert('~Mohhamed se levanta e acaba caindo novamente, o que faz com que ele se machuque ainda mais. \nApós mais algumas horas, já está quase de noite, Mohhamed se sente melhor e resolve se lavantar para procurar a criança.~\n ~Mohhamed se levanta e começa a procurar a menina, após alguns minutos, ele encontra um porão escondido na casa, e nesse momento ele resolve abrir o porão, ele encontra a menina lá~ ')
            alert('Mohhamed- olá querida, qual seu nome?~diz Mohhamed enquanto analisa a menina~\n Menina- oi.. eu sou a Zena\n Mohhamed- oi Zena, eu sou o Mohhamed, sabe me dizer onde estão seus pais?\n Zena- meus pais saíram para buscar água e procurar algumas coisas para comer, foi logo depois disso que os titios chegaram e começaram a dizer coisas ruins, como "vamos matar ela", e o outro dizia "não! vamos só levá-la e ganhar uma boa recompensa", eu fiquei com medo e começei a gritar\n Mohhamed- mas a porta da sua casa já estava aberta?\n Zena- sim, eu queria ir brincar lá fora\n Mohhamed- entendi, não acho seguro ficarmos aqui, vamos para minha casa, e amanhã voltamos para procurar seus pais. Você tem algum outro parente além deles?\n Zena- sim, tem a minha vovó, mas ela foi com eles\n Mohhamed- acho melhor você vir comigo, e amanhã de manhã voltamos aqui.\nZena- ok')
            vida -= 5; } else{
                alert('~Mohhamed estava prestes a voltar pra casa, pois não queria ajudar a menina e se envolver em problemas, mas ele se sente mal pela menina, e resolve voltar para ajudá-la, mas quando ele chega lá, os homens já estão fora da casa, arrastando a menina pelo chão~\n ~Mohhamed joga uma pedra neles, na esperança de largarem a menina~')
                alert('~os homens largam a menina a começam a correr atras de Mohhamed, ele gritou para a menina se esconder e correr, foi o que ela fez~\n ~após alguns minutos correndo deles, Mohhamed se encondeu e esperou eles irem embora, para procurar a menina~\n ~Mohhamed esperou algumas horas para voltar e procurar a menina, mas após esse tempo, ele encontrou a menina escondida atrás de um muro~\n Mohhamed- olá menina, qual seu nome? eu me chamo Mohhamed, sabe me dizer onde estão seus pais?\n Menina- oi, eu sou a Zana, meus papais foram buscar água e procurar comida, minha vovó foi com eles \n Mohhamed- o que acha de irmos para minha casa e amanhã voltamos para procurar seus pais? \nZana- pode ser...')
            }
        
    }

function historia(){
    alert('vamos começar com a história!\n' + nome + 'nasceu em Damasco, quando mais jovem, ele estudava na escola de Aleppo. Certo dia, um professor de esportes notou seu talento, e sugeriu que ele participasse do campeonato das escolas de Aleppo, foi após isso que nasceu sua paixão por esportes.' + nome +  'precisou sair de Damasco com sua família, por conta da guerra que ficou violenta, porém ele precisou voltar.' + nome + 'continou treinando em Damasco, apesar da guerra, ele se formou em esportes e continou a praticar. Após um tempo, eles precisaram fugir novamente, dessa vez para berlim, agora em berlim, ele treina para seu sonho, as olimpíedas em paris. Será que você vai conseguir ajudá-lo a chegar lá?\n Vamos começar nosso jogo!')

while (vida > 40) {
    

    let fase1 = false
    while (fase1 == false) {
        alert('Mohhamed acorda com um barulho de tiros, mas para ele é apenas um dia normal em Damasco. Ele se levanta e se arruma para ir pra sua escola em Aleppo.\n ~Chegando na escola de Aleppo~\n ~Mohhamed percebe que o professor Omar está sozinho anotando algumas coisas em sua prancheta, seria o momento ideal para conversar com ele, já faz um tempo que Mohhamed tenta chamar sua atenção~.' )
      let pergunta = prompt('Mohhamed deve interagir com o professor Omar? S/N')
      if(pergunta == 'S'){
     interagir()
     vida += 1; 

     fase1 = true 

      } else{
       alert('Mohhamed decide ignorar o professor Omar, isso impede ele de participar do campeonato da escola de Aleppo, pois nao teve a indicação do professor Omar.\n reinicie a fase')
       vida -= 2; 

      } 
    }
   fase2 = false
    while (fase2 == false) {
        alert('\nMohhamed consegue a indicação do professor Omar para participar do campeonato da escola de Aleppo\n ')
        alert('Mohhamed está indo pra casa após conversar com o professor Omar e conseguir sua indicação para particiar do campeonato. Nesse momento, Mohhamed escuta um barulho, parecia um grito de uma criança, ele se sente horrorizado e tenta procurar de onde vem o grito.')
        let pergunta3 = prompt('\n ele deve procurar de onde vem o grito? S/N') 
        if(pergunta3 == 'S'){
            procurar()
            Zena()
            alert('~após levar Zena a seus pais, Mohhamed vai para a escola de Aleppo, ele fica lá até tarde, e quando chega em casa, vai imediatamente treinar para o campeonato~')


        }else {
            alert('Mohhamed volta pra casa normalmente, fingindo que nada aconteceu, então ele se prepara para dormir e ir para a escola de esportes(escola de Aleppo, onde ele está estudando para se formar em professor de esportes).')
            alert('~no outro dia~')
            alert('~Mohhamed acorda e vai para a escola de Aleppo, ele fica na escola ate anoitecer, e quando chega em casa, imediatamente vai treinar para poder competir~')
        }
         fase2 = true
    }   fase3 = false
    while(fase3 == false){
    alert('~~alguns meses depois...~~')
    alert('~~Mohhamed participou do campeonato de Aleppo, e ganhou em primeiro lugar em salto triplo e em segundo lugar no salto em comprimento~~')
    alert('~~Após esse período, Mohhamed precisou sair de Damasco por conta da guerra, mas foi necessário voltar, pois ele não conseguiu praticar seu esporte, então mesmo com a guerra, ele se formou em esportes em Damasco...~~')
    alert('~Mohhamed está em Damasco, e agora quer sair de Damasco e ir para Berlim, pois ele quer se inscrever para as olimpíedas~')
    let pergunta6 = prompt('Mohhamed está pennsano em se inscrever para as olimpíedas, ele deve fazer isso? S/N')
    if(pergunta6 == 'S'){
        alert('~Mohhamed se inscreveu para as olimpíedas~')
        vida += 10
    } else{
        vida -= 60 
    }
    alert('~após se inscrever para as olimpíedas, Mohhamed precisa ir para Berlim, para se tornar membro da (COB)~')
    fase3 = true 
    }
   fase4 = false
   while(fase4 = false){
    alert('~chegou o dia de Mohhamed ir para Berlim, ele se despede da sua família e vai para seu barco~')
   }
}}
console.log("Sua vida é menor que 40! Você perdeu.")




//if (inventario.includes('gratidao')) {
//fase3 = true }
