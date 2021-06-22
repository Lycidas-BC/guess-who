$( document ).ready(readyNow);
console.log('Here are all the available people:', people);

function loadImageDivs() {
    for (const person of people) {
        $( "body" ).append(
            `<div>
                <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
            </div>`);
    }
} //end loadImageDivs

function readyNow() {
    loadImageDivs();
} //end readyNow