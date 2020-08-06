import { DATA } from "../actions/actionTypes";

const initialState = [];

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case DATA:
      return [...state, payload];
    default:
      return state;
  }
}
