
let turn = 0;
const p1_x = {};
const p1_y = {};
const p2_x = {};
const p2_y = {};
console.log("outside");
const logic = (id) => {
    
    console.log("inside");
    const x = parseInt(parseInt(id) / 10);
    const y = parseInt(id) % 10;
    document.getElementById(id).innerHTML = turn % 2;
    document.getElementById(id).disabled = true;
    document.getElementById(id).style.pointerEvents = 'none';
    
    if (turn % 2 === 0){
        p1_x[x] = p1_x[x] != undefined ? p1_x[x] + 1 : 1;
        p1_y[y] = p1_y[y] != undefined ? p1_y[y] + 1 : 1;
        if (turn >= 4 && (p1_x[x] === 3 || p1_y[y] === 3)){
            console.log("player1 win");
            turn = -1;
        }
    }
    else{
        p2_x[x] = p2_x[x] != undefined ? p2_x[x] + 1 : 1;
        p2_y[y] = p2_y[y] != undefined ? p2_y[y] + 1 : 1;
        if (turn >= 4 && (p2_x[x] === 3 || p2_y[y] === 3)){
            console.log("player2 win");
            turn = -1;
        }
    }
    if (turn === 8){
        console.log("Draw");
    }
    turn += 1
}