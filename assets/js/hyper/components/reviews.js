import {h, app} from 'hyperapp'


export default function Reviews({state, actions}) {
  let currentReview =_=>{
    return (
      <div class="review-body">
          <h5 class="review-quote">{state.globalState.reviews[state.globalState.setReview.currentReview].title}</h5>
          <p class="review-quote-body">{state.globalState.reviews[state.globalState.setReview.currentReview].review}</p>
          <h5 class="reviewer">{state.globalState.reviews[state.globalState.setReview.currentReview].author} <span class="quote2">{state.globalState.reviews[state.globalState.setReview.currentReview].author2}</span></h5>
      </div>
    )
  }

  
  const leftArrow = function() {
    if(state.globalState.setReview.currentReview !== 0) {
      actions.previousReview()
    }
  }

  // setInterval(leftArrow,2000);

  const rightArrow = function(){
    if(state.globalState.setReview.currentReview !== (state.globalState.reviews.length - 1)) {
      actions.nextReview()
    }
  }

  return (
    <section class="review">
      <div class="container">
       <div class="col-md-6 chef"></div>
       <div class="col-md-6 review-body">
        <h5 class="review-head">REVIEW</h5>
        <h1 class="review-title">What Everybody Say's About Us</h1>
          {currentReview()}
        <div class="arrows">
          <i onclick={leftArrow} class={`fa fa-arrow-left ${(state.globalState.setReview.currentReview > 0) ? 'ready' : ''}`} aria-hidden="true"></i>
         <i onclick= {rightArrow} class={`fa fa-arrow-right ${(state.globalState.setReview.currentReview === (state.globalState.reviews.length - 1)) ? '' : 'ready'}`}  aria-hidden="true"></i></div>
       </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
