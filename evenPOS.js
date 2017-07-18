//  Positive Numbers

function positiveNumbers(numbers){
	return numbers > 0;
}

function retPosNum(array1){
	return array1.filter(positiveNumbers);
}


// Even Numbers

function isEven(numbers) {
	return (numbers % 2 === 0);
}

function onlyEvens(array1){
	return array1.filter(isEven);
}