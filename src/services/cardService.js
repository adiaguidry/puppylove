import cuddle from "../images/cuddle.jpg";
import spots from "../images/spots.jpg";
import pup from "../images/waterpup.jpg";
import cuddleL from "../images/cuddleL.jpg";
import spotsL from "../images/spotsL.jpg";
import pupL from "../images/waterpupL.jpg";

export const cards = [
  {
    _id: "1234",
    image: spots,
    imageLandscape: spotsL,
    title: "Spots is Waiting",
    text: "Our friend Spots is ready for a loving home."
  },
  {
    _id: "2345",
    image: cuddle,
    imageLandscape: cuddleL,
    title: "A good cuddle",
    text:
      "Who doesnt love a good cuddle? Kate and hey puppy Fluf enjoy a cuddle."
  },
  {
    _id: "3456",
    image: pup,
    imageLandscape: pupL,
    title: "Water Pup",
    text: "Our friend Spots is ready for a loving home."
  }
];

export function getCards() {
  return cards;
}

export function getCard(id) {
  const card = cards.find(card => card._id === id);
  console.log(id);
  return card;
}
