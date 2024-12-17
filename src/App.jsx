import { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [output, setOutput] = useState([]);

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
    let r = str.length;
    let s = [];
    for (let i = 0; i < str.length; i++) {
      r ^= str[i].charCodeAt() + 0x9e3779b9 + (r << 6) + (r >> 2);
    }
    for (let i = 0; i < 6; i++) {
      s[i] = category[i][(r >> (i * 4)) & 0xf];
    }
    return s;
  };

  function handleTextareaChange(e) {
    setName(e.target.value);
  }

  const greeting = () => {
    if (Math.random() < 0.5) {
      return "Hello,";
    } else {
      return "Howdy,";
    }
  };

  const submitForm = () => {
    if (name !== "") {
      console.log(categoryOut(name));
      setOutput(categoryOut(name));
    }
  };

  return (
    <main>
      <h1>
        {greeting()} {name}
      </h1>{" "}
      <input value={name} onChange={handleTextareaChange}></input>
      <input type="submit" onClick={submitForm}></input>
      <ul>
        <ul>
          {output.map((b, index) => (
            <li key={index}>{b}</li>
          ))}
        </ul>
      </ul>
    </main>
  );
};

export default App;
