function html_from_depiction(package) {
    var depiction = obj_from_json(readTextFile(package));
    var h = `
            <div class="left">
                <img class="list-item__thumbnail" src="Twitter.png" alt="@petitstb">
            </div>
            <div class="center">
                <div class="list-item__title">'` + package + `</div>
                <div class="list-item__subtitle">@petitstb</div>
            </div>`;
    return "hi";
}