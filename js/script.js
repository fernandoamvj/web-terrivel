var t1 = document.getElementById("tam1"),
    result1 = document.getElementById("result1");
	t2 = document.getElementById("tam2"),
    result2 = document.getElementById("result2");

t1.addEventListener("input", function () {
    result1.innerHTML = t1.value;
}, false);	
t2.addEventListener("input", function () {
    result2.innerHTML = t2.value;
}, false);
