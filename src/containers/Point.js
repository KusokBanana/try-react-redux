import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Point from "../components/Point";
import { getSkills, makeGetSkills, getPoint } from "../selectors";
import { creator } from "../actions/points";

const makeMapStateToProps = () => {
  const getSkillsMaker = makeGetSkills();
  const mapStateToProps = (state, props) => {
    return {
      data: getPoint(state, props.id),
      skills: getSkillsMaker(state, props.id)
    };
  };
  return mapStateToProps;
};

const mapStateToProps = (state, props) => {
  return {
    data: state.points.filter(point => point.id === props.id)[0],
    skills: getSkills(state, props.id)
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(creator, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Point);
