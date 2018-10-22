import {h, app} from 'hyperapp'
import { globalState } from '../state/globalState';

export default function SpecialMenu({state, actions}) {

//Cards flip on click
const clickFlip = function(){
  const card = document.querySelectorAll('.card');
  //For each card
  for (var i = 0; i < card.length; i++) {
      //toggle the class "Flipped" on the selected card
      this.classList.toggle('flipped');
    };
  }

  return (
    <section class="specialMenu">
    <div class="container">
    <div class="row">
    <div class="special-top">
      <h5 class="special-head">SPECIAL MENU</h5>
      <h1 class="special-title">Delicious Flavour Of Spice</h1>
    </div>
    <div class="container card-grid">
  {/* <div class="col-md-4"> */}
  <div class="card" onclick={clickFlip}>
    <div class="side"><img id='card1'/>
    <div class="light-circle"></div>
    <div class="special-price">$32</div> 
    </div>
       <div class="container card-container">
        <p class="special-menu-title">Grilled NY Strip</p>
        <p class="special-menu-description">A fresh, barely 9oz NY Strip, served with half an asparagus and 1/16 of a potato.</p>
    </div>
    <div class="side back">
    <div class="side"><img id='card2'/>
    <div class="light-circle"></div>
    <div class="special-price-back">$52</div> 
    </div>
       <div class="container card-container">
        <p class="special-menu-title-back">Charbroiled T-Bone</p>
        <p class="special-menu-description-back">An over-charred T-Bone with dry leaves from a nearby tree sprinkled on top.</p>
    </div>
    </div>
  </div>
{/* </div> */}

{/* <div class="col-md-4"> */}
  <div class="card" onclick={clickFlip}>
    <div class="side"><img id='card3'/>
    <div class="light-circle"></div>
    <div class="special-price">$72</div> 
    </div>
       <div class="container card-container">
        <p class="special-menu-title">Steamed Ribeye</p>
        <p class="special-menu-description">A delicious 16oz Rib eye, dowsed in seasonings, you will need water.</p>
    </div>
    <div class="side back">
    <div class="side"><img id='card4'/>
    <div class="light-circle"></div>
    <div class="special-price">$47</div> 
    </div>
       <div class="container card-container">
        <p class="special-menu-title">Porterhouse</p>
        <p class="special-menu-description">A juicy 14oz Porterhouse, by far one of our most popular steaks available.</p>
    </div>
    </div>
  </div>
{/* </div> */}

{/* <div class="col-md-4"> */}
  <div class="card" onclick={clickFlip}>
    <div class="side"><img id='card5'/>
    <div class="light-circle"></div>
    <div class="special-price">$92</div> 
    </div>
       <div class="container card-container">
        <p class="special-menu-title">Top Sirloin</p>
        <p class="special-menu-description">A delicious 24oz Top Sirloin, this thing is juicy! Comes as is, no special orders.</p>
    </div>
    
    <div class="side back">
    <div class="side"><img id='card6'/>
    <div class="light-circle"></div>
    <div class="special-price">$47</div> 
    </div>
       <div class="container card-container">
        <p class="special-menu-title">Filet Mignon</p>
        <p class="special-menu-description">10oz A well seasoned and month long aged cut that might just bring you back tomorrow</p>
    </div>
    </div>
    </div>
    <div class="menuCard">
    <a class="view-menu openMenu menuCard-text" href="#menu">VIEW<br/>OUR<br/>FULL<br/> MENU</a>
  </div>
  {/* </div> */}
</div>
      </div>
      <a class="view-menu openMenu menuCard-small" href="#menu">VIEW FULL MENU</a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
