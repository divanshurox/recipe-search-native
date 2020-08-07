import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE, SET_FILTER } from "../actions/mealActions";

const initState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

const mealReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const mealIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.payload
      );
      if (mealIndex >= 0) {
        const updatedMeals = [...state.favouriteMeals];
        updatedMeals.splice(mealIndex, 1);
        return {
          ...state,
          favouriteMeals: updatedMeals,
        };
      } else {
        return {
          ...state,
          favouriteMeals: state.favouriteMeals.concat(
            state.meals.find((ele) => ele.id === action.payload)
          ),
        };
      }
    case SET_FILTER:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.isVegeterian && !meal.isVegeterian) {
          return false;
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredMeals: filteredMeals,
      };
    default:
      return state;
  }
};

export default mealReducer;
