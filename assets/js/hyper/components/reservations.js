import {h, app} from 'hyperapp'
import { setInterval } from 'timers';

export default function Reservation({state, actions}) {
  
  setTimeout(function reserve(){

    const reserveEmail = document.getElementById('reserve-email')
    const reservationSubmit = document.getElementById('reservation-submit')
    const emailWarning = document.getElementById('reserve-warning')
    const reservationModal = document.getElementById('reservations')
  
    //on modal submit
    reservationSubmit.onclick =_=> {

      //checks that the user input anything
      if(reserveEmail.value === ""){
        //
        emailWarning.style.color = 'red'
        //if not, alerts with red text to enter valid email
        emailWarning.innerHTML = "Please enter a valid email address"
      } else {
        //if they input something, removes the modal
        reservationModal.classList.replace('show','hidden')
        emailWarning.innerHTML = ""
      }
    }
    //modal load delay
  },3000)

  return (
    <section id="reservations" class="hidden">
    <div class="reservation-overlay"></div>
      <div class="container reservation-container">
        <div class="reservation-body">
          <div class="reservation-logo"></div>
          <h1 class="reservation-title">All booked up</h1>
          <h5 class="reservation-description">Please try again tomorrow.</h5>
          <form id="email-form">
          <h5 class="email-validation"></h5>
          <input type="text" class="name" placeholder="Name" disabled/>
          <input type="text" class="last" placeholder="Last" disabled/>
          <input type="number" class="telephone" placeholder="Phone" disabled/>
          <input type="text" id="reserve-email" action="mailto:" placeholder="Email Address"></input>
          <input type="submit" id="reservation-submit">Submit</input>
          <h5 id="reserve-warning"></h5>
          </form>
          <a id="close-reservation"><i class="fas fa-times"></i></a>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>