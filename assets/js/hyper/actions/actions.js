
const nextReview = function (state, actions) {
  return (
    {
      setReview: {
      currentReview: state.globalState.setReview.currentReview ++ 
     }
    }
  )
}

const previousReview = function (state, actions) {
  return (
    {
      setReview: {
      currentReview: state.globalState.setReview.currentReview -- 
     }
    }
  )
}

export const actions = {
  nextReview,
  previousReview,
}


