export const selectSpot = ({ spots }, id) => {
   const spot = spots[id] || {};
   return spot;
};
