import {h, app} from 'hyperapp'

export default function ourStory({state, actions}) {
  // const test = document.querySelector('#reservations').classList.remove('hidden');
  // const reservation = document.getElementById('reservations')
  // reservation.style.display = 'unset'
  //  }
  return (
    <section class="ourStory" id="ourStory">
    <div class="container">
    <div class="row">
      <div class="col-md-6 story-body">
        <h5 class="story-head">OUR STORY</h5>
        <h2 class="storyTitle">Cooking Is The Art Of The Seasoning</h2>
        <p class="story">Each steak is seared to perfection, finished with a perfect amount of butter, freshly chopped parsley, pepper, garlic, garlic salt, garlic butter, onion powder, onion salt, pepper salt, chili powder, and 1/4 cup of our secret seasoning all served sizzling on a 500-degree plate.</p>
        <p class="story-quote"><strong>'Chop-Top' Sawyer</strong> <span class="quote2">- Master Seasoner at Over-Seasoned</span></p>
        <a class="story-button reservationRequest" href="#reservations" >Reservation</a>
        </div>
        <div class="col-md-6">
        <img src="http://www.justlookaround.nl/wordpress/wp-content/uploads/2016/06/Food-photography-Spareribs-Cookers-Just-Look-Around.jpg" class="story-img"/>
        {/* <img src="https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0155/9821/isometric_dots_shop_preview.png" class="story-img-background"/> */}
        </div>
      </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
