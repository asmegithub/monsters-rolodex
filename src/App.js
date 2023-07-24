/** @format */

import React, { Component } from "react";
import { CardList } from "./components/card-list/Card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "1",
          email: "fran@gemail.com",
        },
        {
          name: "Dracula",
          id: "2",
          email: "drac@gemail.com",
        },
        {
          name: "Zombie",
          id: "3",
          email: "zomb@gemail.com",
        },
        {
          name: "Enstain",
          id: "4",
          email: "enst@gemail.com",
        },
        {
          name: "Holywod",
          id: "5",
          email: "holy@gemail.com",
        },
        {
          name: "Lorem ipsum",
          id: "6",
          email: "lorem1@gemail.com",
        },
        {
          name: "Lorem ipsum",
          id: "7",
          email: "lorem2@gemail.com",
        },
        {
          name: "Lorem ipsum",
          id: "8",
          email: "lorem3@gemail.com",
        },
        {
          name: "Lorem ipsum",
          id: "9",
          email: "lorem4@gemail.com",
        },
      ],
      searchField: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          onChangeHandler={this.handleChange}
        />

        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
