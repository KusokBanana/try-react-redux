import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Skill from "../components/Skill";
import { creator } from "../actions/skills";
import { makeGetSkill, getSkill } from "../selectors";

const mapStateToProps = (state, ownProps) => {
  const data = getSkill(state, ownProps.id);
  return {
    data
  };
};

const makeMapStateToProps = () => {
  const getSkillMaker = makeGetSkill();
  debugger;
  const mapStateToProps = (state, props) => {
    return {
      skills: getSkillMaker(state, props.data.id)
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(creator, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);
