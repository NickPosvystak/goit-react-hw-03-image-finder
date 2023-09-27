import { Component } from "react";


export class Searchbar extends Component {

  onSubmitHandler = event => {
    event.preventDefault();
    console.log(event.target.name.value);
  };
  render() {
    return (
      <header class="searchbar">
        <form onSubmit={this.onSubmitHandler} class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}