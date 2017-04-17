var page = require('webpage').create(),
    system = require('system'),
	t,address;
	
if(system.args.length == 1) {
	console.log("enter url");
	phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function(status) {
	if(status!="success") {
		console.log("failure");
	} else {
		t = Date.now() - t;
		console.log("Loading time: "+t+"msec");
	}
	phantom.exit();
})