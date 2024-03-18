import { calculateInvestmentResults, formatter } from "../util/investment";

import "./Table.css";
const TableInvestement = ({
  userInput,

  // initialInvestment,
  // annualInvestment,
  // expectedReturn,
  // duration,
}) => {
  const calculatorForm = calculateInvestmentResults(userInput);
  console.log(userInput);
  console.log(calculatorForm);
  let initialInvestment;
  if (calculatorForm.length > 0) {
    initialInvestment =
      calculatorForm[0].valueEndOfYear -
      calculatorForm[0].interest -
      calculatorForm[0].annualInvestment;
  }

  return (
    <div className="result">
      {userInput.duration > 0 ? (
        <table>
          <tr>
            <th>Year</th>
            <th>Ivestment Value</th>
            <th>Interest (Year) </th>
            <th>Total interest</th>
            <th>Invested Capital</th>
          </tr>

          {calculatorForm.map((data, index) => {
            const totalInterest =
              data.valueEndOfYear -
              data.annualInvestment * data.year -
              initialInvestment;

            const totalAmountInvested = data.valueEndOfYear - totalInterest;
            return (
              <tr key={index}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        "Compila Duration per creare una tabella"
      )}
    </div>
  );
};

export default TableInvestement;
