//An anagram is a word or phrase formed by rearranging the letters 
//of a different word or phrase, typically using all the original 
//letters exactly once. ... Any word or phrase that exactly reproduces the 
//letters in another order is an anagram.

const anagramCheck = (strA, strB)=>{
    
    //if the words are same, its not anagram
    if(strA===strB){
        return "Same words! No Anagram!"
    }else{
        return helper(strA)===helper(strB)
    }
    

    function helper(str){
        //first we replace all occurrences of a non-word char in a string
        //then we make array and we sort it
        //and then we join it in string again
        return str.replace(/[^\w]/g, '').toLowerCase().split("").sort().join('')
    }
}

console.log(anagramCheck("good", "dogo"))