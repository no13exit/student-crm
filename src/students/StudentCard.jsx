
import Card from '../components/Card';
import StatusBadge from './StatusBadge';

function StudentCard({ student, onDelete }) {
	return (
		<Card>
			<h3>{student.name}</h3>
			<p>Возраст: {student.age}</p>
			<p>Группа: {student.group}</p>

			{student.age < 18 && (
				<p>Несовершеннолетний студент</p>
			)}

			<div className="student-card-actions">
				<StatusBadge isActive={student.isActive} />

				<button
					className="delete-student-btn"
					onClick={() => onDelete(student.id)}
				>
					Удалить
				</button>
			</div>
		</Card>
	);
}

export default StudentCard;
