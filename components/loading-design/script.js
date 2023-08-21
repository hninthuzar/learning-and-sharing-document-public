function changeColor(color) {
    let items = document.getElementsByClassName('itemz');
    for(i = 0; i < items.length; i++) {
        items[i].style.fill = color;
    }
}