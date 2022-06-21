// const update = document.querySelector('#vote-button')



//what do i want?  For every instance of the vote-button, it should count it individually. For Each?
// the database is called 'natural-wonders', the array of objects is called 'wonders'
//?? wonders.forEach(voteButton())
//??cookies

function voteButton(){
let button = document.getElementById("vote-button"),
//ids are unique. how to call the instance of the button w/o id? this.vote-button?
count = 0;
button.onclick = function() {
    count += 1;
    button.innerHTML = "Votes for me: " + count;
}
}
// function onClick() {
//     clicks = clicks + 1;
//     clicks = document.getElementbyId("clicks").innerHTML;
// }

// forEach?  for each natural wonder, if vote:
//  { let i = 0 i = i+1;
// }
// function click() {
// clicks = clicks + 1;
// document.getElementbyId("clicks").innerHTML = clicks;
// }
// 
// onClick()


