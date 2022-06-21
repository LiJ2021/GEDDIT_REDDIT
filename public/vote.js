// const update = document.querySelector('#vote-button')



//what do i want?  For every instance of the vote-button, it should count it individually. For Each?

function voteButton(){
let button = document.getElementById("vote-button"),
// document.querySelectorAll('onclick')
// 
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


