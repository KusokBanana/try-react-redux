import * as types from "../constants/ActionTypes";
import { getSkills } from "../selectors";

const addPoint = text => ({ type: types.ADD_POINT, payload: text });
const deletePoint = id => ({ type: types.DELETE_POINT, payload: id });
const completePoint = id => ({ type: types.COMPLETE_POINT, payload: id });

export const creator = {
  addPoint,
  deletePoint,
  completePoint
};

export const getSkillsAction = pointId => {
  return dispatch => {
    dispatch({
      type: types.FETCH_POINT_SKILLS_BEGIN,
      payload: pointId
    });

    dispatch({
      type: types.FETCH_POINT_SKILLS_SUCCESS,
      payload: getSkills()
    });
  };
};

// export const fetchPointSkillsFailure = error => ({
//   type: types.FETCH_POINT_SKILLS_FAILURE,
//   error
// });
