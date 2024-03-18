import "./CalculatorForm.css";
const CalculatorForm = ({
  userInput,
  onChange,
  // initialInvestment,
  // annualInvestment,
  // expectedReturn,
  // duration,
  // ivestmentHandleFormSubmit,
  // durationHandleFormSubmit,
  // annualHandleFormSubmit,
  // expectHandleFormSubmit,
}) => {
  return (
    <>
      <form className="input-group">
        <div className="user-input">
          <label>INITIAL IVESTMENT</label>
          <input
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
            type="number"
          ></input>
        </div>
        <div className="user-input">
          <label>ANNUAL INVESTMENT</label>
          <input
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
            type="number"
          ></input>
        </div>
        <div className="user-input">
          <label>EXPECTED RETURN</label>
          <input
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            value={userInput.expectedReturn}
            type="number"
          ></input>
        </div>
        <div className="user-input">
          <label>DURATION</label>
          <input
            onChange={(event) => onChange("duration", event.target.value)}
            value={userInput.duration}
            type="number"
          ></input>
        </div>
      </form>
    </>
  );
};

export default CalculatorForm;
