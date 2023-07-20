const target0 = document.getElementById("target0");
const target1 = document.getElementById("target1");
const target2 = document.getElementById("target2");
const target3 = document.getElementById("target3");
const target4 = document.getElementById("target4");
const target5 = document.getElementById("target5");
const target6 = document.getElementById("target6");
const target7 = document.getElementById("target7");
const target8 = document.getElementById("target8");
const target9 = document.getElementById("target9");
const target10 = document.getElementById("target10");
const target11 = document.getElementById("target11");
const componentes = document.querySelectorAll(".componente");
const conteudos = document.querySelectorAll(".conteudo");

for (let i = 0; i < componentes.length; i++) {
  componentes[i].addEventListener("click", () => {
    if (!componentes[i].children[1]) {
      const p = document.createElement("p");
      //cards robô em todas as visões
      if (i == 0 || i == 4 || i == 15 || i == 22 || i == 26 || i == 30) {
        p.innerHTML = `Este é um robô de LEGO chamado "Limpa-Neves", construído pela turma MI-73. Apesar de sua simplicidade, ele é altamente eficiente em tarefas de limpeza e diversas outras atividades.`;
        componentes[i].appendChild(p);
      } else if (i == 1 || i == 5 || i == 16 || i == 23 || i == 27 || i == 31) {
        p.innerHTML =
          "Esse robô é equipado com garras na parte frontal, que, enquanto o robô anda pela frente, ele empurra qualquer obstáculo que esteja em seu caminho. Além disso, o robô possui um sensor inteligente que, ao detectar a presença de algo ou alguém à sua frente, realiza manobras automáticas para desviar e continuar seu percurso com segurança.";
        componentes[i].appendChild(p);
      } else if (i == 2 || i == 6 || i == 17 || i == 24 || i == 28 || i == 32) {
        p.innerHTML =
          "Nosso robô é especialmente projetado para realizar tarefas de limpeza em ambientes domésticos, tornando a sua comodidade uma prioridade. Além disso, ele possui a capacidade de organizar objetos de acordo com as preferências e necessidades do usuário. Sua versatilidade oferece uma solução prática e eficiente para manter o espaço limpo e organizado.";
        componentes[i].appendChild(p);
      } else if (i == 3 || i == 7 || i == 18 || i == 25 || i == 29 || i == 33) {
        p.remove();
        const ol = document.createElement("ol");
        let vetLi = [];

        for (let i = 0; i < 28; i++) {
          vetLi[i] = document.createElement("li");
          ol.appendChild(vetLi[i]);
        }
        vetLi[0].innerHTML = "1 Brick";
        vetLi[1].innerHTML = "2 motores grandes";
        vetLi[2].innerHTML = "2 rodas";
        vetLi[3].innerHTML = "18 conectores vermelho-3";
        vetLi[4].innerHTML = "8 conectores azul-3";
        vetLi[5].innerHTML = "12 conectores de pino preto";
        vetLi[6].innerHTML = "6 conectores de pino cinza";
        vetLi[7].innerHTML = "2 barras-9";
        vetLi[8].innerHTML = "2 barras-13";
        vetLi[9].innerHTML = "7 barras-7";
        vetLi[10].innerHTML = "2 conectores pino joelho";
        vetLi[11].innerHTML = "1 roda de apoio";
        vetLi[12].innerHTML = "2 espassadores cinzas";
        vetLi[13].innerHTML = "3 eixo-3";
        vetLi[14].innerHTML = "1 eixo-7";
        vetLi[15].innerHTML = "2 eixo-vermelho-1";
        vetLi[16].innerHTML = "7 conectores eixo 90°";
        vetLi[17].innerHTML = "2 conectores eixo 130°";
        vetLi[18].innerHTML = "2 asas grandes";
        vetLi[19].innerHTML = "3 quadrados";
        vetLi[20].innerHTML = "8 conectores azul cruz/pino";
        vetLi[21].innerHTML = "2 conectores eixo 150° cinza";
        vetLi[22].innerHTML = "4 conector eixo meio";
        vetLi[23].innerHTML = "8 barra-3";
        vetLi[24].innerHTML = "4 bege-3";
        vetLi[25].innerHTML = "2 barra-L9";
        vetLi[26].innerHTML = "3 cabos";
        vetLi[27].innerHTML = "1 sensor ultrassônico";
        componentes[i].appendChild(ol);
      }

      switch (i) {
        //garra vista de cima
        case 8:
          p.innerHTML =
            "Esta é a garra do nosso robô, o principal mecanismo de limpeza em sua atuação. Com ela, o robô pode facilmente empurrar e reunir qualquer objeto que esteja em seu campo de visão, garantindo uma limpeza eficaz e completa do ambiente.";
          componentes[i].appendChild(p);
          break;

        case 9:
          p.innerHTML =
            "Durante o movimento vertical do robô, sua garra trabalha simultaneamente, empurrando tudo que encontra em seu caminho. Dessa forma, o robô consegue avançar e realizar suas tarefas de forma eficiente, garantindo que nenhum obstáculo permaneça à sua frente.";
          componentes[i].appendChild(p);
          break;

        case 10:
          p.innerHTML =
            "A garra desempenha o papel fundamental de empurrar todos os objetos que se encontram à frente do robô. É por meio dessa funcionalidade que o robô consegue abrir caminho e realizar suas tarefas com sucesso.";
          componentes[i].appendChild(p);
          break;

        case 11:
          p.remove();
          const ol = document.createElement("ol");
          let vetLi = [];

          for (let i = 0; i < 7; i++) {
            vetLi[i] = document.createElement("li");
            ol.appendChild(vetLi[i]);
          }
          vetLi[0].innerHTML = "2 asas grandes";
          vetLi[1].innerHTML = "3 barras-9";
          vetLi[1].innerHTML = "2 barras-7";
          vetLi[2].innerHTML = "4 conector eixo-90°";
          vetLi[3].innerHTML = "6 azul-3";
          vetLi[4].innerHTML = "2 conectores eixo 130";
          vetLi[5].innerHTML = "1 conector eixo 150°";
          vetLi[6].innerHTML = "4 eixos cinzas";
          componentes[i].appendChild(ol);
          break;

        //sensor
        case 12:
          p.innerHTML = "Este é um sensor ultrassônico do lego, que funciona com base na tecnologia ultrassônica para detectar a distância entre o sensor e um objeto próximo.";
          componentes[i].appendChild(p);
          break;

        case 13:
          p.innerHTML = " Ele utiliza ondas sonoras ultrassônicas para medir a distância entre o sensor e objetos próximos. Ao emitir e receber essas ondas, o sensor calcula com precisão a distância dos objetos em relação ao robô.";
          componentes[i].appendChild(p);
          break;

        case 14:
          p.innerHTML = "Esse sensor permite evitar obstáculos, medir distâncias e mapear o ambiente, tornando os projetos de robótica mais interativos e inteligentes ao interagirem com o ambiente ao seu redor.";
          componentes[i].appendChild(p);
          break;
        //roda do robô
        case 19:
          p.innerHTML = "Esta é a roda do robô, o principal meio de locomoção utilizado por ele. Essa peça essencial possibilita o deslocamento eficiente do robô, permitindo que ele se mova com agilidade e precisão em suas tarefas";
          componentes[i].appendChild(p);
          break;

        case 20:
          p.innerHTML = "Quando o motor é ativado, a roda acoplada a ele possibilita que o robô se desloque de acordo com a programação definida. O movimento do robô é impulsionado pelo funcionamento do motor, permitindo uma locomoção precisa e controlada, conforme os comandos programados previamente.";
          componentes[i].appendChild(p);
          break;

        case 21:
          p.innerHTML = "Ela é projetada para facilitar o deslocamento do robô, reduzindo o atrito e permitindo movimentos mais suaves em diferentes superfícies.";
          componentes[i].appendChild(p);
          break;
        //garra vista de frente
        case 34:
          p.innerHTML =
            "Esta é a garra do nosso robô, o principal mecanismo de limpeza em sua atuação. Com ela, o robô pode facilmente empurrar e reunir qualquer objeto que esteja em seu campo de visão, garantindo uma limpeza eficaz e completa do ambiente.";
          componentes[i].appendChild(p);
          break;

        case 35:
          p.innerHTML =
            "Durante o movimento vertical do robô, sua garra trabalha simultaneamente, empurrando tudo que encontra em seu caminho. Dessa forma, o robô consegue avançar e realizar suas tarefas de forma eficiente, garantindo que nenhum obstáculo permaneça à sua frente.";
          componentes[i].appendChild(p);
          break;

        case 36:
          p.innerHTML =
            "A garra desempenha o papel fundamental de empurrar todos os objetos que se encontram à frente do robô. É por meio dessa funcionalidade que o robô consegue abrir caminho e realizar suas tarefas com sucesso.";
          componentes[i].appendChild(p);
          break;

        case 37:
          p.remove();
          const ol2 = document.createElement("ol");
          let vetLi2 = [];

          for (let i = 0; i < 7; i++) {
            vetLi2[i] = document.createElement("li");
            ol2.appendChild(vetLi2[i]);
          }
          vetLi2[0].innerHTML = "2 asas grandes";
          vetLi2[1].innerHTML = "3 barras-9";
          vetLi2[1].innerHTML = "2 barras-7";
          vetLi2[2].innerHTML = "4 conector eixo-90°";
          vetLi2[3].innerHTML = "6 azul-3";
          vetLi2[4].innerHTML = "2 conectores eixo 130";
          vetLi2[5].innerHTML = "1 conector eixo 150°";
          vetLi2[6].innerHTML = "4 eixos cinzas";
          
          componentes[i].appendChild(ol2);
          break;

        //motor esquerda
        case 38:
          p.innerHTML = "Este é o motor grande do lego ev3. Ele é uma peça fundamental para a movimentação dos robôs, proporcionando potência e força para realizar diversas tarefas.";
          componentes[i].appendChild(p);
          break;
        case 39:
          p.innerHTML = "Ele é alimentado pelo bloco controlador e transforma a energia elétrica em energia mecânica, permitindo a movimentação dos robôs. Esse processo ocorre devido à interação entre campos magnéticos e correntes elétricas dentro do motor. Ao controlar a corrente elétrica, é possível controlar a velocidade e o sentido de rotação do motor, proporcionando mobilidade e funcionalidade avançadas nos projetos de robótica. ";
          componentes[i].appendChild(p);
          break;
        case 40:
          p.innerHTML = "Em nossa aplicação do robô Limpa-Neves, ele tem a função de movimentar as rodas principais, bem como possui um sistema de desvio de pessoas incorporado.";
          componentes[i].appendChild(p);
          break;

        //motor direita
        case 41:
          p.innerHTML = "Este é o motor grande do lego ev3. Ele é uma peça fundamental para a movimentação dos robôs, proporcionando potência e força para realizar diversas tarefas.";
          componentes[i].appendChild(p);
          break;
        case 42:
          p.innerHTML = "Ele é alimentado pelo bloco controlador e transforma a energia elétrica em energia mecânica, permitindo a movimentação dos robôs. Esse processo ocorre devido à interação entre campos magnéticos e correntes elétricas dentro do motor. Ao controlar a corrente elétrica, é possível controlar a velocidade e o sentido de rotação do motor, proporcionando mobilidade e funcionalidade avançadas nos projetos de robótica. ";
          componentes[i].appendChild(p);
          break;
        case 43:
           p.innerHTML = "Em nossa aplicação do robô Limpa-Neves, ele tem a função de movimentar as rodas principais, bem como possui um sistema de desvio de pessoas incorporado.";
          componentes[i].appendChild(p);
          break;
      }
    } else {
      componentes[i].children[1].remove();
    }
  });
}
//0 1 4 6 7 8
target0.addEventListener("targetFound", () => {
  conteudos[1].style.display = "none";
  conteudos[2].style.display = "none";
  conteudos[3].style.display = "none";
  conteudos[4].style.display = "none";
  conteudos[5].style.display = "none";
  conteudos[6].style.display = "none";
  conteudos[7].style.display = "none";
  conteudos[8].style.display = "none";
  conteudos[9].style.display = "none";
  conteudos[10].style.display = "none";
  conteudos[11].style.display = "none";
  conteudos[0].style.display = "flex";
});
target1.addEventListener("targetFound", () => {
  conteudos[0].style.display = "none";
  conteudos[2].style.display = "none";
  conteudos[3].style.display = "none";
  conteudos[4].style.display = "none";
  conteudos[5].style.display = "none";
  conteudos[6].style.display = "none";
  conteudos[7].style.display = "none";
  conteudos[8].style.display = "none";
  conteudos[9].style.display = "none";
  conteudos[10].style.display = "none";
  conteudos[11].style.display = "none";
  conteudos[1].style.display = "flex";
});
target2.addEventListener("targetFound", () => {
  conteudos[1].style.display = "none";
  conteudos[0].style.display = "none";
  conteudos[3].style.display = "none";
  conteudos[4].style.display = "none";
  conteudos[5].style.display = "none";
  conteudos[6].style.display = "none";
  conteudos[7].style.display = "none";
  conteudos[8].style.display = "none";
  conteudos[9].style.display = "none";
  conteudos[10].style.display = "none";
  conteudos[11].style.display = "none";
  conteudos[2].style.display = "flex";
});
target3.addEventListener("targetFound", () => {
  conteudos[1].style.display = "none";
  conteudos[2].style.display = "none";
  conteudos[0].style.display = "none";
  conteudos[4].style.display = "none";
  conteudos[5].style.display = "none";
  conteudos[6].style.display = "none";
  conteudos[7].style.display = "none";
  conteudos[8].style.display = "none";
  conteudos[9].style.display = "none";
  conteudos[10].style.display = "none";
  conteudos[11].style.display = "none";
  conteudos[3].style.display = "flex";
});
target4.addEventListener("targetFound", () => {
  conteudos[1].style.display = "none";
  conteudos[2].style.display = "none";
  conteudos[3].style.display = "none";
  conteudos[0].style.display = "none";
  conteudos[5].style.display = "none";
  conteudos[6].style.display = "none";
  conteudos[7].style.display = "none";
  conteudos[8].style.display = "none";
  conteudos[9].style.display = "none";
  conteudos[10].style.display = "none";
  conteudos[11].style.display = "none";
  conteudos[4].style.display = "flex";
});
target5.addEventListener("targetFound", () => {
  conteudos[1].style.display = "none";
  conteudos[2].style.display = "none";
  conteudos[3].style.display = "none";
  conteudos[4].style.display = "none";
  conteudos[0].style.display = "none";
  conteudos[6].style.display = "none";
  conteudos[7].style.display = "none";
  conteudos[8].style.display = "none";
  conteudos[9].style.display = "none";
  conteudos[10].style.display = "none";
  conteudos[11].style.display = "none";
  conteudos[5].style.display = "flex";
});
target6.addEventListener("targetFound", () => {
  conteudos[1].style.display = "none";
  conteudos[2].style.display = "none";
  conteudos[3].style.display = "none";
  conteudos[4].style.display = "none";
  conteudos[5].style.display = "none";
  conteudos[0].style.display = "none";
  conteudos[7].style.display = "none";
  conteudos[8].style.display = "none";
  conteudos[9].style.display = "none";
  conteudos[10].style.display = "none";
  conteudos[11].style.display = "none";
  conteudos[6].style.display = "flex";
});
target7.addEventListener("targetFound", () => {
  conteudos[1].style.display = "none";
  conteudos[2].style.display = "none";
  conteudos[3].style.display = "none";
  conteudos[4].style.display = "none";
  conteudos[5].style.display = "none";
  conteudos[6].style.display = "none";
  conteudos[0].style.display = "none";
  conteudos[8].style.display = "none";
  conteudos[9].style.display = "none";
  conteudos[10].style.display = "none";
  conteudos[11].style.display = "none";
  conteudos[7].style.display = "flex";
});
target8.addEventListener("targetFound", () => {
  conteudos[1].style.display = "none";
  conteudos[2].style.display = "none";
  conteudos[3].style.display = "none";
  conteudos[4].style.display = "none";
  conteudos[5].style.display = "none";
  conteudos[6].style.display = "none";
  conteudos[7].style.display = "none";
  conteudos[0].style.display = "none";
  conteudos[9].style.display = "none";
  conteudos[10].style.display = "none";
  conteudos[11].style.display = "none";
  conteudos[8].style.display = "flex";
});
target9.addEventListener("targetFound", () => {
  conteudos[1].style.display = "none";
  conteudos[2].style.display = "none";
  conteudos[3].style.display = "none";
  conteudos[4].style.display = "none";
  conteudos[5].style.display = "none";
  conteudos[6].style.display = "none";
  conteudos[7].style.display = "none";
  conteudos[8].style.display = "none";
  conteudos[0].style.display = "none";
  conteudos[10].style.display = "none";
  conteudos[11].style.display = "none";
  conteudos[9].style.display = "flex";
});
target10.addEventListener("targetFound", () => {
  conteudos[1].style.display = "none";
  conteudos[2].style.display = "none";
  conteudos[3].style.display = "none";
  conteudos[4].style.display = "none";
  conteudos[5].style.display = "none";
  conteudos[6].style.display = "none";
  conteudos[7].style.display = "none";
  conteudos[8].style.display = "none";
  conteudos[9].style.display = "none";
  conteudos[0].style.display = "none";
  conteudos[11].style.display = "none";
  conteudos[10].style.display = "flex";
});
target11.addEventListener("targetFound", () => {
  conteudos[1].style.display = "none";
  conteudos[2].style.display = "none";
  conteudos[3].style.display = "none";
  conteudos[4].style.display = "none";
  conteudos[5].style.display = "none";
  conteudos[6].style.display = "none";
  conteudos[7].style.display = "none";
  conteudos[8].style.display = "none";
  conteudos[9].style.display = "none";
  conteudos[10].style.display = "none";
  conteudos[0].style.display = "none";
  conteudos[11].style.display = "flex";
});
