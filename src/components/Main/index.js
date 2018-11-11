import React, { Component } from "react";
import PropTypes from "prop-types";
import Point from "../../containers/Point";

class Main extends Component {
  static propTypes = {
    points: PropTypes.array.isRequired,
    skills: PropTypes.array.isRequired
  };

  render() {
    return (
      <>
        <p>Count: {this.props.points.length}</p>
        <section>
          {this.props.points.map(point => (
            <Point id={point.id} key={point.id} />
          ))}
        </section>
      </>
    );
  }
}

export default Main;
