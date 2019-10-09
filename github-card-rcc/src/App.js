import React from "react";
import axios from "axios";
import "./App.css";

import Card from "./components/Card";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubHandle: "derrick-mei",
      userObj: {},
      followers: []
    };
  }

  getData() {
    let urlArray = [
      `https://api.github.com/users/${this.state.githubHandle}`,
      `https://api.github.com/users/${this.state.githubHandle}/followers`
    ];
    // Promise.all() takes in an array of promises and outputs an array of the returned promises
    Promise.all(
      urlArray.map(url =>
        // Example of using Javascript fetch api <- from Vlad
        // fetch(url)
        // .then(response => response.json()) // response is another promise that can be resolved with .json()
        //   .catch(err => console.error("Request failed", err))

        // example of using axios api
        axios
          .get(url)
          .then(res => res.data)
          .catch(err => console.log("error: ", err))
      )
    ).then(dataArray => {
      console.log(dataArray);
      this.setState(
        {
          userObj: dataArray[0],
          followers: dataArray[1]
        },
        () => console.log("state: ", this.state)
      );
    });
  }

  componentDidMount() {
    this.getData();
    console.log("CDM");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.githubHandle !== this.state.githubHandle) {
      this.getData();
      console.log("CDUP");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div className="App">
        <Card userObj={this.state.userObj} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
