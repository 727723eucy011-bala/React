import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from './component/redux/action';
import { ResponsiveAppBar } from './component/navbar';

function App() {
 
      const count =useSelector((state)=>state);
      const dispatch=useDispatch();
      return (
        <div>
          <ResponsiveAppBar />
      {/* // <div>
      //   <h2>count: {count}</h2>
      //   <button onClick={()=>dispatch(increment())}>increase</button>
      //   <button onClick={()=>dispatch(decrement())}>decrement</button>

      // </div> */}
      {/* <div> */}
        {/* <ResponsiveAppBar/> */}
      </div>
  );
}

export default App;