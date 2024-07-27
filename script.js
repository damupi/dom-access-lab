// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

/*************
 * Task 1.0
 * **************/ 
// Select and cache the `<main>` element in a variable 
// named `mainEl`.
let mainEl = document.getElementById("mainEl");

// Console.log this to verify that you have succeeded 
// in caching the object.
console.log(mainEl);

/*************
 * Task 1.1
 * **************/ 
// Set the background color of `mainEl` to "#4a4e4d". 
mainEl.style.backgroundColor = "#4a4e4d";

/*************
 * Task 1.2
 * **************/ 
// Set the content of `mainEl` to `<h1>SEI Rocks!</h1>`.
let mainElFragment = document.createElement("h1");
mainElFragment.textContent = "SEI Rocks!";

mainEl.appendChild(mainElFragment);

/*************
 * Task 1.3
 * **************/ 
//Add a class of `flex-ctr` to `mainEl`.
mainEl.classList.add("flex-ctr");

/*************
 * Task 2.0
 * **************/ 
// Select and cache the `<nav id="top-menu">` element in a 
// variable named `topMenuEl`.
let topMenuEl = document.querySelector("nav");
topMenuEl.id = "top-menu";


/*************
 * Task 2.1
 * **************/ 
// Set the height `topMenuEl` element to be `100%`.
topMenuEl.style.height = "100%";

/*************
 * Task 2.2
 * **************/ 
// Set the background color of `topMenuEl` to the 
// value stored in the `--top-menu-bg` CSS custom property.
let root = document.documentElement;
let rootStyles = getComputedStyle(root)
let topMenuBg = rootStyles.getPropertyValue("--top-menu-bg");

topMenuEl.style.backgroundColor = topMenuBg;

/*************
 * Task 2.3
 * **************/ 
// Add a class of `flex-around` to `topMenuEl`.
topMenuEl.classList.add("flex-around");

/*************
 * Task 3.0
 * **************/ 
//Copy the following data structure to the top of **script.js**:
// ```js
// // Menu data structure
// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];
// ```

// See top of the script

/*************
 * Task 3.1
 * **************/ 
// Write a loop to iterate over the entire `menuLinks` array 
// and for each "link" object:
for(let i = 0; i < menuLinks.length; i++){
    // Create an `<a>` element.
    let linkEl = document.createElement("a");
    // On the new element, add an `href` attribute with its 
    // value set to the `href` property of the "link" object.
    linkEl.href = menuLinks[i].href;
    // Set the new element's content to the value of the 
    // `text` property of the "link" object.
    linkEl.textContent = menuLinks[i].text;
    // Append the new element to the `topMenuEl` element.
    topMenuEl.appendChild(linkEl);
}    
