import { createSelector } from "reselect";

const getAllPoints = state => state.points;
export const getPoints = createSelector([getAllPoints], points => points);

const getAllSkills = state => {
  return state.skills;
};
const getPointId = (state, id) => id;

export const getPoint = createSelector(
  [getAllPoints, getPointId],
  (points, pointId) => {
    return points.filter(point => point.id === pointId)[0];
  }
);

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

const getSkillId = (state, id) => id;
export const getSkill = createSelector(
  [getAllSkills, getSkillId],
  (skills, skillId) => {
    const skill = skills.filter(skill => skill.id === skillId)[0];
    debugger;
    return skill;
  }
);

export const makeGetSkill = () => {
  const getSkillId = (state, id) => id;
  return createSelector([getAllSkills, getSkillId], (skills, skillId) => {
    debugger;
    return skills.filter(skill => skill.id === skillId)[0];
  });
};
