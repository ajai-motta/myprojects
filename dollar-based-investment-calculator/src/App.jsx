import Header from "./componets/Header"
import Input from "./componets/Input"
import Result from "./componets/Result"
import { useState } from "react"
function App() {
  const [investment,setInvestment]=useState({
    initialInvestment:100000,
    annualInvestment:10000,
    expectedReturn:6,
    duration: 10

})
const userInputIsValid=investment.duration>0;
function handleChange(index,value){
    setInvestment(prev=>{
        return {
            ...prev,
            [index]:+value
        }
    })
}
  return (<> 
  <Header/>
    <Input investment={investment} onChanges={handleChange}/>
    {!userInputIsValid && <p>Oh Please Time Tavel doesen't Exist</p>}
   {userInputIsValid && <Result userInput={investment}/>}
    </>
   
  )
}

export default App
