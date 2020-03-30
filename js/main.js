$(document).ready(function() {

  var flavors = ["mint chip", "chocolate", "vanilla", "pistachio", "cherry", "mudslide", "covid 19 swirl"];

  var list=document.createElement('ul');
  //create a list item for each ice cream flavor
  flavors.forEach(function(flavor) {
    var li = document.createElement('li');
    li.textContent =flavor;
    list.appendChild(li);
  
    // Made insert id to
    var insert = document.querySelector('#insert');
    insert.appendChild(list);
    // console.log(insert);

  });
});

  

  