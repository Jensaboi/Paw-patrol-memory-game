/*

1. starta spela och timer.

2. Är alla rutor vända?
	IFALL true:
		- Stoppa timer.
		- Lägg till score i en array.	
	IFALL false:
		-gå till nästa steg.

3. Be användare klicka på två rutor.

4. 	IFALL klickad ruta 1 är == klickad ruta 2:
		
		- låt rutorna fortfarande vara vända.
		- Lägg till poäng på score. score += 10;
		- Gå tillbaka till steg 2.
	
	ANNARS :
    - Lägg till 1 på hur många "fel" du haft fel += 1	
		- vänd tillbaka rutorna.
		- Gå tillbaka till steg 2.

*/
const imgArr = ['./assets/everest.png', 
'./assets/everest.png', 
'./assets/marshall.png',
'./assets/marshall.png',
'./assets/rocky.jpg',
'./assets/rocky.jpg',
'./assets/rumble.png',
'./assets/rumble.png',
'./assets/skye.png',
'./assets/skye.png',
'./assets/zuma.jpg',
'./assets/zuma.jpg',
'./assets/chase.png',
'./assets/chase.png',
'./assets/ryder.png',
'./assets/ryder.png']



let shuffleImgArr = imgArr.sort(() => (Math.random() > .5) ? 2 : -1);
let cardsTurned = []


for(let i = 0; i < imgArr.length; i++){
	
	const card = document.createElement('div');
	
  card.className = 'card';
	card.innerHTML = `<img src="${imgArr[i]}" alt="" />`
	
		card.addEventListener("click", function(){
			
			cardsTurned.push(card.innerHTML)
			cardsTurned.push(card)
			card.className = "card-open"
			
			if(cardsTurned.length < 4){
				console.log(cardsTurned)
			}else if(cardsTurned.length === 4){
				console.log(cardsTurned)
				if(cardsTurned[0] == cardsTurned[2]){
					console.log("pair")
					cardsTurned = []
				}else{
					
					console.log("no pair")
					setTimeout(() =>{
						cardsTurned[1].className = "card"
						cardsTurned[3].className = "card"
						cardsTurned = []
						console.log(cardsTurned)
					}, 1500)
				}
			}
		})
	
  document.querySelector('.board').appendChild(card);
}

const turnCards = () =>{
	cardsTurned[1].className = "card"
	cardsTurned[3].className = "card"
	cardsTurned = []
	console.log(cardsTurned)
}
