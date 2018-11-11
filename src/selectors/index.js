import { createSelector } from "reselect";

const getAllPoints = state => state.points;
export const getPoints = createSelector([getAllPoints], points => points);

const getAllSkills = state => {
  return state.skills;
};
const getPointId = (state, pointData) =>
  pointData.data ? pointData.data.id : false;

export const makeGetSkills = () => {
  return createSelector([getAllSkills, getPointId], (skills, pointId) => {
    debugger;
    return skills.filter(skill => skill.pointId === pointId);
  });
};

export const getSkills = createSelector(
  [getAllSkills, getPointId],
  (skills, pointId) => {
    debugger;
    return skills.filter(skill => skill.pointId === pointId);
  }
);
