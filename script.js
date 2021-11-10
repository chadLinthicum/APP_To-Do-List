const textBox = document.getElementById('textBox');
const submitButton = document.getElementById('submitButton');
const clearButton = document.getElementById('clearButton');
var i = 1;

////
function submit() {
  const ulDiv = document.createElement('div');
  const toDoItemButton = document.createElement('button');
  const toDoItemText = document.createElement('li');
  const toDoList = document.getElementById('toDoList');
  const textBoxValue = textBox.value;
  if (toDoItemButton.textContent == "") {
    toDoItemButton.textContent = "X";
  }
  
  toDoList.appendChild(ulDiv);
  ulDiv.className = "toDoItems";
  ulDiv.id = "toDoItem_" + i;
  // toDoItem.className = "toDoItems";
  i++;
  toDoItemText.innerText=textBoxValue;
  
  ulDiv.appendChild(toDoItemText);
  toDoItemText.appendChild(toDoItemButton);
  toDoItemButton.className = "button";
  
  textBox.value = ""; //clears the textBox
  
  // deleteToDo(toDoItem) //this passes it so it can be used outside the function 

  toDoItemText.addEventListener('click', strikethroughTheText)
  
  toDoItemButton.addEventListener('click', () => deleteToDo(toDoItemButton));
  console.log(toDoItemButton.parentElement);
}

////
submitButton.addEventListener("click", event => { 
  event.preventDefault();
  if (textBox.value == "") {
    alert("Oy! Ya gotta do somethin!");
  } else {
    submit();
  }
})

////
function strikethroughTheText(event) {
  // console.log(event.target.className);
  if (event.target.className == "") {
    event.target.classList.add("strikeThrough");
  } else {
  // console.log("Test");
  event.target.removeAttribute("class");
  }
}

////
function deleteToDo(element) {
  element.parentElement.remove();
  
  // console.log(event.target);
  // console.log(event.target.className)  
  // var x = document.getElementsByClassName
  // console.log(x);
  // var x = document.getElementsByClassName("button").parentElement;
  // console.log(x);
}










//
// document.addEventListener('click', e => { 
//   e.preventDefault();
//   alert("ballz");
// })

//get value from textbox
//store it in a variable\
//create an li
//append it to ul

//
// for (x = 1; x < 100; x++){
//   console.log(x);
// }

//
// const test = document.getElementById('clearButton');
// var content = test.innerText; 
// console.log(content);

//
// const links = document.getElementsByTagName("li"); //grabs all anchor tags from HTML file
// for (i=1; i <= links.length; i++) {
//   console.log("This is link number "+i);
// }

//
// chadL = {name:"Chad Linthicum", age:31};
// console.log(chadL.age);

// function person (name, age){
//   this.name = name;
//   this.age = age;
// }

// var chad = new person("Chad Linthicum", 31); //object name and blue print you want to use
// var emily = new person("Emily Cullen", 31.5); 
// console.log(chad.name);
// console.log(emily.name);
// console.log(emily.age)

//
// var recipe = {title:"Mole", servings:2, ingredients:["cinnamon", "cumin", "cocoa"]};
// console.log(recipe.title);
// console.log(recipe.servings);
// console.log(recipe.ingredients);

// var recipe = {
//   'title': 'Mole',
//   'servings': 2,
//   'ingredients': ['cumin', 'cinnamon', 'cocoa']
// };

// console.log(recipe.title);
// console.log('Servings: ' + recipe.servings);
// console.log('Ingredients:');
// for (var i = 0; i < recipe.ingredients.length; i++) {
//   console.log(recipe.ingredients[i]);
// }

//
// var books = [
//   {title: 'The Hobbie', author: 'Tolkien', alreadyRead: false},
//   {title: 'Metroid: Vol 1', author: 'Nintendo', alreadyRead: true},
//   {title: "The Holy Bible", author:'God', alreadyRead: true}
// ];

// for (var z = 0; z < books.length; z++) {
//   var book = books[z];
//   var bookInfo = book.title + " by " + book.author;
//   if (book.alreadyRead) {
//     console.log('You done read ' + bookInfo);
//   } else {
//     console.log('Aint read ' + bookInfo);
//   }
// }

//
// const first = document.getElementById('firstToDo')
// console.log(first);

// first.style.color='crimson';

// const lis = document.querySelectorAll('li');
// lis.forEach(li => {
//   document.write(li.innerText);
// })

// const lis2 = document.querySelectorAll('li');
// lis2.forEach(li => {
//   console.log(li.innerText); //textContent for everything including hidden
// })