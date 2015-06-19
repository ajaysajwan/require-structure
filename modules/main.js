require.config({
	baseUrl:'../libraries',
	paths:{
		"appURL":"../modules",
		"jquery":"jquery-1.11.3.min"
	}
});

require(["appURL/m1/m1"],function(m1){
	console.log('Calling module1');
});
//http://requirejs.org/docs/api.html#usage