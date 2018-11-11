import * as types from "../constants/ActionTypes";

const completeSkill = id => ({ type: types.COMPLETE_SKILL, payload: id });

export const creator = {
  completeSkill
};
