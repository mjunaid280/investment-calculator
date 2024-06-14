import { formatter as currencyFormatter } from '../util/investment';
const Result = ({ annualResult }) => {
	return (
		<div>
			<table id='result'>
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{annualResult.map((val, key) => {
						return (
							<tr key={key}>
								<td>{val.year}</td>
								<td>{currencyFormatter.format(val.valueEndOfYear)}</td>
								<td>{currencyFormatter.format(val.interest)}</td>
								<td>{currencyFormatter.format(val.totalInterest)}</td>
								<td>{currencyFormatter.format(val.totalInvestment)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Result;
