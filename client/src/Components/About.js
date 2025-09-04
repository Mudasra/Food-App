import UserClass from "./ClassBasedUsers";
import UserFunction from "./FunctionalComponentUsers";
import { Component } from "react";


class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <UserFunction name={"Mudasra "} />
        <UserClass
          name={"first"}
          profession={"Developer"}
          email={"km4446245@gmail.com"}
          location={"Pakistan"}
        />
      </div>
    );
  }
}

export default About;





