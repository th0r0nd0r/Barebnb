export const toArray = ({ spots }) => (
  Object.keys(spots).map(key => spots[key])
);
