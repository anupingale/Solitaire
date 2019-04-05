class Pile {
  constructor() {
    this.accessibleCards = [];
    this.restrictedCards = [];
  }
  addRestrictedCards(cards) {
    this.restrictedCards = this.restrictedCards.concat(cards);
  }
  addAccessibleCard(card) {
    this.accessibleCards.push(card[0]);
  }
  addRestrictedCard(card) {
    this.restrictedCards.push(card);
  }
  getRestrictedCards() {
    return this.restrictedCards;
  }
  getAccessibleCards() {
    return this.accessibleCards;
  }

  moveCardToDeck() {
    if (this.accessibleCards.length === 1) {
      this.accessibleCards.pop();
      this.accessibleCards.push(this.restrictedCards.pop());
      return;
    }
    if (this.accessibleCards.length > 1) {
      this.accessibleCards.pop();
    }
  }

  isAbleToDrop(card) {
    const length = this.accessibleCards.length - 1;
    if (
      this.accessibleCards[length].sequenceNumber - 1 === card.sequenceNumber &&
      this.accessibleCards[length].colour !== card.colour
    ) {
      this.accessibleCards.push(card);
      return true;
    }
    return false;
  }
}

export default Pile;
