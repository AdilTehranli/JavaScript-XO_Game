let x = "X";
let o = "O";
let arr = [];
let count = 1;
let player1 ;
let player2;
let point1 = 0;
let point2 = 0;

start();

function start(){
    player1 = player1 ===undefined ? prompt('Player1', 'X') : player1;
    player2 = player2 === undefined ?  prompt('Player2', 'O') : player2;
    Arr();
    table();
}

console.log(arr[0][0]);




function table() {
    let tbl = document.getElementById("tbl");
    let html = '';

    for (let i = 0; i < 3; i++) {
        html += '<tr>';
        for (let j = 0; j < 3; j++) {
            html += `<td onclick="Click(${i},${j})"> ${arr[i][j] ?? ''} </td>`;
        }
        html += '</tr>';
    }

    tbl.innerHTML = html;
}


function Arr(){
    for(let i = 0; i<3; i++){
        arr[i] = [];
    }
}


function Click(i,j){
    if(arr[i][j] === undefined){
        if(count%2==0){
            arr[i][j] = o;
        }else {
            arr[i][j] = x;
        }
        count++;
        table();
    setTimeout(()=>{
        check();
    }, 500);
    }
}


function check(){
    for(let i = 0; i<3; i++){
        if(arr[i][0] !== undefined &&  arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2] ){
            alert( arr[i][0] == player1 ? player1 : player2 );
            start();
        }
        else if(arr[0][i] !== undefined &&  arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]){
            alert( arr[0][i] == player1 ? player1 : player2 );
            start();
        }
    
    }
    for(let i = 0; i<3; i++){
        if(arr[0][i] !== undefined &&  arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i] ){
            alert( arr[0][i] == player1 ? player1 : player2 );
            start();
        }
    }
}