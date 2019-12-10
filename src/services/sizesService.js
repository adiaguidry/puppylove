export const dogs = [
  { _id: "5b21ca3eeb7f6fbccd471818", size: "Toy" },
  { _id: "5b21ca3eeb7f6fbccd471814", size: "Small - Medium" },
  { _id: "5b21ca3eeb7f6fbccd471820", size: "Large" }
];

export function getSizes() {
  return dogs.filter(s => s);
}
