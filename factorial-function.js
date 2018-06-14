// function must return the value of n!
// var input = 12;

function factorialize(int) {
	if (int > 0) {
		var counter = 1;

		for(var i = 1; i < int; i++ ) {
			counter *= i + 1;
		}
		return counter;
	} else {
		return false;
	}
}

testFactorialize = function(number) {
	var numlist = Array.from({length: number +1}, (x,i) => i)
	numlist.forEach(function(num){
		console.log(factorialize(num))
	})

}

console.log(testFactorialize(45));



