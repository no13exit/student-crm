
import CourseCard from './CourseCard';

function CourseList({ courses }) {
	return (
		<section>
			<h2>Наши курсы</h2>
			<p>Всего курсов: {courses.length}</p>

			{courses.length === 0 ? (
				<p>Курсы не найдены.</p>
			) : (
				<div>
					{courses.map(course => (
						<CourseCard
							key={course.id}
							course={course}
						/>
					))}
				</div>
			)}
		</section>
	);
}

export default CourseList;
