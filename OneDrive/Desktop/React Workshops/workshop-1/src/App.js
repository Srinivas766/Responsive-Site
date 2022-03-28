import React from 'react';
import Img from "./Img";


const App = () => {
  const Arr=[
    "http://docs.google.com/uc?export=open&id=19-Q9JSH3ZvC40lOlUttxf4wtPVm9ctIU",
    "http://docs.google.com/uc?export=open&id=1QB2q13sop1x86CbOf5c5NBY0geWhk2hZ",
    "http://docs.google.com/uc?export=open&id=1QB2q13sop1x86CbOf5c5NBY0geWhk2hZ"
  ]
  return (
    <div>
      {Arr.map((item,index)=><Img key={index} src={item}/>)}
    </div>
  )
}

export default App