import * as types from "../constants/ActionTypes";
import data from "../data.json";

export default function skills(state = data.skills, action) {
  switch (action.type) {
    case types.COMPLETE_SKILL:
      return state.map(skill => {
        if (action.payload === skill.id) {
          skill.completed = !skill.completed;
        }
        return skill;
      });

    default:
      return state;
  }
}
