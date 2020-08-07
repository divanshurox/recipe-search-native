export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const SET_FILTER = "SET_FILTER";

export const toggleFavourite = (mealId) => {
  return {
    type: TOGGLE_FAVOURITE,
    payload: mealId,
  };
};

export const setFilter = (filterSettings) => {
  return {
    type: SET_FILTER,
    filters: filterSettings,
  };
};
