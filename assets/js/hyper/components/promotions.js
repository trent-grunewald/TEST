import {h, app} from 'hyperapp'

export default function Promotions({state, actions}) {
  return (
    <section class="promotions" id="promotions">
      <div class="container promotion-container">
        <h5 class="promotions-head">JOIN US</h5>
        <h1 class="promotions-title">NEWS & PROMOTIONS</h1>
        <div class="container grid-container">
          <div id="grid-item1"></div>
          <div id="grid-item2">
            <h5 class="grid-item-title">Learn how to chop a steak!</h5>
            <h5 class="grid-item-seperator">-------</h5>
            <h5 class="grid-item-desc">Camp Crystal Lake, Cunningham, New Jersey</h5>
            <h5 class="grid-item-desc">10:00AM - 11:30PM</h5>
            <h5 class="grid-item-desc">Friday, June 13, 1979</h5>
          </div>
          <div id="grid-item3"></div>  
          <div id="grid-item4">
          <h5 class="grid-item-title">Over searing is a myth!</h5>
          <h5 class="grid-item-seperator">-------</h5>
            <h5 class="grid-item-desc">1428 Elm Street, Springwood, Ohio</h5>
            <h5 class="grid-item-desc">10:00PM - 7:00AM</h5>
            <h5 class="grid-item-desc">Friday, November 9, 1984</h5>
          </div>
          <div id="grid-item5"></div>
          <div id="grid-item6">
          <h5 class="grid-item-title">Steak carving classes!</h5>
          <h5 class="grid-item-seperator">-------</h5>
            <h5 class="grid-item-desc">24 N 6th ave, Haddonfield, Illinois</h5>
            <h5 class="grid-item-desc">8:00PM - 5:30AM</h5>
            <h5 class="grid-item-desc">Tuesday, October 31, 1978</h5>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
