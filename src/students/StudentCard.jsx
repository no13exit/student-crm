
import StatusBadge from './StatusBadge.jsx';

function StudentCard({ student }) {
	return (
		<div className="student-card">
			<h3>{student.name}</h3>
			<p>Возраст: {student.age}</p>
			<p>Группа: {student.group}</p>

			<StatusBadge isActive={student.isActive} />

			{student.age < 18 && (
				<p>Несовершеннолетний студент</p>
			)}
		</div>
	);
}

export default StudentCard;
