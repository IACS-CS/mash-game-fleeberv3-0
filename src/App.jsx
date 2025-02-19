import { useState, useRef } from "react";
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
    "Punk",
    "Country",
    "Metal",
    "Pop",
    "White Girl Music",
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
   * @author R. Mamet
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

  const firstChildRef = useRef(null);
  /**
   * @author enostrain
   * @returns {void}
   */
  const handleClick = () => {
    if (name !== "") {
      console.log(categoryOut(name));
      setOutput(categoryOut(name));
      const firstChild = firstChildRef.current;
      if (!firstChild) return;

      firstChild.classList.add("animate");

      const handleAnimationEnd = () => {
        firstChild.classList.remove("animate");

        firstChild.removeEventListener("animationed", handleAnimationEnd);
      };
      firstChild.addEventListener("animationed", handleAnimationEnd);
    }
  };

  return (
    <main>
      <h1>
        {greeting()} {name}
      </h1>{" "}
      <input value={name} onChange={handleTextareaChange}></input>
      <input type="submit" onClick={handleClick}></input>
      <h2>Let me predict your *FUTURE*</h2>
      <ul id="first-child" ref={firstChildRef}>
        {output.map((b, index) => (
          <li key={index}>
            {index == 0
              ? "You will own a(n) "
              : index == 1
              ? "You will drive a(n) "
              : index == 2
              ? "You will enjoy eating "
              : index == 3
              ? "You will listen to this type of music: "
              : index == 4
              ? "Your favorite color will be "
              : "Your occupation will be a(n) "}
            {b}
          </li>
        ))}
      </ul>
      <br />
      <br />
      <p>
        Find my code{" "}
        <a
          href="https://github.com/IACS-CS/mash-game-fleeberv3-0"
          style={{ color: "#cfcfcf" }}
        >
          on GitHub
        </a>
      </p>
    </main>
  );
};

export default App;
