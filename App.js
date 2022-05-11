import React, { useEffect } from "react";
import Navigation from "./src/navigation/Navigation";
import { init } from "./src/util/database";

const App = () => {

  useEffect(()=>{
    init();
  },[])

  return(
    <Navigation/>
  )
}

export default App;