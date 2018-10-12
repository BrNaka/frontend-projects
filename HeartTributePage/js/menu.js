$(document).ready(() => {
    $('.menu').click(() => {
        $('.summary').css('left', '0%');
    });
    $('.close').click(() => {
        $('.summary').css('left', '-150%');
    });

    $('.js-biography').click(() => {
        $('html, body').animate({'scrollTop': $('#Biography').offset().top}, 1500);
        $('.summary').css('left', '-150%');
    });

    $('.js-BandForm').click(() => {
        $('html, body').animate({'scrollTop': $('#BandForm').offset().top}, 1500);
        $('.summary').css('left', '-150%');
    });

    $('.js-CommBre').click(() => {
        $('html, body').animate({'scrollTop': $('#CommBre').offset().top}, 1500);
        $('.summary').css('left', '-150%');
    });

    $('.js-MaiSuc').click(() => {
        $('html, body').animate({'scrollTop': $('#MaiSuc').offset().top}, 1500);
        $('.summary').css('left', '-150%');
    });

    $('.js-ComDec').click(() => {
        $('html, body').animate({'scrollTop': $('#ComDec').offset().top}, 1500);
        $('.summary').css('left', '-150%');
    });

    $('.js-TheLov').click(() => {
        $('html, body').animate({'scrollTop': $('#TheLov').offset().top}, 1500);
        $('.summary').css('left', '-150%');
    });

    $('.js-Reformation').click(() => {
        $('html, body').animate({'scrollTop': $('#Reformation').offset().top}, 1500);
        $('.summary').css('left', '-150%');
    });

    $('.js-RedVel').click(() => {
        $('html, body').animate({'scrollTop': $('#RedVel').offset().top}, 1500);
        $('.summary').css('left', '-150%');
    });

    $('.js-RocAnd').click(() => {
        $('html, body').animate({'scrollTop': $('#RocAnd').offset().top}, 1500);
        $('.summary').css('left', '-150%');
    });

    $('.js-ConAnd').click(() => {
        $('html, body').animate({'scrollTop': $('#ConAnd').offset().top}, 1500);
        $('.summary').css('left', '-150%');
    });

    $('.js-Legacy').click(() => {
        $('html, body').animate({'scrollTop': $('#Legacy').offset().top}, 1500);
        $('.summary').css('left', '-150%');
    });

});
