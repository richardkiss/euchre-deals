/*
0: A
1: 2
2: 3
.
9: 10
10: J
11: Q
12: K
*/

function Hand(cards) {
    this.cards = [];
    this.suit_counts = new Uint8Array(4);
    this.index_counts = new Uint8Array(13);
    this.card_counts = new Uint8Array(52);
    this.add_cards(cards);
}

Hand.prototype.add_cards = function (cards) {
    var c, i;
    for (i=0; i<cards.length; i++) {
        c = cards[i];
        this.cards.push(c);
        this.card_counts[c]++;
        this.index_counts[c % 13]++;
        this.suit_counts[Math.floor(c/13)]++;
    }
}

Hand.prototype.pop_card = function () {
    var c = this.cards.pop();
    this.card_counts[c]--;
    this.index_counts[c % 13]--;
    this.suit_counts[Math.floor(c/13)]--;
}

Hand.prototype.sort = function () {
    this.cards.sort()
}

function card_to_text(card) {
    var idx = card % 13;
    var suit = Math.floor(card/13);
    return ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"][idx] + "SDHC".substr(suit, 1);
}

function hand_to_text(hand) {
    return hand.cards.map(card_to_text).join(" ");
}
