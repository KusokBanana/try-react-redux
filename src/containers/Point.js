import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Point from "../components/Point";
import { getSkills, makeGetSkills } from "../selectors";
import { creator } from "../actions/points";

const makeMapStateToProps = () => {
  const getSkillsMaker = makeGetSkills();
  const mapStateToProps = (state, props) => {
    return {
      skills: getSkillsMaker(state, props)
    };
  };
  return mapStateToProps;
};

const mapStateToProps = (state, props) => {
  return {
    skills: getSkills(state, props)
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(creator, dispatch)
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Point);
