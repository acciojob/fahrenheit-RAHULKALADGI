function toFahrenheit(celsius) {
 // Write your code here
	let ans = ((9/5)*celsius)+32
	if(!String(ans).includes('.')) {
		return ans+".00";
	}
	else {
		let s = String(ans);
		return s.slice(0,5);
	}
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
