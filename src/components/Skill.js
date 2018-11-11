import React, { Component } from "react";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.i = 0;
  }

  // shouldComponentUpdate(newProps) {
  //   console.log(newProps);
  //   return parent.shouldComponentUpdate(newProps);;
  // }

  render() {
    const { data } = this.props;
    const { completeSkill } = this.props.actions;
    debugger;
    return (
      <>
        <li>
          {this.getItem(data)}{" "}
          {/* <button onClick={() => deletePoint(data.id)}>Remove</button> */}
          <button onClick={() => completeSkill(data.id)}>
            {data.completed ? "Uncomplete" : "Complete"}
          </button>
        </li>
      </>
    );
  }

  getItem(skill) {
    const name = "Some skill " + skill.name;
    const item = skill.completed ? <del>{name}</del> : name;

    return (
      <>
        <span>
          {item} ({this.i++})
        </span>
      </>
    );
  }
}

export default Skill;
