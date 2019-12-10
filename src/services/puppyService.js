import * as sizeAPI from "./sizesService";

const puppies = [
  {
    _id: "5b21ca3eeb7f6fbccd471",
    breed: "Weimariner",
    name: "Miles",
    age: "2 years",
    dog: { _id: "5b21ca3eeb7f6fbccd471820", size: "Large" },
    numberInStock: 6,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    breed: "Vizla",
    name: "Cooper",
    age: "1 year",
    dog: { _id: "5b21ca3eeb7f6fbccd471820", size: "Large" },
    numberInStock: 6,
    dailyRentalRate: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    breed: "Boxer",
    name: "Nora",
    age: "12 weeks",
    dog: { _id: "5b21ca3eeb7f6fbccd471818", size: "Toy" },
    numberInStock: 6,
    dailyRentalRate: 5.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181512",
    breed: "Golden",
    name: "Red Lady",
    age: "2 years",
    dog: { _id: "5b21ca3eeb7f6fbccd471814", size: "Small - Medium" },
    numberInStock: 6,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181634",
    breed: "Lab",
    name: "Lucky",
    age: "1 year",
    dog: { _id: "5b21ca3eeb7f6fbccd471820", size: "Large" },
    numberInStock: 6,
    dailyRentalRate: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e56",
    breed: "German Sheperd",
    name: "Bert",
    age: "12 weeks",
    dog: { _id: "5b21ca3eeb7f6fbccd471820", size: "Large" },
    numberInStock: 6,
    dailyRentalRate: 5.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181578",
    breed: "Dalmation",
    name: "Spots",
    age: "2 years",
    dog: { _id: "5b21ca3eeb7f6fbccd471814", size: "Small - Medium" },
    numberInStock: 6,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181690",
    breed: "Poodle",
    name: "Fancy Pants",
    age: "1 year",
    dog: { _id: "5b21ca3eeb7f6fbccd471818", size: "Toy" },
    numberInStock: 6,
    dailyRentalRate: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e09",
    breed: "Sheep Dog",
    name: "Hairy",
    age: "12 weeks",
    dog: { _id: "5b21ca3eeb7f6fbccd471818", size: "Toy" },
    numberInStock: 6,
    dailyRentalRate: 5.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e0955",
    breed: "Chihuahua",
    name: "Tiny",
    age: "12 weeks",
    dog: { _id: "5b21ca3eeb7f6fbccd471818", size: "Toy" },
    numberInStock: 3,
    dailyRentalRate: 5.5
  }
];

export function getPuppies() {
  return puppies;
}

export function getPuppy(id) {
  return puppies.find(p => p._id === id);
}

export function savePuppy(puppy) {
  let puppyInDb = puppies.find(p => p._id === puppy._id) || {};
  puppyInDb.breed = puppy.breed;
  puppyInDb.name = puppy.name;
  puppyInDb.age = puppy.age;
  puppyInDb.dog = sizeAPI.dogs.find(s => s._id === puppy.sizeId);
  puppyInDb.numberInStock = puppy.numberInStock;
  puppyInDb.dailyRentalRate = puppy.dailyRentalRate;

  if (!puppyInDb._id) {
    puppyInDb._id = Date.now().toString();
    puppies.push(puppyInDb);
  }

  return puppyInDb;
}

export function deletePuppy(id) {
  let puppyInDb = puppies.filter(p => p._id !== id);
  return puppyInDb;
}
