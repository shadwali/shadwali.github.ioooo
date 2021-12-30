var container = document.getElementById("mycontainer");
var canvas = document.getElementById("mycanvas");

if (screen.width > 600) {
    window.addEventListener('mousemove', (e) => {
        let x = e.clientX; // - container.getBoundingClientRect().left;
        let y = e.clientY; // - container.getBoundingClientRect().top;
        console.log(x, y);


        canvas.style.transform = 'translate(-' + x + 'px, ' + (-y * 2) + 'px)';

    });
    window.addEventListener('mouseout', (e) => {
        canvas.style.transform = 'translate(' + (-670) + 'px, ' + (-700) + 'px)'
    })
} else {
    var tsY;
    var tsX;
    window.addEventListener('touchstart', (e) => {
        e.preventDefault();
        tsY = e.touches[0].clientY;
        tsX = e.touches[0].clientX;
    }, false);

    window.addEventListener('touchmove', (e) => {
        e.preventDefault();

        let x = e.touches[0].pageX - container.getBoundingClientRect().left;
        let y = e.touches[0].pageY - container.getBoundingClientRect().top;

        console.log(e.touches[0].pageX);

        canvas.style.transform = 'translate(-' + x * 2 + 'px, ' + (-y * 1.1) + 'px)';

    });
    var clickFunction = function(event) {
        //do some stuff here
        canvas.style.transform = 'translate(' + (-670) + 'px, ' + (-700) + 'px)'
        window.removeEventListener('touchend', clickFunction, false);

    };
    window.addEventListener('touchend', clickFunction, false);
    //canvas.style.transform = 'translate(' + (-670) + 'px, ' + (-700) + 'px)'
    //window.removeEventListener('touchend', () => {}, false);
    //  })
}

document.addEventListener('contextmenu', event => event.preventDefault());