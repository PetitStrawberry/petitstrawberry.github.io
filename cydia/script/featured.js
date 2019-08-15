function html_from_depiction(package) {
    var depiction = obj_from_json(readTextFile("sileodepictions/" + package + ".json"));
    var title = depiction.title;
    var detail = depiction.description;
    var price = depiction.price;
    var h = `
            <li>
                <a href="depictions.html?package=`+ package + `"  role="button">
                    <table width="100%">
                        <tr>
                            <td>`+ title + `</td>
                            <td align="right" rowspan="2"><p style="color: #999; font-size: 13px;">` + price + `</p></td>
                        </tr>
                        <tr>
                            <td><p>` + detail + `</p></td>
                        </tr>
                    </table>
                </a>
            </li>
            `;
    return h;
}