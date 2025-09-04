// By class-based component

import React from "react";

// never compare life cycle of class based components with functional components


class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        avatar_url: "Loading....",
      },
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.github.com/users/Mudasra");
      const data = await response.json();

      console.log(data);


      this.setState({
        userInfo: {
          name: data.name || "No name",
          location: data.location || "Pakistan", 
          avatar_url: data.avatar_url,
        },
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  render() {
    const { name, location , avatar_url } = this.state.userInfo;

    return (
      <div className="git-card">
        <img className="git-img w-[180px] rounded-sm" src={avatar_url}/>
        <h2 className="font-bold text-gray-600">Name: {name}</h2>
        <h3 className="subtext text-gray-500">Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
