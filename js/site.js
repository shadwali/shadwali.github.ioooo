setTimeout(() => {

    setInterval(() => {
        var arr_Portrait = [19, 7, 24, 10, 12, 31, 28, 26, 27, 15, 23, 30, 29, 5, 4, 6, 8, 9, 11, 13, 14, 32];
        var arr_Landscape = [16, 33, 20, 22, 18, 17, 21];
        var arr_Square = [1, 25, 2];
        var portrait_index = [1, 4, 5, 7, 8, 9, 10, 12, 13, 15, 16, 18, 20, 22];
        var landscape_index = [2, 3, 6, 14, 19, 21];
        var square_index = [11, 17];
        var portrait_len = portrait_index.length;
        var landscape_len = landscape_index.length;
        var square_len = square_index.length;
        var portrait = [],
            landscape = [],
            square = [];

        for (var i = 0; i < portrait_len; i++) {
            var imgVal = arr_Portrait[Math.floor(Math.random() * arr_Portrait.length)];
            if (portrait.length != 0 && portrait.includes(imgVal)) {
                i = i - 1;
            } else {
                portrait[i] = imgVal;
            }
        }
        for (var i = 0; i < portrait.length; i++) {
            $("#" + String(portrait_index[i])).fadeOut();
            $("#" + String(portrait_index[i])).fadeIn();
            document.getElementById(String(portrait_index[i])).src = 'Shadwali/' + String(portrait[i]) + '.jpg';

        }
        //landscape
        for (var i = 0; i < landscape_len; i++) {
            var imgVal = arr_Landscape[Math.floor(Math.random() * arr_Landscape.length)];
            if (landscape.length != 0 && landscape.includes(imgVal)) {
                i = i - 1;
            } else {
                landscape[i] = imgVal;
            }
        }
        for (var i = 0; i < landscape.length; i++) {
            document.getElementById(String(landscape_index[i])).src = 'Shadwali/' + String(landscape[i]) + '.jpg';

        }
        //square
        for (var i = 0; i < square_len; i++) {
            var imgVal = arr_Square[Math.floor(Math.random() * arr_Square.length)];
            if (square.length != 0 && square.includes(imgVal)) {
                i = i - 1;
            } else {
                square[i] = imgVal;
            }
        }
        for (var i = 0; i < square.length; i++) {
            document.getElementById(String(square_index[i])).src = 'Shadwali/' + String(square[i]) + '.jpg';

        }
    }, 20000);
}, 190000);
