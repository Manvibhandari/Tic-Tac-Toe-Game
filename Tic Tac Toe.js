let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#set");
let mesg_box = document.querySelector(".msgbox");
let newbtn = document.querySelector("#btn");
let Winnermsg = document.querySelector("#msg");



let turnO = true;

const winpattern = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8],
];

const resetgame =() => {
    turnO = true;
    enableboxes(); 
    mesg_box.classList.add("hide")
}
 boxes.forEach( (box) =>{
    box.addEventListener ( "click", () =>{
        console.log("box is clicked");
        if(turnO){
            box.innerText = "O";
            turnO= false ;
        }else{
            box.innerText = "X";
            turnO = true ;
        }
        box.style.pointerEvents = "none";
        checkwinner();
    } )
 });

 const disableboxes = () => {
    for( let box of boxes){
        box.style.pointerEvents = "none";
    }

 }

 const enableboxes = () => {
    for( let box of boxes){
        box.style.pointerEvents = "auto";
        box.innerText ="";
    }
 }


 const showwinner =(winner) => {
    Winnermsg.innerText = `Congratulations , winner is ${winner}`;
    mesg_box.classList.remove("hide");
    disableboxes();

 }
 const checkwinner = ()=> {
    for( let pattern of winpattern ){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("Winner", pos1val);
                showwinner(pos1val);
            }
        }
    }
 }
 newbtn.addEventListener("click", resetgame);
 reset.addEventListener("click", resetgame);

