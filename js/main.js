/* Get stuff */
function $(el) {
    return document.querySelectorAll(el);
}

/* Do stuff */
function Interaction(el) {
    this.toggle = function(state) {
        for(var i = 0; i < el.length; i++) {
            if (el[i].style.display === 'none') {
                el[i].style.display = 'block';
            } else {
                el[i].style.display = 'none';
            }
        }
    }
}

new Interaction($("nav"));

//new Interaction($("#main-content"));