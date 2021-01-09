const trump = {
    1: "♠1",
    2: "♠2",
    3: "♠3",
    4: "♠4",
    5: "♠5",
    6: "♠6",
    7: "♠7",
    8: "♠8",
    9: "♠9",
    10: "♠10",
    11: "♠11",
    12: "♠12",
    13: "♠13",
    14: "♥1",
    15: "♥2",
    16: "♥3",
    17: "♥4",
    18: "♥5",
    19: "♥6",
    20: "♥7",
    21: "♥8",
    22: "♥9",
    23: "♥10",
    24: "♥11",
    25: "♥12",
    26: "♥13",
    27: "♦1",
    28: "♦2",
    29: "♦3",
    30: "♦4",
    31: "♦5",
    32: "♦6",
    33: "♦7",
    34: "♦8",
    35: "♦9",
    36: "♦10",
    37: "♦11",
    38: "♦12",
    39: "♦13",
    40: "♣1",
    41: "♣2",
    42: "♣3",
    43: "♣4",
    44: "♣5",
    45: "♣6",
    46: "♣7",
    47: "♣8",
    48: "♣9",
    49: "♣10",
    50: "♣11",
    51: "♣12",
    52: "♣13",
    53: "ジョーカーやで＾＿＾",
}
var randoms = []
var turn = 0
var GameLog = document.getElementById('game-log')


function opencard(user) {
    var card = Math.floor(Math.random() * 53 + 1)
    var num=document.createElement('p')
    num.innerHTML = user + ':' + trump[card]
    if (user === 'user1') {
        num.style.color='red'
    } else {
        num.style.color='blue'
    }
    
    GameLog.appendChild(num)
    if (card == 53) {
        if (turn < 4) {
            alert('まだ試合を終えるには早すぎる')
            num.remove()
        } else {
            alert(user+' lose!!!!!!!!!!!!!!!!!!!!!!')
        }
        }
        for (var i = 0; i < randoms.length; i++){
            if (randoms[i] == card) {
                num.remove()
                turn = turn-1
            } 
    }
    randoms.push(card)
    turn = turn + 1
}

function reset() {
    turn = 0
    randoms = []
    while (GameLog.firstChild) GameLog.removeChild(GameLog.firstChild);

}

