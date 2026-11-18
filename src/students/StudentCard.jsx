
import Card from '../components/Card';
import StatusBadge from './StatusBadge';

function StudentCard({ student, onDelete }) {
	return (
		<Card>
			<h3>{student.name}</h3>
			<p>Возраст: {student.age}</p>
			<p>Группа: {student.group}</p>

			<StatusBadge isActive={student.isActive} />

			{student.age < 18 && (
				<p>Несовершеннолетний студент</p>
			)}

			<button
				className="delete-student-btn"
				onClick={() => onDelete(student.id)}
			>
				Delete
			</button>
		</Card>
	);
}

export default StudentCard;
