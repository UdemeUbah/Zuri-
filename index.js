function guessingGame(){
  let range = [1,2];
let i = 1
while(i < range.length){
let point = i;
let randomNo = Math.round(Math.random() * range.length + 1);
// console.log(randomNo)
let guess =	parseInt(prompt(`Guess a number between 1 - ${range.length}`));

	if(guess === randomNo){
		
		alert(`Horray!!!, your guess was correct. \n\You have made it to the next round. \n You now have ${point} Point${point > 1 ? 's' : ''}`)
		range.push(range.length + 1)
		
	}else{
		
		range.pop()
	
		alert('You failed, game over');
		
	}
  i++
}
}
guessingGame()
