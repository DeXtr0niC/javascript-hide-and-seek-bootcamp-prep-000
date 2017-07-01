function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML)+n).toString();
  }
}

function deepestChild(){
  var current = document.getElementById('grand-node');
  var next = current.childNodes[1];
  while (next) {
    current = next;
    next = current.childNodes[1];
  }
  return current;
}
