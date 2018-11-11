import { connect } from "react-redux";
import Main from "../components/Main";
import { getPoints } from "../selectors";

const mapStateToProps = state => {
  return {
    points: getPoints(state)
  };
};

export default connect(mapStateToProps)(Main);
