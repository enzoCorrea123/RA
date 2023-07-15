const target0 = document.getElementById('target0');
const conteudo = document.getElementById('conteudo');
const componente1 = document.getElementById('componente1');
const componente2 = document.getElementById('componente2');
const componente3 = document.getElementById('componente3');
const componente4 = document.getElementById('componente4');
target0.addEventListener('targetFound',()=>{
  conteudo.style.display = "flex";
})

componente1.addEventListener('click',()=>{
  const p = document.createElement("p");
  p.innerHTML = "Esse é um robô limpa neves de lego montado pela turma MI-73";
  componente1.appendChild(p);
})
componente2.addEventListener('click',()=>{
  const p = document.createElement("p");
  p.innerHTML = "O robô possui garras em sua frente que quando ele começa a andar, ele empurra tudo que há pela frente Ele também possui um sensor que ao identificar algo ou alguém ele automaticamente desvia e volta a andar";
  componente2.appendChild(p);
})
componente3.addEventListener('click',()=>{
  const p = document.createElement("p");
  p.innerHTML = "O robô serve para limpar neves seu bocó";
  componente3.appendChild(p);
})
componente4.addEventListener('click',()=>{
  const ol = document.createElement("ol");
  let vetLi = [];
  
  for(let i=0;i<5;i++){
    vetLi[i] = document.createElement("li");
    vetLi[i].innerHTML = "ihsoahigowihd";
    ol.appendChild(vetLi[i]);
  }
  componente4.appendChild(ol);
})