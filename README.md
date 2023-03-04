/*

# 2023 Reddit Comment Deleter. 


Based partially on this: https://gist.github.com/jziggas/db8f9ffd296b49d484725a52c3f92406


## Description 
Script that will work in a pinch to delete reddit comments. Deletes one comment every 2 seconds. Run it in the background
and go do something else to scrub your reddit history.  Uses a pretty brute force approach of just finding all the overflow icons, clicking on one at a time, then looking
for elements in the page with the word 'delete' in them and clicking on them. Not very precise or smart, but worked for me.  Since reddit switches up their layout every few years
Do not count on this to work very long, but if they still require the process of clicking on an overflow bar, selecting delete, then clicking an 'are you sure?' modal, then the basic
process should be the same even if you have to switch up the css selectors. 

## Instructions: 

While logged in, Go to https://www.reddit.com/user/<yourusernamehere>/comments

and paste this in the console


*/ 