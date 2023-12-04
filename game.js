const Game = (function(){
    var gameboard = document.querySelectorAll("td")

    const checkTurn = (elmnt, logo)=>{
        if (elmnt.innerHTML === ""){
            elmnt.innerHTML = logo
            checkForgameWin(logo)
        }else{
            console.log("not valid")
            return "Turn is not valid"
        }
    }

    gameboard.forEach(element => {
        element.addEventListener("click", function(){
            checkTurn(element, "X")
            computerTurn()
        })
    })

    const computerTurn = ()=>{
        var place = Math.floor(Math.random() * 9);
        if (checkTurn(gameboard[place], "O")=="Turn is not valid"){
            computerTurn()
        }
    }

    const gameWin = (logo)=>{
        console.log(logo + " Win")
    }
    
    const checkForgameWin = (logo)=>{
        // check win in row
        if (gameboard[0].innerHTML === gameboard[1].innerHTML && gameboard[1].innerHTML === gameboard[2].innerHTML && gameboard[0].innerHTML === logo){return gameWin(logo)}
        if (gameboard[3].innerHTML === gameboard[4].innerHTML && gameboard[4].innerHTML === gameboard[5].innerHTML && gameboard[3].innerHTML === logo){return gameWin(logo)}
        if (gameboard[6].innerHTML === gameboard[7].innerHTML && gameboard[7].innerHTML === gameboard[8].innerHTML && gameboard[6].innerHTML === logo){return gameWin(logo)}
        // check win in column
        if (gameboard[1].innerHTML === gameboard[4].innerHTML && gameboard[4].innerHTML === gameboard[7].innerHTML && gameboard[1].innerHTML === logo){return gameWin(logo)}
        if (gameboard[0].innerHTML === gameboard[3].innerHTML && gameboard[3].innerHTML === gameboard[6].innerHTML && gameboard[0].innerHTML === logo){return gameWin(logo)}
        if (gameboard[2].innerHTML === gameboard[5].innerHTML && gameboard[5].innerHTML === gameboard[8].innerHTML && gameboard[2].innerHTML === logo){return gameWin(logo)}
        // check win in diagonal
        if (gameboard[0].innerHTML === gameboard[4].innerHTML && gameboard[4].innerHTML === gameboard[8].innerHTML && gameboard[0].innerHTML === logo){return gameWin(logo)}
        if (gameboard[2].innerHTML === gameboard[4].innerHTML && gameboard[4].innerHTML === gameboard[6].innerHTML && gameboard[2].innerHTML === logo){return gameWin(logo)}
    }
    return {computerTurn, checkForgameWin}
})()