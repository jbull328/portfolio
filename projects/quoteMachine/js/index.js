var quotes = [{
    quote: "Keep Your face to the sun and you cannot see a shadow.",
    author: "Hellen Keller",
    category: "Insperation"
  }, {
    quote: "Positive anything is better than negative anything." ,
    author: "Elbert Hubbard",
    category: "Insperation"
  },  {
    quote: "Once you replace negative thaughts with positive ones, You'll have postive results.",
    author: "Willi Nelson",
    category: "Insperation"
  },  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Dennis P. Kimbro",
    category: "Insperation"
  },  {
    quote: "Where a calculator like the ENIAC today is equipped with 18,000 vacuum tubes and weighs 30 tons, computers in the future may have only 1,000 vacuum tubes and perhaps weigh only 1½ tons.",
    author: "Andrew Hamilton",
    category: "Computers"
  }, {
    quote: "Nature hides her secret because of her essential loftiness, but not by means of ruse." ,
    author: "Albert Einstien",
    category: "Nature"
  }, {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
    category: "Insperation"
  }, {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
    category: "Insperation"
  }, {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    category: "Insperation"
  }, {
    quote: "Expect problems and eat them for breakfast.",
    author: "Alfred A. Montapert",
    category: "Insperation"
  }, {
    quote: "A good head and a good heart are always a formidable combination." ,
    author: "Nelson Mandela",
    category: "Insperation"
  }, {
    quote: "Everything that irritates us about others can lead us to an understanding of ourselves.",
    author: "Carl Jung",
    category: "Insperation"
  }, {
    quote: "Computers themselves, and software yet to be developed, will revolutionize the way we learn",
    author: "Steve Jobs",
    category: "Computers"
  }, {
    quote: "The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.",
    author: "Ted Neslon",
    category: "Computers"
  }, {
    quote: "Look deep into nature, and then you will understand everything better.",
    author: "Albert Einstien",
    category: "Nature"
  }, {
    quote: "Green is the prime color of the world, and that from which its loveliness arises.",
    author: "Pedro Calderon",
    category: "Nature"
  }, {
    quote: "Nature always wears the colors of the spirit.",
    author: "Ralph Waldo Emerson",
    category: "Nature"
  }, {
    quote: "The clearest way into the Universe is through a forest wilderness.",
    author: "John Muir",
    category: "Nature"
  }, {
    quote: "Spring is nature's way of saying, 'Let's party!'",
    author: "Robin Willaims",
    category: "Nature"
  }, {
    quote: "People may hear your words, but they feel your attitude.",
    author: "John Maxwell",
    category: "Attitude"
  }, {
    quote: "Attitude is a little thing that makes a big difference.",
    author: "Winston Churchill",
    category: "Attitude"
  }, {
    quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    author: "Plato",
    category: "Attitude"
  }, {
    quote: "We are afraid of the enormity of the possible.",
    author: "Emile M. Cioran",
    category: "Attitude"
  }, {
    quote: "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
    author: "Scott Adams",
    category: "Creativity"
  }, {
    quote: "If art is to nourish the roots of our culture, society must set the artist free to follow his vision wherever it takes him.",
    author: "John F. Kennedy",
    category: "Creativity"
  }, {
    quote: "To create one's world in any of the arts takes courage.",
    author: "Georgia O'Keeffe",
    category: "Creativity"
  }, {
    quote: "We have art in order not to die of the truth.",
    author: "Friedrich Nietzsche",
    category: "Creativity"
  }, {
    quote: "The world's most famous and popular language is music.",
    author: "Psy",
    category: "Creativity"
  }       

];

//array of fonts for random font-family effect.
var fonts = ["'Poiret One'", "'Cabin Condensed', sans-serif", "'Quicksand', sans-serif",
  "'Ubuntu', sans-seri", "'Lobster', cursive", "'Fredoka One', cursive", "'Racing Sans One', cursive", "'Days One', sans-serif", "'Fjalla One', sans-serif", "'Pacifico', cursive", "'Dancing Script', cursive", "'Patua One', cursive", "'Righteous', cursive", "'Rock Salt', cursive", "'Special Elite', cursive", "'Julius Sans One', sans-serif", "'Black Ops One', cursive", "'Capriola', sans-serif"
];

$(document).ready(function() {
  $("#quote").html( '"' + quotes[0].quote  + '"');
  $("#author").html(quotes[0].author);

  //random math function
  $(".submit").click(function() {
    var quoteRandom = quotes[Math.floor(Math.random() * quotes.length)];
    var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    
    $("#quote").html( '"' + quoteRandom.quote + '"');
    $("#quote").css("font-family", randomFont);
    $("#author").html( quoteRandom.author);
  })
})