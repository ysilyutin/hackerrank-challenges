// There are N integers in an array A. All but one integer occur in pairs. Your task is to find the number that occurs only once.

var list = [1, 2, 3, 1, 2, 6, 3];

// If you have an element repeated twice, then xor = 0, lonely element remains as it is.

function foo(list) {
	var result = 0
	for (var i = 0; i < list.length; i += 1) {
		result ^= list[i];
	}
	return result
}

console.log(foo(list));
