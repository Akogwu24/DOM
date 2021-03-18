//Document Object

// console.dir(document); //lists all properties associated with the cdocument object
// console.log(document); //get the html document itself
// console.dir(document.domain);
// console.dir(document.URL); //gets the URL hhts://and the remaining parts or IP address
// console.dir((document.title = 'new title')); //changes the title
// console.dir(document.head); //lists properties asscoiated with the head elemen
// console.log(document.head); // logs the hea element as it is inn the HTML
// console.log(document.body); //logd the body tag and its content
// console.log(document.all); //returns and array/collection of all the elements in the document
// console.log(document.all[10]); //logs the element at index 10
// document.all[10].textContent = 'this is my own text';
// console.log(document.forms); //returns a collection all forms in the document we can also do it for others like links, images,

//Get Element By Id
// const headerTitle = document.getElementById('header-title');

//headerTitle.textContent = 'Hello'; //does not obey the styling applied
// headerTitle.innerText = 'Goodbye'; //Obeys the style rule applied
// headerTitle.innerHTML = '<h3>hello</h3>'; //used when we want to put/nest another HTML element inside the existing element

//styling element in Js eneral formula is element.style.CSSProperty='style'
// headerTitle.style.borderBottom = 'solid 3px black';

//Get Elements By Class Name
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'i am the new Item2';
// items[1].style.fontWeight = 'bold';

// for (i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = 'gray';
// }

// const list = document.getElementsByTagName('li');
// console.log(list);
// console.log(list[1]);
// list[1].textContent = 'i am the new Item2';
// list[1].style.fontWeight = 'bold';

// for (listItem = 0; listItem < list.length; listItem++) {
//   list[listItem].style.backgroundColor = 'rebeccapurple';
// }

//Query Selector
// const input = document.querySelector('input');
// input.value = 'enter the name of item you want to search for';

// const input2 = document.querySelectorAll('input')[1];
// input2.placeholder = 'i am input2';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'ADD';
// //last item
// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.backgroundColor = 'blue';
// //second item
// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'aqua';

//Query Selector All
//?????What is the difference between nodelist, Arra and HTMLCollection????

// const titles = document.querySelectorAll('.title');
// titles[0].textContent = 'it worked';

// const oddListItems = document.querySelectorAll('li:nth-child(odd)');
// for (listItem = 0; listItem < oddListItems.length; listItem++) {
//   oddListItems[listItem].style.backgroundColor = 'teal';
// }

//TRAVERSING THE DOM
//?????????what id the difference between parentNode and parentElement?????????
//parentNode and parentElement
// const itemList = document.querySelector('#items');
// itemList.parentNode.style.backgroundColor = 'gray';

// console.log(itemList.parentElement);

//childNode
// console.log(itemList.childNodes);
// console.log(itemList.childElementCount); //returns the number of children in that node
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'chocolate';
// //first Child
// itemList.firstElementChild.textContent = 'hello my people';
// itemList.lastElementChild.textContent = 'hello4';

//Next Sibling
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'purple';

//Create Element
//create a div
// const newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello2';
// newDiv.setAttribute('title', 'hello3');

//create a text node
// const newDivText = document.createTextNode('my people');
// newDiv.appendChild(newDivText);

// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');
// console.log(newDiv);
// container.insertBefore(newDiv, h1);

//My Own DOM manipulations
const header = document.getElementById('main-header');
header.style.backgroundColor = 'red';

const headingTitle = document.getElementById('header-title');
headingTitle.innerText = 'Akogwu Changed me!!!!!!';

const topInput = document.querySelector('header input');
topInput.setAttribute(
  'placeholder',
  'iput the item name let me search for you.'
);

const addBtn = document.getElementById('main').children[1].children[1];
addBtn.setAttribute('value', 'ADD YOUR ITEMS');

const listItem = document.createElement('li');
listItem.innerHTML = 'newly added item';

let list = document.querySelector('#items');
list.cla;
list.appendChild(listItem);
