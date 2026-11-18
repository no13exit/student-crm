
import { useState } from 'react';
import { students as initialStudents } from '../data/students.js';
import StudentCard from './StudentCard.jsx';
import Card from '../components/Card.jsx';

function StudentList() {
	const [students, setStudents] = useState(initialStudents);

	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [group, setGroup] = useState('React Basics');
	const [isActive, setIsActive] = useState(true);

	function addStudent(event) {
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

		setStudents([...students, newStudent]);

		setName('');
		setAge('');
		setGroup('React Basics');
		setIsActive(true);
	}

	function deleteStudent(id) {
		setStudents(students.filter(student => student.id !== id));
	}
	return (
		<main>
			<h2>Наши студенты</h2>
			<p>Всего студентов: {students.length}</p>

			<Card>
				<form className="student-form" onSubmit={addStudent}>
				<h3>Add Student</h3>
				<div className="student-form-fields">
				<div className="form-field">
					<label htmlFor="student-name">Name: </label>
					<input
						id="student-name"
						type="text"
						value={name}
						onChange={(event) => setName(event.target.value)}
						required
					/>
				</div>

				<div className="form-field">
					<label htmlFor="student-age">Age: </label>
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
					<label htmlFor="student-group">Group: </label>
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

				<button type="submit">Add Student</button>
				</div>
			</form>
			</Card>

			{students.length === 0 ? (
				<p>Список студентов пуст</p>
			) : (
				<div>
					{students.map(student => (
						<StudentCard
							key={student.id}
							student={student}
							onDelete={deleteStudent}
						/>
					))}
				</div>
			)}
		</main>
	);
}

export default StudentList;
