/* Get stuff */
function $(el) {
    return document.querySelectorAll(el);
}

/* Do stuff */
function Interaction(elem) {
    el = $(elem);
    this.click = function(fun) {
        for(var i = 0; i < el.length; i++) {
            el[i].onclick = fun;
        }
    }
    this.toggle = function(state) {
        for(var i = 0; i < el.length; i++) {
            if (el[i].style.display === 'none') {
                el[i].removeAttribute("style");
            } else {
                el[i].style.display = 'none';
            }
        }
    }
}

new Interaction(".blogLink").click(function(event) {
    // event.preventDefault();

    // location.href = this.getAttribute("href");
});

function moveHomeOffscreen() {

}