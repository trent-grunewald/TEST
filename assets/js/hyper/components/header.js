import {h, app} from 'hyperapp';
import reservations from './reservations';
import ourStory from './ourstory';
import promotions from './promotions';
import contact from './contact';


export default function Header({state, actions}) {
     
      // NAV COLLAPSE
  function navToggle() {
  const navs = document.querySelectorAll('.nav-item')
  const collapsed = document.querySelectorAll('.nav-collapse')

      //Targets the nav-item css class and replaces it with nav-collapse;
  navs.forEach(nav => nav.classList.replace('nav-item', 'nav-collapse'));
      //targets the nav-collapse css class and replaces it with nav-item;
  collapsed.forEach(nav => nav.classList.replace('nav-collapse', 'nav-item'));
}

window.onload =_=>{
const butt = document.querySelector('.logo');
    //checks the window size on load  
if(window.innerWidth <= 1000) {
    //adds the "Click" event listener to collapse menu if the page is less to or equal to 1000 px wide and initiates the navToggle function.
  butt.addEventListener('click', navToggle)
  }
   //if the window is not 1000 px wide, it adds an event listener to the window resize.
window.addEventListener("resize", () =>{
  const butt = document.querySelector('.logo');
    //checks the window width on resize.
if(window.innerWidth <= 1000) {
    //adds "click" event listener to collapse menu at 1000px
  butt.addEventListener('click', navToggle)
    } else {
  butt.removeEventListener('click', navToggle)
    }
  })

  //RESERVATION MODAL
  const requestRes = document.getElementsByClassName('reservationRequest');
  const reservationBody = document.getElementById('reservations');
  const closeRes = document.getElementById('close-reservation');
  //For Loop targeting all Reservation buttons
  for (let i = 0; i < requestRes.length; i++) {
    const z = requestRes[i];
    //Adds Click Listener to each button
    z.addEventListener('click', function(){
      //Toggles the display class on click
      reservationBody.classList.replace('hidden', 'show');
    })
  }
  //Hides the modal when the user clicks the X icon
  closeRes.onclick = function() {
    reservationBody.classList.replace('show', 'hidden');
  }


//MENU MODAL
const openMenu = document.getElementsByClassName('openMenu');
const menuBody = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');

  for (let t = 0; t < openMenu.length; t++) {
    const x = openMenu[t];

    x.addEventListener('click', function(){
      menuBody.classList.replace('hidden', 'show');
    })
  }
closeMenu.addEventListener('click', function(){
  menuBody.classList.replace('show', 'hidden');
});
}

  return (
    <header id="header">
      {
        <div class="container">
          <nav class="nav">
            <div class="logo"></div>
            <a href="#menu" class="openMenu nav-item nav-box">Menu</a>
            <a href="#ourStory" class="nav-item nav-box">Our Story</a>
            <a href="#promotions" class="nav-item nav-box">Private Events</a>
            <a href="#contact" class="nav-item nav-box">Locations</a>
            <a href="#reservations" class="nav-item nav-box reservations reservationRequest">Reservations <i class="fa fa-angle-right"></i></a>
        </nav>
      </div>
      }
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
