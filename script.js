function shortcut(s1, s2) {
  // your code here
	
	let str = "";
	if(s1.length===0 || s2.length===0){
		return str;
	}
	else{
		s1 = s1.split(" ").join("");
		s2 = s2.split(" ").join("");
		
		return str+s1.charAt(0)+s2.charAt(0);
	}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
