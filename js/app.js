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
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navBuild(){
    //looping over all sections
    sections.forEach(function(section){
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
        let navList = document.createElement('li');
        navList.innerHTML = `<a class= "menu__link" href ="#${sectionID}">${sectionDataNav}</a>`;
        //append all sections to the nav bar
        navigation.appendChild(navList);
    });
};

navBuild();


// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', function(){
    let current = '';
    sections.forEach(function(section){
        //getting the space between the top and the section
        const bound = Math.floor(section.getBoundingClientRect().top);
        // remove the active class
        section.classList.remove('your-active-class');
        if((bound < 300) && (bound>-300)){
            // adding the active class
            section.classList.add('your-active-class');
        }
    });
    
});




// Scroll to anchor ID using scrollTO event

/** I've tried different methods to do so, but didn't work
 * so I implemented it with the CSS hhtml{scroll-behavior: smooth;}
 * the function below was the last scroll function I've tried
*/

/*
function scroll(){
    navigation.addEventListener('click', function(event){
        event.preventDefault();
        if (event.target.dataset.nav) {
            document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });
        }  
    });
};
scroll();
*/


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


