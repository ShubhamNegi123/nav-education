$(function () {

    $('.fee-strucutre .tution-fee td:nth-child(2)').each(function () {
        var numberOfElements=0;
        $('.description th').each(function(){
            numberOfElements++;
        });
        for (let i = 2; i <= numberOfElements; i++) {
            var totalFee = 0;



            //    getting values
            var tutionFee = $('.fee-strucutre .tution-fee td:nth-child(' + i + ')').text();
            if (!isNaN(tutionFee)) {
                // adding values
                totalFee = totalFee + parseInt(tutionFee);
            }

            //getting values
            var hostalFee = $('.fee-strucutre .hostal-fee td:nth-child(' + i + ')').text();
            // adding values
            if (!isNaN(hostalFee)) {
                totalFee = totalFee + parseInt(hostalFee);
            }



            //    getting values
            var majorFee = $('.fee-strucutre .major-fee td:nth-child(' + i + ')').text();
            // adding values
            if (!isNaN(majorFee)) {
                totalFee = totalFee + parseInt(majorFee);
            }




            // show  totel values
            $('.fee-strucutre .totel-fee td:nth-child(' + i + ')').text(totalFee);



        }


    });
});