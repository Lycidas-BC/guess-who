$( document ).ready(readyNow);
console.log('Here are all the available people:', people);

function displayRandomName() {
    const randNum = randomNumber(0,people.length-1);
    const randPerson =  people[randNum];
    $( "#challenge" ).empty();
    $( "#challenge" ).data("index", randNum);
    $( "#challenge" ).append(randPerson.name);
} //end displayRandomName

function loadImageDivs() {
    for (const personIndex in people) {
        $( "#board" ).append(
            `<div class="grid" id="${personIndex}">
                <img src="https://github.com/${people[personIndex].githubUsername}.png?size=250" alt="Profile image of ${people[personIndex].name}">
            </div>`);
    }
} //end loadImageDivs

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
} //end randomNumber

function readyNow() {
    loadImageDivs();
    displayRandomName();
    $( "#board" ).on("click","div", validateGuess );
} //end readyNow

function resetBoard() {
    $( "#winOrLoseMessage" ).empty();
    $( "#winOrLoseMessage" ).append( "New game" );
    $( "#winOrLoseMessage" ).css( {"background-color" : "white", "color" : "black"} );
    displayRandomName();
}

function validateGuess() {
    if (Number(this.id) === Number($( "#challenge" ).data("index"))){
        $( "#winOrLoseMessage" ).empty();
        $( "#winOrLoseMessage" ).append( "YOU WIN!!" );
        $( "#winOrLoseMessage" ).css( {"background-color" : "green", "color" : "white"} );
        setTimeout(resetBoard, 2000);
    } else {
        $( "#winOrLoseMessage" ).empty();
        $( "#winOrLoseMessage" ).append( "SORRY. PLEASE GUESS AGAIN" );
        $( "#winOrLoseMessage" ).css( {"background-color" : "red", "color" : "white"} );
    }
} //end validateGuess