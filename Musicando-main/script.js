window.onload = ()=>{
    const target0 = document.getElementById('target0');
    const target1 = document.getElementById('target1');
    const target2 = document.getElementById('target2');
    const target3 = document.getElementById('target3');
    const target4 = document.getElementById('target4');
    const titulo = document.getElementById('titulo');
    const dica = document.getElementById('dica');
    
    let contador = 0;
    localStorage.setItem('pontos',`${contador}`);

    titulo.innerHTML += `${contador+1}° música`;
    dica.innerHTML += `Dica:

Teu sonho impossível vai ser realidade
Sei que o mundo tá terrível
Mas não vai ser a maldade que
Vai me tirar de você, eu faço você ver
Pra tu sorrir, eu faço o mundo inteiro saber que eu vou...`;
    
    target0.addEventListener('targetFound',()=>{ 
        if(localStorage.getItem('pontos') == "0"){
            acertou();
            titulo.innerHTML = `${contador+1}° música`;
            dica.innerHTML = `Dica:
            
Se eu não guardo nem dinheiro
Que dirá guardar rancor
Você vacilou primeiro
Nosso caso acabou`;
        }else{
            errou();
        }
        
    });
    target1.addEventListener('targetFound',()=>{
        if(localStorage.getItem('pontos') == "1"){
            acertou();
            titulo.innerHTML = `${contador+1}° música`;
            dica.innerHTML = `Dica:
            
Se não tá mais a vontade sai por onde entrei
Quando começo a dançar eu te enlouqueço, eu sei
Meu exército é pesado a gente tem poder
Ameaça coisas do tipo você vai`;
            
        }else{
            errou();
        }
        
    });
    target2.addEventListener('targetFound',()=>{
        if(localStorage.getItem('pontos') == "2"){
            acertou();
            titulo.innerHTML = `${contador+1}° música`;
            dica.innerHTML = `Dica:
            
Sei que não dá pra ver
Mas cê vai ver que hoje não tem chocolate
Nem de segunda a sexta-feira
Não adianta treinar
Cê pode vir, mas vem agora
Não enrola, rebola
Na hora de ir embora, cê chora`;
            
        }else{
            errou();
        }
        
    });
    target3.addEventListener('targetFound',()=>{
        if(localStorage.getItem('pontos') == "3"){
           acertou();
            titulo.innerHTML = `${contador+1}° música`;
            dica.innerHTML = `Dica:
            
Depois que eu te conheci
Fui mais feliz
Você é exatamente o que eu sempre quis
Ela se encaixa perfeitamente em mim
O nosso quebra-cabeça teve fim`;
           
        }else{
            errou();
        }
        
    });
    target4.addEventListener('targetFound',()=>{
        if(localStorage.getItem('pontos') == "4"){
            acertou();
            alert("Tomaaa, você foi o grande vencedor!!");
            
        }else{
            errou();
        }
        
    });
    
    function acertou(){
        contador++;
        localStorage.setItem('pontos',`${contador}`);
        alert("acertou");
    }
    function errou(){
        localStorage.setItem('pontos',`${contador}`);
        alert("você errou");
    }

}