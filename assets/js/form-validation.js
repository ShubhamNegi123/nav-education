$(function () {




    /* form first name validation */
    $("#first-name").on("blur", function () {
        if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $('.fname-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.fname-error').css({
                visibility: 'visible',
                opacity: 1,
                color: 'red'
            });
            $('.fname-error').text('Enter a valid name');
        }
    });


    /* form last name validation */
    $("#last-name").on("blur", function () {
        if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $('.lname-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.lname-error').css({
                visibility: 'visible',
                opacity: 1,
                color: 'red'
            });
            $('.lname-error').text('Enter a valid name');
        }
    });


    /* form father name validation */
    $("#father-name").on("blur", function () {
        if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $('.father-name-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.father-name-error').css({
                visibility: 'visible',
                opacity: 1,
                color: 'red'
            });
            $('.father-name-error').text('Enter a valid name');
        }
    });


    /* form mother name validation */
    $("#mother-name").on("blur", function () {
        if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $('.mother-name-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.mother-name-error').css({
                visibility: 'visible',
                opacity: 1,
                color: 'red'
            });
            $('.mother-name-error').text('Enter a valid name');
        }
    });


    /* form nationality validation */
    $("#nationality").on("blur", function () {
        if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $('.nationality-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.nationality-error').css({
                visibility: 'visible',
                opacity: 1,
                color: 'red'
            });
            $('.nationality-error').text('Enter a valid country name');
        }
    });

    /* dob validation */
    $('#dob').on("blur", function () {
        let dob = $('#dob').val();
        console.log(dob);
        if (dob == 0) {
            $('.dob-error').css({
                visibility: 'visible',
                opacity: 1,
                color: 'red'
            });
            $('.dob-error').text('Enter a valid date of birth');

        } else {
            $('.dob-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    });


    /* ssc validation *//*
            |
            |
            |
           \ /
*/


    /* ssc-tenth-year */
    /* $("#ssc-tenth-year").on("blur", function () {
        let percentage = $("#ssc-tenth-percentage").val();
        var phoneno = /[1-9]{/;
        if (percentage.match(phoneno)){
            alert("success");
        }else {
            alert("failer");
        }
    }); */





});