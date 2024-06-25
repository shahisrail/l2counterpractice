import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementbyvalue,
  increment,
  incrementbyvalue,
} from "./redux/fetaures/counterSlice";

function App() {
  const { count,boxsize } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="text-3xl text-center">This is a counter app</h2>
      <div className="h-screen w-full flex justify-center  border items-center ">
        <div className="flex justify-center gap-5">
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-success"
          >
            Increment
          </button>
          <h2>{count}</h2>
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-warning"
          >
            Decrement
          </button>

          <button
            onClick={() => dispatch(incrementbyvalue(5))}
            className="btn "
          >
            incementby vlue
          </button>
          <button
            onClick={() => dispatch(decrementbyvalue(5))}
            className="btn "
          >
            decrement vlue
          </button>
          <div className="boxes">
            {boxsize.map((box) => (
              <div key={box.id} className="box">
                Box {box.id}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
