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
            var registration = $('.fee-strucutre .registration td:nth-child(' + i + ')').text();
            // adding values
            if (!isNaN(registration)) {
                totalFee = totalFee + parseInt(registration);
            }

            //    getting values
            var insurence = $('.fee-strucutre .insurence td:nth-child(' + i + ')').text();
            // adding values
            if (!isNaN(insurence)) {
                totalFee = totalFee + parseInt(insurence);
            }
            //    getting values
            var rp = $('.fee-strucutre .rp td:nth-child(' + i + ')').text();
            // adding values
            if (!isNaN(rp)) {
                totalFee = totalFee + parseInt(rp);
            }
            var medical = $('.fee-strucutre .medical td:nth-child(' + i + ')').text();
            // adding values
            if (!isNaN(medical)) {
                totalFee = totalFee + parseInt(medical);
            }

            var bedding = $('.fee-strucutre .bedding td:nth-child(' + i + ')').text();
            // adding values
            if (!isNaN(bedding)) {
                totalFee = totalFee + parseInt(bedding);
            }


            var deposit = $('.fee-strucutre .deposit td:nth-child(' + i + ')').text();
            // adding values
            if (!isNaN(deposit)) {
                totalFee = totalFee + parseInt(deposit);
            }

            var remarks = $('.fee-strucutre .remarks td:nth-child(' + i + ')').text();
            // adding values
            if (!isNaN(remarks)) {
                totalFee = totalFee + parseInt(remarks);
            }




            // show  totel values
            $('.fee-strucutre .totel-fee td:nth-child(' + i + ')').html(`${totalFee} <i class="fas fa-dollar-sign"></i>`);



        }


    });
});