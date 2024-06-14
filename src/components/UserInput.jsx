const UserInput = ({ handleSubmit, onInput }) => {
	return (
		<main id='user-input'>
			<form className='input-group'>
				<div>
					<label htmlFor='initialInvestment'>Initial Investment</label>
					<input
						type='number'
						id='initialInvestment'
						onChange={onInput}
						required
					></input>
				</div>
				<div>
					<label htmlFor='annualInvestment'>Annual Investment</label>
					<input
						type='number'
						id='annualInvestment'
						onChange={onInput}
						required
					></input>
				</div>
				<div>
					<label htmlFor='expectedReturn'>Expected Return</label>
					<input
						type='number'
						step={'.01'}
						id='expectedReturn'
						onChange={onInput}
						required
					></input>
				</div>
				<div>
					<label htmlFor='duration'>Duration</label>
					<input
						type='number'
						id='duration'
						onChange={onInput}
						required
					></input>
				</div>
			</form>
		</main>
	);
};

export default UserInput;
