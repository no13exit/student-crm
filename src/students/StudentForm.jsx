
import { useState } from 'react';
import Card from '../components/Card.jsx';

function StudentForm({ onAdd }) {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [group, setGroup] = useState('React Basics');
	const [isActive, setIsActive] = useState(true);

	function handleSubmit(event) {
		event.preventDefault();

		if (!name.trim() || !age || Number(age) <= 0) {
			return;
		}

		const newStudent = {
			id: crypto.randomUUID(),
			name: name.trim(),
			age: Number(age),
			group: group,
			isActive: isActive
		};

		onAdd(newStudent);

		setName('');
		setAge('');
		setGroup('React Basics');
		setIsActive(true);
	}

	return (
		<Card>
			<form className="student-form" onSubmit={handleSubmit}>
				<h3>Add Student</h3>

				<div className="student-form-fields">
					<div className="form-field">
						<label htmlFor="student-name">Name</label>
						<input
							id="student-name"
							type="text"
							value={name}
							onChange={(event) => setName(event.target.value)}
							required
						/>
					</div>

					<div className="form-field">
						<label htmlFor="student-age">Age</label>
						<input
							id="student-age"
							type="number"
							min="1"
							value={age}
							onChange={(event) => setAge(event.target.value)}
							required
						/>
					</div>

					<div className="form-field">
						<label htmlFor="student-group">Group</label>
						<select
							id="student-group"
							value={group}
							onChange={(event) => setGroup(event.target.value)}
						>
							<option value="React Basics">React Basics</option>
							<option value="React Advanced">React Advanced</option>
						</select>
					</div>

					<div className="form-checkbox">
						<label htmlFor="student-active">
							<input
								id="student-active"
								type="checkbox"
								checked={isActive}
								onChange={(event) => setIsActive(event.target.checked)}
							/>
							Active student
						</label>
					</div>

					<button className="add-student-btn" type="submit">
						Add Student
					</button>
				</div>
			</form>
		</Card>
	);
}

export default StudentForm;
