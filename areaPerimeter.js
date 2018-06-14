var inputRad = 2.6;

function perimeterAndArea(radius) {
	if (radius > 0) {
		const PI = Math.PI;
		var area = (PI * (radius ** 2));
		var perimeter = (2 * PI * radius);
		console.log(area);
		console.log(perimeter);
	}
}


perimeterAndArea(inputRad);