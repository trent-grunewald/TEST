import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <section class="footer">
    <div class="container">
      <a href="#header" class="footer-logo"></a>
      <a href="#menu" class="footer-item openMenu">Menu</a>
      <a href="#contact" class="footer-item">Locations</a>
      <a href="#reservations" class="footer-item reservationRequest">Reservations <i class="fa fa-angle-right"></i></a>
      <div class="footer-logo-social">
        <a class="twitter"><i class="fab fa-twitter"></i></a>
        <a class="facebook"><i class="fab fa-facebook-f"></i></a>
        <a class="google+"><i class="fab fa-google-plus-g"></i></a>
        <a class="instagram"><i class="fab fa-instagram"></i></a>
      </div>
      <div class="copyright">Trent Grunewald 10/8/2018 <i class="far fa-copyright"></i></div>
      <span class="not">Not actually copyrighted</span>
    </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
