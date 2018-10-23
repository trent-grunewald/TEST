import {h, app} from 'hyperapp'

export default function Contact({state, actions}) {
  
  return (
    <section class="contact" id="contact">
      <div class="container contact-container">
       <h5 class="contact-head">CONTACT US</h5>
       <h1 class="contact-title">COME ENJOY OUR MEAT!</h1>
        <div class="container contact-box">
          <div class="col-md-6">
            <h5 class="contact-location">Granger, <span>Texas</span></h5>
            <h5 class="contact-address">901 Co Rd 336, In the basement,<br></br> Granger, TX 76530</h5>
            <h5 class="contact-email">Email: <span>seasoned@overseasoned.com</span></h5>
            <h1 class="contact-underline">       </h1>
          </div>
          <div class="col-md-6">
            <h5 class="contact-call">Call for reservations:</h5>
            <h1 class="contact-number">(206)-643-0185</h1>
            <h5 class="contact-hours-title">Weekday Hours:</h5>
            <h5 class="contact-street">from 4pm-9pm<br></br>Call for reservations</h5>
            <h5 class="contact-hours-title">Weekend Hours:</h5>
            <h5 class="contact-street">from 3pm-10pm<br></br>Call for reservations</h5>
          </div>        
        </div>
        <div id="map">{setTimeout(mapBox,1)}</div>
      </div>
    </section>
  )
  function mapBox(){
    if (document.querySelector('#map').children.length > 0) return;
    // LEAFLET MAP
    const mymap = L.map('map').setView([30.6928582,-97.4577975], 7);
    const marker = L.marker([30.6928582,-97.4577975]).addTo(mymap);
    const marker2 = L.marker([30.6602051,-98.4371652]).addTo(mymap);
    const marker3 = L.marker([30.4062185,-97.5596615]).addTo(mymap);
    const marker4 = L.marker([30.8822347,-97.589399]).addTo(mymap);
    marker.bindPopup("<b>Just park out front,</b><br>we will come get you.").openPopup();
    marker2.bindPopup("<b>Come enjoy family dinner,</b><br>with us!").openPopup();
    marker3.bindPopup("<b>Come on in,</b><br>meet our family.").openPopup();
    marker4.bindPopup("<b>Try our Award winning,</b><br>chili, family recipe.").openPopup();

    const circle = L.circle([30.6928582,-97.4577975], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 10
  }).addTo(mymap);
  const circle2 = L.circle([30.6602051,-98.4371652], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 10
  }).addTo(mymap);
  const circle3 = L.circle([30.4062185,-97.5596615], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 10
  }).addTo(mymap);
  const circle4 = L.circle([30.8822347,-97.589399], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 10
  }).addTo(mymap);
    
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Our locations',
    maxZoom: 20,
    id: 'mapbox.streets',
    mapId: 'map',
    token:'pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g',
    accessToken: 'pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g'
  }).addTo(mymap);
  }
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>