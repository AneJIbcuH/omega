import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { cardsActions } from "../store/testSlice";

const actions = {
  ...cardsActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
