
function AvailabilityBadge({ isAvailable }) {
	return (
		<span className={isAvailable ? 'available' : 'unavailable'}>
            {isAvailable ? 'Доступен' : 'Набор закрыт'}
        </span>
	);
}

export default AvailabilityBadge;
