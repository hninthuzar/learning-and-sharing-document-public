function countLines() {
    var el = document.getElementById('content');
    var divHeight = el.offsetHeight
    var lineHeight = parseInt(el.style.lineHeight);
    var lines = divHeight / lineHeight;
    alert("Lines: " + lines);
 }