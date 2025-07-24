import {calculateInvestmentResults,formatter} from '../util/investment.js'
export default function Result({userInput}){
    console.log(userInput)
    const result=calculateInvestmentResults(userInput)
    const intialinvestment=result[0].valueEndOfYear-result[0].interest-result[0].annualInvestment;
  
    return(
       <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>InvestmentValule</th>
                <th>Intrest(Yearly)</th>
                <th>Total Intrest</th>
                <th>iNVESTED cAPITAL</th>


            </tr>
        </thead>
        <tbody>
            {result.map(yearlydata=>{
                const totalIntrest=yearlydata.valueEndOfYear-(yearlydata.annualInvestment * yearlydata.year) -intialinvestment;
                const totalInvestedCapital=yearlydata.valueEndOfYear-totalIntrest
                return <tr key={yearlydata.year}>
                    <td>{yearlydata.year}</td>
                    {console.log(yearlydata.valueEndOfYear)}
                    <td>{formatter.format(yearlydata.valueEndOfYear)}</td>
                    <td>{formatter.format(yearlydata.interest)}</td>
                    <td>{formatter.format(totalIntrest)}</td>
                    <td>{formatter.format(totalInvestedCapital)}</td>
                </tr>
            })}
        </tbody>

       </table>
    )
}