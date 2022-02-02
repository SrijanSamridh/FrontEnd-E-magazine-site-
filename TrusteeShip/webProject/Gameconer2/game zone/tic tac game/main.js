console.log("welcome to my game")
let turn = "X";

const changeTurn = () =>{
    return turn === "X"? "0":"X";
}
let gameover = false;

const checkWin= () =>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5 ,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
   wins.forEach(e =>{
       if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')){
           document.querySelector('.info').innerText = boxText[e[0]].innerText  + ' is  WON '
           gameover = true;
           document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "100%"
           document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw , ${e[5]}deg)`

       }
   })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
             changeTurn();
            checkWin();
            if(!gameover){

                document.getElementsByClassName("info")[0].innerText = turn;
            }
        }
    })
})

Reset.addEventListener('click',()=>{
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false

    

        document.getElementsByClassName("info")[0].innerText = turn;
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
    
    


})