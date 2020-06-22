function palindrome(str){
	var reversed= str.split("").reversed().join("");
	if(reversed===str)retrun true;

	return false;
}


palindrome("Cigar? Toss it in a can. It is so tragic") 
palindrome("I did, did I?") 
palindrome("Red rum, sir, is murder") 
palindrome("Eva, can I see bees in a cave?") 
palindrome("Hello World") 