var data = [
{ name: 'Susan', country: 'USA', age: 29},
{ name: 'Miho', country: 'Japan', age: 54},
{ name: 'Juliana', country: 'Brazil', age: 19},
{ name: 'Ana', country: 'Spain', age: 39},
{ name: 'George', country: 'England', age: 51},
{ name: 'Jing', country: 'China', age: 26},
{ name: 'Pablo', country: 'Mexico', age: 71},
{ name: 'Adrienne', country: 'France', age: 35},
{ name: 'John', country: 'Greece', age: 62},
{ name: 'Peter', country: 'Canada', age: 42},
{ name: 'Jean', country: 'Greece', age: 18}

];
var template = document.querySelector('#template');
for(var i = 0; i < data.length; i++) {
  var user = data[i];
  // console.log(user);
  var clone = template.content.cloneNode(true);

  var h2 = clone.querySelectorAll('h2');
  h2[0].innerHTML = user.name;

  var p = clone.querySelectorAll('p');
  p[0].innerHTML = "<b>Country:</b> "+user.country+"<br><br>"+"<b>Age:</b> "+ user.age;

  template.parentNode.appendChild(clone);

}