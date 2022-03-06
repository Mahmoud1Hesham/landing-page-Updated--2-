/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

// variable declaration (storing navbar__list in a variable to use it to make the navigation bar)
const nali = document.getElementById('navbar__list');
// variable declration  (summoning or invoking every section to make the loop for the navigation bar and storing it in a variable)
const sec = document.querySelectorAll('section');
// Adding a top button
const topbutton = document.getElementById("topBtn");
// putting all sections in array to control the number of sections
//sec = Array.from(document.querySelectorAll('section'));
Array.from(sec);
// noli = number of list items
let noli = sec.length;
// this function will help us make the links without html 
function makeListItem () {
    for (section of sec) {
        // defining the datatype and returns the value of the element's attribute
        secName = section.getAttribute('data-nav');
        // defining the id and returns the value of the element's attribute
        secLink = section.getAttribute('id');
        // makes a li item
        listItem = document.createElement('li');
        listItem.id = `L${secLink}`;
       
        // add an inner html code to add html to the li item
        listItem.innerHTML = `<a onclick ='click_selection(${secLink})'>${secName}</a> `;

        // add listItem to the bar by adding it to the nali
        nali.appendChild(listItem);
    }
}

// making a function that tells us if the sectin is in the our view
function secInView(loc) {
    let secloc = loc.getBoundingClientRect();
    // return if the section is in the view
    return (secloc.top >= 0 && secloc.top < 300);
    
}

function giveActiveClass() {
    // make a for loop and make a condition in it to make it right
    for (section of sec) {
        // if the section is in our view
        if (secInView(section)) {
            // we want to check if it DOSEN'T!! already has your-active-class
            if (!section.classList.contains('your-active-class')) {
                // add it
                section.classList.add('your-active-class');
               // and highlight it directly ... note: the litter 'L' has ben added the make a diffrecnce between the button id and the li id 
                document.getElementById(`L${section.getAttribute('id')}`).style.backgroundColor = '#333';
                document.getElementById(`L${section.getAttribute('id')}`).style.color = 'white';
            }
        }
        // else .. remove it
        else {
            section.classList.remove('your-active-class');
            document.getElementById(`L${section.getAttribute('id')}`).style.backgroundColor = '';
            document.getElementById(`L${section.getAttribute('id')}`).style.color = '';
        }
    }
}

// creating this function allow us to scroll into the desired section by targeting the the <a> id 
function click_selection(select)
{
    select.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}
// build the nav
makeListItem();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', giveActiveClass);


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
// this fuction includes an if condition to make sure that the button will appear 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function goToTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
