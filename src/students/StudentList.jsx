
import { useState } from 'react';
import { students as initialStudents } from '../data/students.js';
import StudentCard from './StudentCard.jsx';
import StudentForm from './StudentForm.jsx';

function StudentList() {
	const [students, setStudents] = useState(initialStudents);

	function addStudent(newStudent) {
		setStudents([...students, newStudent]);
	}

	function deleteStudent(id) {
		setStudents(students.filter(student => student.id !== id));
	}

	return (
		<main>
			<h2>Наши студенты</h2>
			<p>Всего студентов: {students.length}</p>

			<StudentForm onAdd={addStudent} />

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
