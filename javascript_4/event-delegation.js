function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

function editCell(e) {
    var target = getEventTarget(e);
    if (target.tagName.toLowerCase() === "td") {
        // DO SOMETHING WITH THE CELL
    }
}
