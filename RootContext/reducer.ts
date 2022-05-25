import { ActionTypes } from "./action.type";

interface StatesType {
  gender1: string;
  nationality: string;
  image: any[];
}
export const INTIAL_STATE = {
  gender1: "Male",
  nationality: "AU",
  image: [],
};

export const reducer = (state: StatesType, action: any) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENDER: {
      return { ...state, gender1: action.payload };
    }
    case ActionTypes.CHANGE_NATIONALITY: {
      return { ...state, nationality: action.payload };
    }
    case ActionTypes.GET_USER: {
      return { ...state, image: action.payload };
    }
    default: {
      return state;
    }
  }
};
