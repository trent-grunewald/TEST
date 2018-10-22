import {h, app} from 'hyperapp'

export default function Modal({state, actions}) {
      // modal popup
setTimeout(function modalFunc(){

  const popup = document.getElementById('modal')
  const userInputV = document.getElementById('email') 
  const emailValidation = document.querySelector('.email-validation')
  const closeIcon = document.getElementById('close-modal')
  const modalSubmit = document.getElementById('modal-submit')

  //Targets the close icon in the bottom right of the modal.
  closeIcon.onclick =_=> {
    //on icon click, closes the modal (Display: none - scss)
  popup.style.display = 'none'
   }

  //replaces the modal scss display from none to show
  popup.classList.replace('hidden', 'show');

  //on modal submit
  modalSubmit.onclick =_=> {
    //checks that the user input anything
    if(userInputV.value === ""){
      //if not, alerts with red text to enter valid email
      emailValidation.style.color = 'red';
      emailValidation.innerHTML = "Please enter a valid email address"
    } else {
      //if they input something, removes the modal
      popup.style.display = 'none'
    }
  }
  //modal load delay
},3000)

  return (
    <section id="modal" class="hidden">
    <div class="modal-overlay"></div>
      <div class="container modal-container">
        <div class="modal-body">
          <div class="modal-img"></div>
          <h1 class="modal-title">Receive 25% off!</h1>
          <h5 class="modal-description">Receive free coupons for our delicious resturaunt daily, when you surrender your email address below!</h5>
          <form id="email-form">
          <h5 class="email-validation"></h5>
          <input type="text" class="address-input" id="email" action="mailto:" placeholder="Email Address"></input>
          <input type="submit" id="modal-submit">Submit</input>
          </form>
          <a><i id="close-modal" class="fas fa-times"></i></a>
        </div>
      </div>
    </section>
  )

}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
