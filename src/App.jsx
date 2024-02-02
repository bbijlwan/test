import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <div className=" flex flex-col justify-center align-middle py-5 w-1/4 mx-auto">
        <div className=" text-center mb-2">{count}</div>
        <button className=" bg-slate-600 text-white p-4 w-1/2 mx-auto" onClick={()=>setCount(count+1)} >Click Me</button>
       </div> 
      
    </>
  );
}

export default App;
