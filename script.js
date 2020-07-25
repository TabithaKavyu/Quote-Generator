let quotes = [
  "Life isn’t about getting and having, it’s about giving and being. - Kevin Kruse",

  "Whatever the mind of man can conceive and believe, it can achieve. - Napoleon Hill",

  "Strive not to be a success, but rather to be of value. - Albert Einstein",

  "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. - Robert Frost",

  "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",

  "You miss 100% of the shots you don’t take. - Wayne Gretzky",

  "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. - Michael Jordan",

  "The most difficult thing is the decision to act, the rest is merely tenacity.- Amelia Earhart",

  "Every strike brings me closer to the next home run. - Babe Ruth",

  "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. - Mark Twain",
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("text").innerHTML = quotes[randomNumber];
}

if (inIframe()) {
  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );

  $("#tumblr-quote").attr(
    "href",
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
      encodeURIComponent(currentAuthor) +
      "&content=" +
      encodeURIComponent(currentQuote) +
      "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
  );
}

$(document).ready(function () {
  $("#tweet-quote").on("click", function () {
    if (!inIframe()) {
      openURL(
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
          encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
      );
    }
  });

  $("#tumblr-quote").on("click", function () {
    if (!inIframe()) {
      openURL(
        "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
          encodeURIComponent(currentAuthor) +
          "&content=" +
          encodeURIComponent(currentQuote) +
          "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
      );
    }
  });
});
