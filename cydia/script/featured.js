function html_from_depiction(package) {
    var depiction = obj_from_json(readTextFile("sileodepictions/" + package + ".json"));
    var title = depiction.title
    var detail = depiction.description
    var h = `
            <li>
                <a href="depictions.html?package=`+ package + `" role="button">
                    `+ title + `
                    <p>`+ detail + `</p>
                </a>
            </li>
            `;
    return h;
}