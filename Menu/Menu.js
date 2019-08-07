/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/
// Pass the function an array as it's only argument.
function createMenu(arr){
  //create elements
  const menu = document.createElement('div');
  const unorderedList = document.createElement('ul');
  
  // create structure for elements
  menu.appendChild(unorderedList);

  // set element classes
  menu.classList.add('menu');
 
  // 2: Iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>
  arr.forEach((element) => {
    let listItem = document.createElement('li');
    listItem.textContent = element;
    unorderedList.appendChild(listItem);
  });

   // Step 3: Using a DOM selector, select the menu button currently on the DOM.
   // Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', (e) => {
    // e.target.toggle('.menu--open');
    menu.classList.toggle('menu--open');
  });

 // Step 5: return the menu component.
 return menu;
} //end create function componenet

const header = document.querySelector('.header');
// console.log(header)
header.appendChild(createMenu(menuItems));
  
  // Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  // Step 5: return the menu component.

  // Step 6: add the menu component to the DOM.
  

