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
                el[i].style.display = 'block';
            } else {
                el[i].style.display = 'none';
            }
        }
    }
}

new Interaction("a.thoughts").click(function() {
    console.log("hello World!");
});


//new Interaction($("#main-content"));