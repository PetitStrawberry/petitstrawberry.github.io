var getQueryVars = function() {
	var vars = [];
	var query_list = window.location.search.substring(1).split('&');
	var tmp_arr;
	query_list.forEach( function(e, i, a) {
		tmp_arr = e.split('=');
		vars[ tmp_arr[0] ] = tmp_arr[1];
	})
	return vars;
}

function readTextFile(fileName) {
    var reqFile = new XMLHttpRequest();
    reqFile.open('GET', fileName, false);
    reqFile.send(null);
    return reqFile.responseText;
}
