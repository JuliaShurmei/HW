import { useDispatch, useSelector } from "react-redux";
import { changeString, changeString2 } from "../../redux/reducers/stringReducer";
import { AppDispatch, useAppSelector } from "../../redux/store";

export const About = () => {

  const storeData= useAppSelector((state) => state.string)
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{height:"92vh"}}>
    <div className='input-container'>
      <div className='input-container__header'>
       It's Pretty Login
      </div>
      <div className='input-container__text'>Nice to meet you</div>
      <p> From store {storeData.abcd}</p>
      <button onClick={() => dispatch(changeString({ value: "Shurmei"}))}> Change string</button>
      <button onClick={() => dispatch(changeString2({}))}> Change string 2 </button>
    </div>
    </div>
  );
};
