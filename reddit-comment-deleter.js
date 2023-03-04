
/*

2023 Reddit Comment Deleter. 
Based partially on this: https://gist.github.com/jziggas/db8f9ffd296b49d484725a52c3f92406

Script that will work in a pinch to delete reddit comments. Deletes one comment every 2 seconds. Run it in the background
and go do something else to scrub your reddit history.  Uses a pretty brute force approach of just finding all the overflow icons, clicking on one at a time, then looking
for elements in the page with the word 'delete' in them and clicking on them. Not very precise or smart, but worked for me.  Since reddit switches up their layout every few years
Do not count on this to work very long, but if they still require the process of clicking on an overflow bar, selecting delete, then clicking an 'are you sure?' modal, then the basic
process should be the same even if you have to switch up the css selectors. 

INSTRUCTIONS: 

While logged in, Go to https://www.reddit.com/user/<yourusernamehere>/comments

and paste this in the console


*/ 

// if the script cannot find the elements
// right click click on the '...', select 'Inspect Element' and paste what you see under 'class' in the ICON_NAME variable
const  ICON_NAME = '_38GxRFSqSC-Z2VLi5Xzkjy icon icon-overflow_horizontal'
// Want to save the first few comments? paste the amount you'd like here
const SAVE_FIRST_COMMENTS = 3

function returnFirstElementWithText(tagName, searchText) {
	let returnElement;
	elementArray = Array.from(document.getElementsByTagName(tagName));
	for (const g of elementArray){
		if(g.textContent.toLowerCase() === searchText.toLowerCase()){
			returnElement = g
			break 
		}
	}
	return returnElement
}

function deleteComment(burgerBar){
	burgerBar.click()
	let Delete = returnFirstElementWithText("span", "delete")
	Delete.click()
	setTimeout(() => {
			
			let finalDelete = returnFirstElementWithText("button", "delete")
			finalDelete.click()
		}, 0.5 * 1000
	)
}

/* grabs an array of icons by class name, indexes one, then deletes it */ 
let interval = setInterval(() => {
	let allBurgers = document.getElementsByClassName(ICON_NAME)
	var burger = allBurgers[SAVE_FIRST_COMMENTS]
	deleteComment(burger)
}, 2000)
