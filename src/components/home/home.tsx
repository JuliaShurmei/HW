import { useLocation } from "react-router-dom";

export const Home = () => {
    const location = useLocation();
    return (
      <div style={{height:"92vh"}}>
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
  