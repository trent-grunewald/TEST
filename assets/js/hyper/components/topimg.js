import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section class="topImg" id="topImg">
     <div class="img-cover"></div>
      <div class="container">
        <div class="intro">
          <h5 class="welcome">WELCOME TO</h5>
          <h1 class="title">Over-Seasoned</h1>
          <h2 class= "below">Steak House</h2>
        </div>
        <div class="contact-info">
            <p class="small-text">Call for seating</p>
            <h4 class="phone">(206)-643-0185</h4>
            <p class="hours"><strong>Operating hours:</strong> 4pm-9pm, <strong>Weekends:</strong> 3pm - 10pm</p>
        </div>
        <div class="bowl"></div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
