function diceGame() {
    let dice1Roll = Math.floor(Math.random() * 6) + 1;
    let dice1Img = "dice" + dice1Roll + ".png";
    let dice1ImgSrc = "images/" + dice1Img;
    let dice2Roll = Math.floor(Math.random() * 6) + 1;
    let dice2Img = "dice" + dice2Roll + ".png";
    let dice2ImgSrc = "images/" + dice2Img;
    
    
    document.querySelector("img").setAttribute("src",dice1ImgSrc);
    document.querySelector("img.img2").setAttribute("src",dice2ImgSrc);


        // if (dice1Roll === 1) {
                
        //         document.querySelector("img").setAttribute("src","images/dice1.png");
                
        //     } 
    
        // if (dice2Roll === 1) {
                
        //         document.querySelector("img.img2").setAttribute("src","images/dice1.png");
                
        //     } 
        
        //     else if (dice1Roll === 2) {
                
        //         document.querySelector("img").setAttribute("src","images/dice2.png");
                
        //     }
        
        //     else if (dice2Roll === 2) {
                
        //         document.querySelector("img.img2").setAttribute("src","images/dice2.png");
                
        //     }
        
        //     else if (dice1Roll === 3) {
                
        //         document.querySelector("img").setAttribute("src","images/dice3.png");
                
        //     }
        
        //     else if (dice2Roll === 3) {
                
        //         document.querySelector("img.img2").setAttribute("src","images/dice3.png");
                
        //     }
        
        //     else if (dice1Roll === 4) {
                
        //         document.querySelector("img").setAttribute("src","images/dice4.png");
                
        //     }
        
        //     else if (dice2Roll === 4) {
                
        //         document.querySelector("img.img2").setAttribute("src","images/dice4.png");
                
        //     }
        
        //     else if (dice1Roll === 5) {
                
        //         document.querySelector("img").setAttribute("src","images/dice5.png");
                
        //     }
        
        //     else if (dice2Roll === 5) {
                
        //         document.querySelector("img.img2").setAttribute("src","images/dice5.png");
                
        //     }
        
        //     else if (dice1Roll === 6) {
                
        //         document.querySelector("img").setAttribute("src","images/dice6.png");
                
        //     }
        
        //     else if (dice2Roll === 6) {
                
        //         document.querySelector("img.img2").setAttribute("src","images/dice6.png");
                
        //     } 
            
        //     else {
                
        //         document.querySelector("img").setAttribute("src","images/dice6.png");
        //         document.querySelector("img.img2").setAttribute("src","images/dice6.png");
                
        //     } 
            
            if (dice1Roll > dice2Roll) {

                document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

            }
              
            else if (dice1Roll< dice2Roll) {

                document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

            }
              else {

                document.querySelector("h1").innerHTML = "Draw!";

            }
        
    }
    
    