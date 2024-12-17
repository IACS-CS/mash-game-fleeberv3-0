const electronicDevice = [
  "Phone",
  "TV",
  "Nothing",
  "Watch",
  "Smart Fridge",
  "Laptop",
  "Gaming PC",
  "Gaming Chair with Speakers",
  "Time Machine",
  "Gameboy",
  "Radio",
  "Microphone",
  "Camera",
  "Headphones",
  "Vaccuum Cleaner",
  "Drone",
];
const vehicle = [
  "Cybertruck",
  "Tesla",
  "Horse + Cart",
  "Honda Accord 2009",
  "Wagon",
  "Bus",
  "Taxi",
  "Uber",
  "Lyft",
  "2001 Toyota Corrola",
  "Just a Horse",
  "Scooter",
  "Wheelchair",
  "Tricycle",
  "Tiny Clown Car",
  "Unicycle",
];
const food = [
  "E G G",
  "Egg",
  "Bacon",
  "Onion",
  "Cucumber",
  "Oat Meal",
  "Pepper",
  "Lasagna",
  "Mackerel",
  "Tomato",
  "Potato",
  "Celery",
  "Barly",
  "Wheat",
  "Breab",
  "Tree Bark",
];
const musicGenre = [
  "Hyperpop",
  "Micropop",
  "Rock",
  "Puck",
  "Country",
  "Metal",
  "Pop",
  "White Girl",
  "K-Pop",
  "Indie",
  "Instrumental",
  "Musical",
  "One song that repeats OVER AND OVER AGAIN",
  "Jazz",
  "Expiramental",
  "Rap",
];
const color = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Magenta",
  "Black",
  "White",
  "Pink",
  "Gold",
  "Neon Brown",
  "Silver",
  "Highlighter",
  "Gray",
  "Teal",
];
const occupation = [
  "Fast Food Employee",
  "Doctor",
  "Fashionista",
  "Teacher",
  "Unemployed",
  "Zookeeper",
  "Dentist",
  "Clown",
  "Fast Food Manager",
  "Developer",
  "Grave Keeper",
  "Janitor",
  "Youtuber",
  "Musician",
  "Social Worker",
  "Therapist",
];

const category = [
  electronicDevice,
  vehicle,
  food,
  musicGenre,
  color,
  occupation,
];

/**
 * @param {string} str
 * @return {string[]}
 */
const categoryOut = (str) => {
  str = str.toUpperCase();

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let output = [];
  for (let i = 0; i < 6; i++) {
    let index = i;
    if (str.length < 6) {
      index = i - str.length;
    }
    let out = alphabet.indexOf(str[index]);
    if ((out = -1)) {
      out = str.length - 1;
    }
    output.push(category[i][out]);
  }
  return output;
};

const Catergorys = () => {
  return categoryOut("luke").map((output) => <li>{output}</li>);
};

export default Catergorys;
