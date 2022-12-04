function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function shuffle_deck() {
  var deck = [];
  var i;
  for (i=0; i<52; i++) {
		if ((i - 1) % 13 >= 7) {
			deck.push(i);
		}
  }
  shuffle(deck);
  return deck;
}

function show_hand(hand) {
  var i;
  for (i=0; i<hand.cards.length; i++) {
    var c = hand.cards[i];
    var t = card_to_text(c);
    document.getElementById("card_" + i).innerHTML = '<img src="./img/' + t + '.svg" class="crop" />';
  }
}

function redeal() {
	var deck = shuffle_deck();

  var upcard_text = card_to_text(deck[0]);
  document.getElementById("upcard").innerHTML = '<img src="./img/' + upcard_text + '.svg" class="crop" />';

	var hand = new Hand(deck.slice(1, 6));
	hand.sort();
	show_hand(hand);

}

redeal();
