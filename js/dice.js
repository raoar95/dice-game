function diceGame() {
	let dice1Roll = Math.floor(Math.random() * 6) + 1;
	let dice1Img = "dice" + dice1Roll + ".png";
	let dice1ImgSrc = "images/" + dice1Img;
	let dice2Roll = Math.floor(Math.random() * 6) + 1;
	let dice2Img = "dice" + dice2Roll + ".png";
	let dice2ImgSrc = "images/" + dice2Img;


	document.querySelector("img").setAttribute("src", dice1ImgSrc);               // Set Dice 1 Radom Generated Image
	document.querySelector("img.img2").setAttribute("src", dice2ImgSrc);          // Set Dice 2 Radom Generated Image


	if (dice1Roll > dice2Roll) {

		document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

	} else if (dice1Roll < dice2Roll) {

		document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

	} else {

		document.querySelector("h1").innerHTML = "Draw!";

	}

}
    
    