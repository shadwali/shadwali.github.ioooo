setTimeout(() => {

    setInterval(() => {

        var arr = [19, 7, 24, 10, 12, 31, 28, 26,
            27, 15, 23, 30, 29, 5, 4, 6, 8,
            9, 11, 13, 14, 32, 16,
            33, 20, 22, 18, 17, 21, 1, 25, 2
        ];
        var selected = [];
        for (var i = 0; i < 18; i++) {
            var imgVal = arr[Math.floor(Math.random() * arr.length)];
            if (selected.length != 0 && selected.includes(imgVal)) {
                i = i - 1;
            } else {
                selected[i] = imgVal;
            }
        }
        for (var i = 0; i < selected.length; i++) {
            // $("#" + String((i+1))).fadeOut();
            //$("#" + String(portrait_index[i])).fadeIn();
            //document.getElementById(String((i + 1))).style.opacity = '0';
            document.getElementById(String((i + 1))).src = 'images/' + String(selected[i]) + '.jpg';
            $('#' + String((i + 1))).animate({
                opacity: '1'
            }, 5000);

        }
    }, 20000);
}, 60000);