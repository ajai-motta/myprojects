import logo from '../assets/investment-calculator-logo.png';

export default function Header(){
    return(<div id="header">
        <h1>Invest Money Calculator</h1>
        <img src={logo} alt="investment-calculator" />
    </div>)
}