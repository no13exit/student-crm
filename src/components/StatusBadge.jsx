function StatusBadge({ isActive }) {
	return (
		<span className={isActive ? 'active' : 'paused'}>
            {isActive ? 'Активен' : 'На паузе'}
        </span>
	);
}

export default StatusBadge;
