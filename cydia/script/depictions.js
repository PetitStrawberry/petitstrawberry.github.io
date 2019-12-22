function html_from_depiction(fileName) {
  var depiction = obj_from_json(readTextFile(fileName)).tabs;
  var h = '';
  var h_tmp = '';

  for (var i in depiction) {
    if (typeof depiction[i].tabname !== 'undefind') {
      h = h + '<h2 role="header">' + depiction[i].tabname + '</h2>'
      h = h + '<ul><li>';
    };
    for (var k in depiction[i].views) {

      if (typeof depiction[i].views[k].markdown !== 'undefined') {
        h = h + depiction[i].views[k].markdown;
      };
      if (typeof depiction[i].views[k].class !== 'undefined') {
        if (depiction[i].views[k].class == 'DepictionHeaderView') {
          h = h + '<hr><h3>' + depiction[i].views[k].title + '</h3>';
        };
        if (depiction[i].views[k].class == 'DepictionSubheaderView') {
          h = h + '<h4>' + depiction[i].views[k].title + '</h4>';
        };
        if (depiction[i].views[k].class == 'DepictionTableTextView') {
          h = h + '<tr><td style="color: #999;">' + depiction[i].views[k].title + '</td><td align="right">' + depiction[i].views[k].text + '</td></tr>';
        };
        if (depiction[i].views[k].class == 'DepictionTableButtonView') {
          h = h + '<li><a href="' + depiction[i].views[k].action + '" target="_blank" role="button">' + depiction[i].views[k].title + '</a></li>';
        };
        
        if (depiction[i].views[k].class == 'DepictionScreenshotsView') {
          h_tmp = '';
          h = h + '<div id="screenshots"><div class="mobile-scroll"><table cellspacing="15">';
          for (var l in depiction[i].views[k].screenshots) {
            h = h + '<td>' + '<a href="#figure'+ String(l) + '"><image src="' + depiction[i].views[k].screenshots[l].url + '" height=284 style="border-radius: ' + depiction[i].views[k].itemCornerRadius + 'px"></a></td>';
            h_tmp = h_tmp + '<figure id="figure'+String(l)+`">
                               <a id="overlay" href="#overlay">
                                 <image src="` + depiction[i].views[k].screenshots[l].url + ` " style="width: 90%; height: 90%; object-fit: contain;">
                               </a>
                             </figure>
                             `;
          };
          h = h + '</table></div>'+h_tmp+'</div>';
          
          
        };
        
        if (depiction[i].views[k].class == 'DepictionSeparatorView') {
          h = h + '<hr>';
        };
        if (depiction[i].views[k].class == 'BeginingOfTable') {
          h = h + '<table width="100%">';
        };
        if (depiction[i].views[k].class == 'EndOfTable') {
          h = h + '</table>';
        };

      };
    };
    h = h + '</li></ul>';
  }
  return h;
}