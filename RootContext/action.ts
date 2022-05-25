import axios from "axios";
import { ActionTypes } from "./action.type";
const actions = (dispatch: any) => {
  const User = async (gender1: string, selectedItem: any) => {
    const Url = `https://randomuser.me/api/?results=20&nat=${selectedItem}&inc=name,gender,email,nat,picture&gender=${gender1}`;
    try {
      axios.get(Url).then((res: any) =>
        dispatch({
          type: ActionTypes.GET_USER,
          payload: res.data.results,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const changeGender = (gender1: string) => {
    dispatch({ type: ActionTypes.CHANGE_GENDER, payload: gender1 });
  };

  const changeNationality = (nationality: string) =>
    dispatch({ type: ActionTypes.CHANGE_NATIONALITY, payload: nationality });
  return { User, changeGender, changeNationality };
};

export default actions;
