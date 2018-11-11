import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Skill from "../components/Skill";
import { creator } from "../actions/skills";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(creator, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Skill);
