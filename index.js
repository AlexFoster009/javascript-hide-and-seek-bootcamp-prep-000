
function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0];
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild(){
  var node = document.getElementById('grand-node');
  var nextNode = node.children[0];

  while (nextNode){
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}

function increaseRankBy(n){
  var lists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = lists.length; i < l; i++){
    let children = lists[i].children;

    for(let j = 0 , k = children.length; j < k; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }

}
