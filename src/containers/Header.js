import { connect } from "react-redux";
import Header from "../components/Header";
import { creator } from "../actions/points";

const addPoint = creator.addPoint;

export default connect(
  null,
  { addPoint }
)(Header);
