import { SET_FILTER } from "./filters-constants";

export const ActiveFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
