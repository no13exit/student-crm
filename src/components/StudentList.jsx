
import StudentCard from './StudentCard';

function StudentList({ students }) {
	return (
		<main>
			<h2>Наши студенты</h2>
			<p>Всего студентов: {students.length}</p>

			{students.length === 0 ? (
				<p>Список студентов пуст</p>
			) : (
				<div>
					{students.map(student => (
						<StudentCard
							key={student.id}
							student={student}
						/>
					))}
				</div>
			)}
		</main>
	);
}

// function StudentList({ students }) {
// 	return (
// 		<div>
// 			{students.map(student => (
// 				<StudentCard
// 					key={student.id}
// 					student={student}
// 				/>
// 			))}
// 			<p>Всего студентов: {students.length}</p>
// 		</div>
// 	);
// }

export default StudentList;
