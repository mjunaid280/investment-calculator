import logo from '../assets/investment-calculator-logo.png';

export default function InvestmentHeader() {
	return (
		<header id='header'>
			<img
				src={logo}
				alt=''
			></img>
			<h1> Investment Calculator</h1>
		</header>
	);
}
