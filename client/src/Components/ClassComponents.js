// By class based components

import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + " Child Constructor");
    this.state = {
       userInfo: {
        name: "Loading...",
        location: "Loading...",
      },
      // count: 0,
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " component Did Mount");

    // fetching api data
    const data = await fetch("https://api.github.com/users/Mudasra");
    const json = await data.json();

    console.log(json);

    this.setState( {
      userInfo : {
        name: json.name,
        location: json.location,
      }
    })


    
  }

  render() {
    {
      /* but this looks ugly... right? like this.props again n again */
    }
    {
      /* so we'll do destructuring*/
    }
    // console.log(this.props.name + " Child Render");

    // const { location, email } = this.props;
    // const { count } = this.state;
    const {name , location} = this.state.userInfo
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3 className="subtext">location: Pakistan</h3>
      </div>
    );
  }
}
export default UserClass;
