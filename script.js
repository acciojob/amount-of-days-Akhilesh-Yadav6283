//your JS code here. If required.
function daysOfAYear( ) {

	let year = promt();

	if(year%4==0 || year%100==0){
		if(year%400==0 && year%100==0){
			console.log(366);
		}
		else{
			console.log(365);
		}
	}else{
		console.log(365);
	}
	
	
}