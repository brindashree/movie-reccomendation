import React, { useState } from "react";
import "./styles.css";

const movies = {
  Action: [
    {
      name: "The Dark Knight",
      year: "2008",
      rating: "9"
    },
    {
      name: "The Lord of the Rings: The Return of the King",
      year: "2003",
      rating: "8.9"
    },
    {
      name: "The Mountain II ",
      year: "2016",
      rating: "8.8"
    },
    {
      name: "Inception",
      year: "2010",
      rating: "8.8"
    },
    {
      name: "The Lord of the Rings: The Fellowship of the Ring",
      year: "2001",
      rating: "8.8"
    }
  ],
  Adventure: [
    {
      name: "Interstellar",
      year: "2014",
      rating: "8.6"
    },
    {
      name: "Spirited Away",
      year: "2001",
      rating: "8.6"
    },
    {
      name: "The Lion King ",
      year: "1994",
      rating: "8.5"
    },
    {
      name: "Back to the Future",
      year: "1985",
      rating: "8.5"
    },
    {
      name: "Spider-Man: Into the Spider-Verse",
      year: "2018",
      rating: "8.4"
    }
  ],
  Sci_Fi: [
    {
      name: "Inception",
      year: "2010",
      rating: "8.8"
    },
    {
      name: "The Matrix ",
      year: "1999",
      rating: "8.7"
    },
    {
      name: "Star Wars: Episode V - The Empire Strikes Back",
      year: "1980",
      rating: "8.7"
    },
    {
      name: "Interstellar",
      year: "2014",
      rating: "8.6"
    },
    {
      name: "Star Wars: Episode IV - A New Hope",
      year: "1977",
      rating: "8.6"
    }
  ],

  Oscars: [
    {
      name: "Parasite",
      year: "2020",
      rating: "8.6"
    },
    {
      name: "Green Book",
      year: "2019",
      rating: "8.2"
    },
    {
      name: "The Shape of Water",
      year: "2018",
      rating: "7.3"
    },
    {
      name: "Moonlight",
      year: "2017",
      rating: "7.4"
    },
    {
      name: "Spotlight",
      year: "2016",
      rating: "8.1"
    }
  ]
};
var array = Object.keys(movies);
export default function App() {
  var [out, setgenre] = useState("Action");

  return (
    <div className="App">
      <h1>Top Movies</h1>
      <center>
        <p> Click the genre to view the top 5 movies</p>
      </center>
      <div className="section">
        <div className="container">
          {array.map((genre) => (
            <strong>
              <li
                className="list-non-bullet list-item-inline"
                style={{ cursor: "pointer" }}
                onClick={() => setgenre(genre)}
              >
                {genre}
              </li>
            </strong>
          ))}
        </div>
      </div>

      <h2 id="head">{out}</h2>

      <div>
        {Object.keys(movies[out]).map((id) => (
          <ul id="movie">
            <li className="list-non-bullet" id="name">
              {movies[out][id].name}
            </li>
            <li className="list-non-bullet" id="year">
              {movies[out][id].year}
            </li>
            <li className="list-non-bullet" id="rating">
              <span id="star">⭐</span>
              {movies[out][id].rating}
            </li>
          </ul>
        ))}
      </div>
      <div id="footer">By Brindashree C B</div>
    </div>
  );
}
