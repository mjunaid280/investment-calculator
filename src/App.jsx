import InvestmentHeader from './components/InvestmentHeader';
import UserInput from './components/UserInput';
import Result from './components/Result';
import { INITIAL_USER_VALUE } from './util/constants';
import { calculateInvestmentResults } from './util/investment';
import { useState } from 'react';

function App() {
	const [initialUserInput, setInitialUserInput] = useState({
		...INITIAL_USER_VALUE,
	});

	const onInput = (event) => {
		const { id, value } = event.target || {};

		if (id && value) {
			setInitialUserInput((prev) => {
				return {
					...prev,
					[id]: value,
				};
			});
		}
	};

	const annualResult = calculateInvestmentResults(initialUserInput);
	const validInput = initialUserInput.duration > 0;

	return (
		<>
			<InvestmentHeader />
			<UserInput onInput={onInput} />
			{annualResult.length > 0 && validInput && (
				<Result annualResult={annualResult} />
			)}
			{!validInput && (
				<p className='center'>Please enter a duration more than zero.</p>
			)}
		</>
	);
}

export default App;
