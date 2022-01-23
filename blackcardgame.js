let players = {
    name: "mehnaaaaz",
    id: "7056",
    University: "vit-ap"

}

let sum = 0;
let arr = []
let blackcard = false;
let stillalive = false;
let msg = "";
let su = document.querySelector("#sums");
let card = document.querySelector("#card-el");
let mg = document.querySelector("#mesage");
let pgame = document.getElementsById("player");

pgame.textContent += players.name + "  " + players.id + " " + players.University;

function getrandomnum() {
    let rand = Math.floor(Math.random() * 13) + 1;
    if (rand === 1) {
        return 11;
    } else if (rand > 10) {
        return 10;
    } else {
        return rand;
    }
}

function startgame() {
    let stillalive = true;
    let n1 = getrandomnum()
    let n2 = getrandomnum()

    arr = [n1, n2]
    sum = n1 + n2;
    rendergame();
}

function rendergame() {
    card.textContent = "Cards :";
    for (let i = 0; i < arr.length; i++) {
        card.textContent += arr[i] + " ";
    }
    su.textContent = "sum :" + sum;
    if (sum < 21) {
        msg = "Do you want new card"
    } else if (sum === 21) { // double equals igonres fact eveb it is string it gives trues
        // if we use === then it gives strictly
        msg = "yes you got blackjack :)"
        blackcard = true;
    } else {
        msg = "You are out of game :(";
        stillalive = false;
    }
    mg.textContent = msg;
}

function Newcard() {
    //if (stillalive === true && blackcard === false) {
    let cardd = getrandomnum();
    sum += cardd;
    arr.push(cardd)
    rendergame()


}