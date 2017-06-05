function blockSubmitRefresh() {
    $('#form1').submit(function(event){
        event.preventDefault();
    });
}

function convertToRoman(num) {
    var roman ="";
    var numArr = num.toString().split('').map(function(num) {
        return num * 1;
    });

    function numberOne(data) {
        for ( i=0; i < data; i++) {
            roman += "M";
        }
    }

    function numberTransform(data,low,mid,high) {
        if ( data <= 3) {
            for ( i=0; i < data; i++) {
                roman += low;
            }
        } else if ( data === 4 ) {
            roman += low + mid;
        } else if ( data < 9) {
            roman += mid;
            for ( i=0; i < (data-5) && data > 5; i++) {
                roman += low;
            }
        } else {
            roman += low + high;
        }
    }

    function checkArr() {
        if ( numArr.length >= 4 )
        {
            numberOne(numArr[0]);
            numberTransform(numArr[1],"C","D","M");
            numberTransform(numArr[2],"X","L","C");
            numberTransform(numArr[3],"I","V","X");
        }
        else if ( numArr.length === 3 )
        {
            numberTransform(numArr[0],"C","D","M");
            numberTransform(numArr[1],"X","L","C");
            numberTransform(numArr[2],"I","V","X");
        }
        else if ( numArr.length === 2 )
        {
            numberTransform(numArr[0],"X","L","C");
            numberTransform(numArr[1],"I","V","X");
        }
        else
        {
            numberTransform(numArr[0],"I","V","X");
        }
    }


    checkArr();
    $('#romanNumber').html(roman);



}

function buttonConvert() {
    $('#convert').click(function () {
        $('#romanNumber').hide(10);
        var numVal = document.getElementById("toConvert").value;
        convertToRoman(numVal);
        $('#romanNumber').show(500);
    })
}


