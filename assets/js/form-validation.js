$(function () {




    /* form first name validation */
    $("#first-name").on("blur", function () {
        if ($(this).val() == '') {
            $('.fname-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.fname-error').text('Please fill out this field');

        } else if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $('.fname-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.fname-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.fname-error').text('Enter a valid name');
        }
    });


    /* form last name validation */
    $("#last-name").on("blur", function () {
        if ($(this).val() == '') {
            $('.lname-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.lname-error').text('Please fill out this field');

        } else if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $('.lname-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.lname-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.lname-error').text('Enter a valid name');
        }
    });


    /* form father name validation */
    $("#father-name").on("blur", function () {
        if ($(this).val() == '') {
            $('.father-name-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.father-name-error').text('Please fill out this field');

        } else if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $('.father-name-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.father-name-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.father-name-error').text('Enter a valid name');
        }
    });


    /* form mother name validation */
    $("#mother-name").on("blur", function () {
        if ($(this).val() == '') {
            $('.mother-name-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.mother-name-error').text('Please fill out this field');

        } else if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $('.mother-name-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.mother-name-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.mother-name-error').text('Enter a valid name');
        }
    });


    /* form nationality validation */
    $("#nationality").on("blur", function () {
        if ($(this).val() == '') {
            $('.nationality-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.nationality-error').text('Please fill out this field');

        } else if ($(this).val().match('^[a-zA-Z]{3,16}$')) {
            $('.nationality-error').css({
                visibility: 'hidden',
                opacity: 0
            })
        } else {
            $('.nationality-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.nationality-error').text('Enter a valid country name');
        }
    });

    /* dob validation */
    $('#dob').on("blur", function () {
        if ($(this).val() == '') {
            $('.dob-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.dob-error').text('Please fill out this field');

        } else if ($(this).val() == 0) {
            $('.dob-error').css({
                visibility: 'visible',
                opacity: 1,
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


$("#ssc-board").on("blur", function () {
    if ($(this).val() == '') {
        $('.ssc-board-error').css({
            visibility: 'visible',
            opacity: 1,
        });
        $('.ssc-board-error').text('Please fill out this field');

    }else {
        $('.ssc-board-error').css({
            visibility: 'hidden',
                opacity: 0
        });        
    }
});

$("#hsc-board").on("blur", function () {
    if ($(this).val() == '') {
        $('.hsc-board-error').css({
            visibility: 'visible',
            opacity: 1,
        });
        $('.hsc-board-error').text('Please fill out this field');

    }else {
        $('.hsc-board-error').css({
            visibility: 'hidden',
                opacity: 0
        });      
    }
});

    /* tenth-percentage  */
    $('#ssc-tenth-percentage').on("blur", function () {
        if ($(this).val() == '') {
            $('.ssc-tenth-percentage-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.ssc-tenth-percentage-error').text('Please fill out this field');

        } else if ($(this).val().match(/^(100(\.0{1,2})?|([0-9]?[0-9](\.[0-9]{1,2})))$/)) {
            $('.ssc-tenth-percentage-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        } else {
            $('.ssc-tenth-percentage-error').text('Use the format 00.00');
            $('.ssc-tenth-percentage-error').css({
                visibility: 'visible',
                opacity: 1
            });
        }
    });


    /* hsc tenth-percentage */
    $('#hsc-tenth-percentage').on("blur", function () {
        if ($(this).val() == '') {
            $('.hsc-tenth-percentage-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.hsc-tenth-percentage-error').text('Please fill out this field');

        } else if ($(this).val().match(/^(100(\.0{1,2})?|([0-9]?[0-9](\.[0-9]{1,2})))$/)) {
            $('.hsc-tenth-percentage-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        } else {
            $('.hsc-tenth-percentage-error').text('Use the format 00.00');
            $('.hsc-tenth-percentage-error').css({
                visibility: 'visible',
                opacity: 1
            });
        }
    });
    $('#pcb-percentage').on("blur", function () {
        if ($(this).val() == '') {
            $('.pcb-percentage-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.pcb-percentage-error').text('Please fill out this field');

        } else if (percentage.match(/^(100(\.0{1,2})?|([0-9]?[0-9](\.[0-9]{1,2})))$/)) {
            $('.pcb-percentage-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        } else {
            $('.pcb-percentage-error').text('Use the format 00.00');
            $('.pcb-percentage-error').css({
                visibility: 'visible',
                opacity: 1
            });
        }
    });
    $('#aggregate').on("blur", function () {
        if ($(this).val() == '') {
            $('.aggregate-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.aggregate-error').text('Please fill out this field');

        } else if (percentage.match(/^(100(\.0{1,2})?|([0-9]?[0-9](\.[0-9]{1,2})))$/)) {
            $('.aggregate-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        } else {
            $('.aggregate-error').text('Use the format 00.00');
            $('.aggregate-error').css({
                visibility: 'visible',
                opacity: 1
            });
        }
    });



    /* tenth year */
    $('#ssc-tenth-year').on("blur", function () {
        if ($(this).val() == '') {
            $('.ssc-tenth-year-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.ssc-tenth-year-error').text('Please fill out this field');

        } else if (year.match(/^[0-9]{4}$/)) {
            $('.ssc-tenth-year-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        } else {
            $('.ssc-tenth-year-error').text('Enter valid year');
            $('.ssc-tenth-year-error').css({
                visibility: 'visible',
                opacity: 1
            });
        }
    });
    /* hsc */
    $('#hsc-tenth-year').on("blur", function () {
        if ($(this).val() == '') {
            $('.hsc-tenth-year-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.hsc-tenth-year-error').text('Please fill out this field');

        } else if (year.match(/^[0-9]{4}$/)) {
            $('.hsc-tenth-year-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        } else {
            $('.hsc-tenth-year-error').text('Enter valid year');
            $('.hsc-tenth-year-error').css({
                visibility: 'visible',
                opacity: 1
            });
        }
    });
    $('#neet-exam-year').on("blur", function () {
        if ($(this).val() == '') {
            $('.neet-exam-year-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.neet-exam-year-error').text('Please fill out this field');

        } else if (year.match(/^[12][0-9]{3}$/)) {
            $('.neet-exam-year-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        } else {
            $('.neet-exam-year-error').text('Enter valid year');
            $('.neet-exam-year-error').css({
                visibility: 'visible',
                opacity: 1
            });
        }
    });

    /* tenth marks */
    $('#ssc-tenth-marks').on("blur", function () {
        let stm = $(this).val();
        stm = parseInt(stm);
        if ($(this).val() == '') {
            $('.ssc-tenth-marks-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.ssc-tenth-marks-error').text('Please fill out this field');

        } else {
            $('.ssc-tenth-marks-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    });
    /* hsc */
    $('#hsc-tenth-marks').on("blur", function () {
        let stm = $(this).val();
        stm = parseInt(stm);
        if ($(this).val() == '') {
            $('.hsc-tenth-marks-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.hsc-tenth-marks-error').text('Please fill out this field');

        } else if (isNaN(stm)) {
            $('.hsc-tenth-marks-error').text('Enter valid marks');
            $('.hsc-tenth-marks-error').css({
                visibility: 'visible',
                opacity: 1
            });
        } else {
            $('.hsc-tenth-marks-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    });
    $('#neet-marks').on("blur", function () {
        let stm = $(this).val();
        stm = parseInt(stm);
        if ($(this).val() == '') {
            $('.neet-marks-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.neet-marks-error').text('Please fill out this field');

        } else if (isNaN(stm)) {
            $('.neet-marks-error').text('Enter valid marks');
            $('.neet-marks-error').css({
                visibility: 'visible',
                opacity: 1
            });
        } else {
            $('.neet-marks-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    });


    $('#ssc-marks-out-of').on("blur", function () {
        let stm = $(this).val();
        stm = parseInt(stm);
        if ($(this).val() == '') {
            $('.ssc-marks-uot-of-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.ssc-marks-uot-of-error').text('Please fill out this field');

        } else if (isNaN(stm)) {
            $('.ssc-marks-uot-of-error').text('Enter valid marks');
            $('.ssc-marks-uot-of-error').css({
                visibility: 'visible',
                opacity: 1
            });
        } else {
            $('.ssc-marks-uot-of-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    });
    $('#hsc-marks-out-of').on("blur", function () {
        let stm = $(this).val();
        stm = parseInt(stm);
        if ($(this).val() == '') {
            $('.hsc-marks-out-of-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.hsc-marks-out-of-error').text('Please fill out this field');

        } else if (isNaN(stm)) {
            $('.hsc-marks-out-of-error').text('Enter valid marks');
            $('.hsc-marks-out-of-error').css({
                visibility: 'visible',
                opacity: 1
            });
        } else {
            $('.hsc-marks-out-of-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    });


    $('#physics').on("blur", function () {
        let stm = $(this).val();
        stm = parseInt(stm);
        if ($(this).val() == '') {
            $('.physics-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.physics-error').text('Please fill out this field');

        } else if (isNaN(stm)) {
            $('.physics-error').text('Enter valid marks');
            $('.physics-error').css({
                visibility: 'visible',
                opacity: 1
            });
        } else {
            $('.physics-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    });


    $('#chemistry').on("blur", function () {
        let stm = $(this).val();
        stm = parseInt(stm);
        if ($(this).val() == '') {
            $('.chemistry-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.chemistry-error').text('Please fill out this field');

        } else if (isNaN(stm)) {
            $('.chemistry-error').text('Enter valid marks');
            $('.chemistry-error').css({
                visibility: 'visible',
                opacity: 1
            });
        } else {
            $('.chemistry-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    });

    $('#biology').on("blur", function () {
        let stm = $(this).val();
        stm = parseInt(stm);
        if ($(this).val() == '') {
            $('.biology-error').css({
                visibility: 'visible',
                opacity: 1,
            });
            $('.biology-error').text('Please fill out this field');

        } else if (isNaN(stm)) {
            $('.biology-error').text('Enter valid marks');
            $('.biology-error').css({
                visibility: 'visible',
                opacity: 1
            });
        } else {
            $('.biology-error').css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    });




});