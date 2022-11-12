//Emptyarray of words
let words = [];


// settng paramter and returns true if it is found, false
function search(word){
    return words.includes(word);
}
//addWord function and pushes word added
function addWord(word){
    words.push(word)

}
//declaration is used to export values from search and addWord module
export{search, addWord};
