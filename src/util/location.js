const GOOGLE_API_KEY = 'AIzaSyAk_0AZzz9EFpBJkzTotIZfef9FgFRhB1s';

export const getMapPreview = (latitude, longitude) => {
	const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
	return imagePreviewUrl;
};
