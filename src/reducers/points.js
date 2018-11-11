import * as types from "../constants/ActionTypes";
import data from "../data.json";

// const initialState = [
//   {
//     name: "Use Redux 1",
//     date: Date.now(),
//     skills: [],
//     id: 0
//   }
// ];

export default function points(state = data.points, action) {
  switch (action.type) {
    case types.ADD_POINT:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          date: Date.now(),
          completed: false,
          rate: 0,
          name: action.payload
        }
      ];
    case types.COMPLETE_POINT:
      debugger;
      return state.map(point => {
        if (action.payload === point.id) {
          point.completed = !point.completed;
        }
        return point;
      });
    case types.DELETE_POINT:
      return state.filter(point => {
        return action.payload !== point.id;
      });
    case types.FETCH_POINT_SKILLS_SUCCESS:
      return [
        ...state,
        {
          skills: action.payload
        }
      ];

    default:
      return state;
  }
}
