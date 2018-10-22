
const companyInfo = {
  title: 'Over-Seasoned Steakhouse',
  phone: '(206)-643-0185',
  location: 'Granger, ', 
  state: 'Texas',
  directions: '901 Co Rd 336, In the basement, ',
  zip: 'TX 76530',
  email: 'seasoned@overseasoned.com',
}

const specialMenu = [
  {
    image: 'card1',
    title: 'Grilled NY Strip',
    description: 'A fresh, barely 9oz NY Strip, served with half an asparagus and 1/16 of a potato.',
    price: '$32',
  },
  {
    image: 'card2',
    title: 'Charbroiled T-Bone',
    description: 'An over-charred T-Bone with dry leaves from a nearby tree sprinkled on top.',
    price: '$52',
  },
  {
    image: 'card3',
    title: 'Steamed Ribeye',
    description: 'A delicious 16oz Ribeye, dowsed in seasonsings, you will need water.',
    price: '$72',
  },
  {
    image: 'card4',
    title: 'Porterhouse',
    description: 'A juicy 14oz Porterhouse, by far one of our most popular steaks available.',
    price: '$47',
  },
  {
    image: 'card5',
    title: 'Top Sirloin',
    description: 'A delicious 24oz Top Sirloin, this thing is juicy! Comes as is, no special orders.',
    price: '$92',
  }
]

const quotes = [
  {
    quote: 'I Love Cooking A Big Steak\, For Myself and For My Cat.',
    author:'- Tommy Tammisimo -',
    authorInfo: 'The lonely head chef ',
    authorInfo2: '- Over-Seasoned Steakhouse '
  },
  {
    quote: 'Could these steaks BE anymore seasoned!?',
    author:'- Chandler Bing -',
    authorInfo: 'Overactor ',
    authorInfo2: '- Can\'t smile'
  },
  {
    quote: 'I don\'t eat any form of meat\,\ so this place is terrible!',
    author:'- Shilo -',
    authorInfo: 'Vegan ',
    authorInfo2: '- Our Lady Health '
  },
  {
    quote: 'Being vegetarian is a big missed steak',
    author:'- Random meat fan -',
    authorInfo: 'Dude, Bro',
    authorInfo2: '- Best if you don\'t talk to him '
  },
  {
    quote: 'If you\'re not supposed to eat cows, why are they made of food?',
    author:'- Homer Simpson -',
    authorInfo: 'Dad',
    authorInfo2: '- Springfield '
  },
  {
    quote: 'My family\'s always been in meat.',
    author:'- Drayton Sawyer-',
    authorInfo: 'Chili master',
    authorInfo2: '- Resturaunt Owner'
  },
]


const reviews = [
  {
    title: '"Way too many spices, I threw up!"',
    review: 'There was so much damn pepper on my steak that it was actually spicy! My fiance and I didn\'t finish our meals and the amount of "side" you get with your meal is laughable... We were still hungry after, so we went to McDonalds. Terrible honeymoon dinner.',
    author: 'Jack Torrance -',
    author2: 'Overlook Hotel employee'
  },
  {
    title: '"A real treat in the form of a steak house"',
    review: 'To say I know the secret of the steak would be ruin half of my enjoyment in coming here... I enjoy watching the fellow guests enjoy their new found delicacy, these steaks are truly one of a kind and you won\'t find them anywhere else.',
    author: 'Hannibal Lecter -', 
    author2: 'Enjoy!'
  },
  {
    title: '"One Groovy place, with terrible steaks"',
    review: 'I gotta tell you, This place serves some of the best drinks I have ever had... But, the steak tastes like cigarette spit.',
    author: 'Ash Williams - Demon slayer',
    author2: 'S-Mart'
  },
]

// let mathVar = 0;

// function test(){
//    mathVar = (Math.floor(Math.random() * 6) + 0 ) 
//   return mathVar
  
// };

// let test2 = setInterval(function(){
//   console.log(test())
// },1000);

export let globalState = {
  count: 0,
  companyInfo,
  specialMenu,
  quotes,
  reviews,
  setReview: {
    currentReview: 0,
  },
  setQuote: {
    currentQuote: (Math.floor(Math.random() * 6)),
  }
}