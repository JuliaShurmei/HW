import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

export const Home = () => {
    const location = useLocation();

const storeData = useAppSelector((state)=> state.string)
const storeData2 = useAppSelector((state)=> state.post)
    return (
      <div style={{height:"92vh"}}>
        <p> From store {storeData.abcd} </p>
      <div className='input-container'>
        <div className='input-container__header'>
         Hello from Home component
        </div>
        {location?.state && (
        <p>
          {location.state.text}: {location.state.id}
        </p>
      )}
      </div>
      </div>
    );
  };
  