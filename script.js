const options = [
rock = {"text" : "Rock", "beats" : "Scissors"},
paper = {"text" : "Paper", "beats" : "Rock"},
scissors = {"text" : "Scissors", "beats" : "Paper"}
];

function playRound(computerPlayIndex = getComputerPlay(), userPlayIndex = getUserPlay()){
    computerPlayIndex = computerPlayIndex > 2 ? 2 : computerPlayIndex;
    let computerPlay = options[getKeyForOption(computerPlayIndex)];

    userPlayIndex = userPlayIndex > 2 ? 2 : userPlayIndex;
    let userPlay = options[getKeyForOption(userPlayIndex)];

    //my new stuff aaa
    
    let introText;
    if(userPlay === computerPlay){
        alert("Draw! "+userPlay.text+" equals "+computerPlay.text);
    }else{
        if(userPlay.beats == computerPlay.text){
            introText = "You Won! ";
            alert("You Won! "+userPlay.text+" beats "+computerPlay.text);
        }else{
            alert("You Lose! "+computerPlay.text+" beats "+userPlay.text);
        }    
    }
}

function getComputerPlay(){
    let numberToPlay;

    while(numberToPlay > 2 || numberToPlay == undefined){
        numberToPlay = parseInt(Math.random() * 10);
    }


    return options[numberToPlay].text;
}

function getUserPlay(){
    let optionToPlay = prompt("Pick! Rock, Paper or Scissors", "Rock");
    optionToPlay = getValidTextFromInput(optionToPlay);

    return optionToPlay;
}

function getValidTextFromInput(optionToPlay){
    let text = optionToPlay.substring(0,1).toUpperCase() + optionToPlay.toLowerCase().substring(1);

    console.log("text: "+text);

    if(isValidOption(text)){
        console.log("Valid text!");
    }else{
        console.log("Invalid text! Picking Rock");
        text = "Rock"
    }

    return text;
}

function isValidOption(text){
    for(let i = 0; i < options.length; i++){
        if(options[i].text === text){
            return true;
        }
    }
    return false;
}

function getKeyForOption(optionText){
    switch(optionText){
        case "Rock":
            return 0;
        case "Paper":
            return 1;
        case "Scissors":
            return 2;    
    }

}