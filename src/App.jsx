import { useState } from "react";
import CalculatorForm from "./Components/CalculatorForm";
import TableInvestement from "./Components/TableInvestement";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  // const [initialInvestment, setInitialInvestment] = useState(0);
  // const [annualInvestment, setAnnualInvestment] = useState(0);
  // const [expectedReturn, setExpectedReturn] = useState(0);
  // const [duration, setDuration] = useState(0);

  // const ivestmentHandleFormSubmit = (event) => {
  //   setInitialInvestment(event.target.value);
  // };
  // const annualHandleFormSubmit = (event) => {
  //   setAnnualInvestment(event.target.value);
  // };
  // const durationHandleFormSubmit = (event) => {
  //   setDuration(event.target.value);
  // };

  // const expectHandleFormSubmit = (event) => {
  //   setExpectedReturn(event.target.value);
  // };
  const handleChange = (identifier, newValue) => {
    setUserInput((prevState) => ({
      ...prevState,
      [identifier]: +newValue,
    }));
  };

  return (
    <>
      <CalculatorForm
        userInput={userInput}
        onChange={handleChange}
        // initialInvestment={+initialInvestment}
        // ivestmentHandleFormSubmit={ivestmentHandleFormSubmit}
        // annualInvestment={+annualInvestment}
        // annualHandleFormSubmit={annualHandleFormSubmit}
        // expectedReturn={+expectedReturn}
        // expectHandleFormSubmit={expectHandleFormSubmit}
        // duration={+duration}
        // durationHandleFormSubmit={durationHandleFormSubmit}
      />

      <TableInvestement
        userInput={userInput}
        // initialInvestment={+initialInvestment}
        // annualInvestment={+annualInvestment}
        // expectedReturn={+expectedReturn}
        // duration={+duration}
      />
    </>
  );
}

export default App;
