


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

