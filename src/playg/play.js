function sortNumber(a,b) {
    return a - b;
}

function validAnagram(word1,word2){
  // add whatever parameters you deem necessary - good luck!
  let list1=[];
  let list2=[];

  for (let i = 0; i < word1.length; i++) {
   list1.push(word1.charCodeAt(i));
  }
  
  for (let i = 0; i < word2.length; i++) {
   list2.push(word2.charCodeAt(i));
  }

  list1.sort(sortNumber);
  list2.sort(sortNumber);

  for (let i = 0; i < list1.length; i++){
    if(list1[i]!=list2[i]){
        return false;
    }
  }
  return true;
}