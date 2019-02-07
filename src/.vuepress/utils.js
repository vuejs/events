export const isPast = (date) => {
	const today = new Date();

	return new Date(date) < today;
}
