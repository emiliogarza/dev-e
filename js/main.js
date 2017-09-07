function $(el) {
    return document.querySelectorAll(el);
}

var showMe: function() {
    for (var i = 0;i < el.length; i++){
        var thisel = el[i];
        if (typeof thisel.style != 'undefined' && thisel.style.display === 'none') {
            thisel.style.display = 'block';
        } else {
            thisel.style.display = 'none';
        }
      }

}


//$("button").toggleMe();
//toggleMe($("nav"));