import React, { Component } from "react";
import Skill from "../containers/Skill";

class Point extends Component {
  render() {
    const { data, skills } = this.props;
    debugger;
    const { deletePoint, completePoint } = this.props.actions;
    return (
      <>
        <div>
          {this.getItem(data)}{" "}
          <button onClick={() => deletePoint(data.id)}>Remove</button>
          <button onClick={() => completePoint(data.id)}>
            {data.completed ? "Uncomplete" : "Complete"}
          </button>
          <input type="text" placeholder="Type child name" />
          <button>Add child</button>
          <ul>{this.getChilds(skills)}</ul>
        </div>
      </>
    );
  }

  getItem(point) {
    const name = "Some text " + point.name;
    const item = point.completed ? <del>{name}</del> : name;

    return (
      <>
        <span>{item}</span>
      </>
    );
  }

  getChilds(skills) {
    return skills.map(skill => <Skill data={skill} />);
  }
}

export default Point;
