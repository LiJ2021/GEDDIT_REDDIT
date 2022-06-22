// const update = document.querySelector('#vote-button')



//what do i want?  For every instance of the vote-button, it should count it individually. For Each?
// the database is called 'natural-wonders', the array of objects is called 'wonders'
//?? wonders.forEach(voteButton())
//??cookies

function voteButton(button){
    let count = parseInt(button.value);
    count += 1;
    button.innerHTML = "Votes for me: " + count;
    button.value = count;
    console.log(button)
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

//how many likes does a post have - 
//how to know how many likes are on a post - and add one
//how do we store values in our database? put

// instead of value = 0 make the value the ID of the post since were already looping through the post. update a post.