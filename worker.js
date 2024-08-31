self.addEventListener('message', function(msg){
	var data = msg.data;
	var result = "";
	for (var i = data; i < 1; i += data) {
			if ((4+i)*(4+i) == (4-i)*(4-i)+(4-(4*i))*(4-(4*i))) {
				result += "R = " + i + ";";
			}
		self.postMessage("Perc")
	}
	self.postMessage("Res:" + result);
}, false);