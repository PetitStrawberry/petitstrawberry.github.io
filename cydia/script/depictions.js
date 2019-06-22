var getQueryVars = function () {
  var vars = [];
  var query_list = window.location.search.substring(1).split('&');
  var tmp_arr;
  query_list.forEach(function (e, i, a) {
    tmp_arr = e.split('=');
    vars[tmp_arr[0]] = tmp_arr[1];
  })
  return vars;
}

function readTextFile(fileName) {
  var reqFile = new XMLHttpRequest();
  reqFile.open('GET', fileName, false);
  reqFile.send(null);
  return reqFile.responseText;
}

function obj_from_json(jsonStr) {
  var obj = JSON.parse(jsonStr);
  return obj.tabs;
}

function html_from_depiction(fileName) {
  var depiction = obj_from_json(readTextFile(fileName));
  var h = '';
  for (var i in depiction) {
    if (typeof depiction[i].tabname !== 'undefind') {
      h = h + '<h2 role="header">' + depiction[i].tabname + '</h2>'
      h = h + '<ul><li>';
    };
    for (var k in depiction[i].views) {
      if (typeof depiction[i].views[k].title !== 'undefined') {
        var title = depiction[i].views[k].title
        if (depiction[i].views[k].class == 'DepictionHeaderView') {
          h = h + '<hr><h3>' + title + '</h3>';
        };
        if (depiction[i].views[k].class == 'DepictionSubheaderView') {
          h = h + '<h4>' + title + '</h4>';
        };
      };
      if (typeof depiction[i].views[k].markdown !== 'undefined') {
        h = h + depiction[i].views[k].markdown;
      };
      if (depiction[i].views[k].class == 'DepictionSeparatorView') {
        h = h + '<hr>';
      };
    };
    h = h + '</li></ul>';
  }
  return h;
}