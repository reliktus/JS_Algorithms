
function convertToRoman(num) {
    var roman ="";
    var numArr = num.toString().split('').map(function(num) {
        return num * 1;
    });

    function numberOne(data) {
        for ( var i=0; i < data; i++) {
            roman += "M";
        }
    }

    function numberTwo(data) {
        if ( data <= 3) {
            for ( var i=0; i < data; i++) {
                roman += "C";
            }
        } else if ( data === 4 ) {
            roman += "CD";
        } else if ( data < 9) {
            roman += "D";
            for ( i=0; i < (data-5) && data > 5; i++) {
                roman += "C";
            }
        } else {
            roman += "CM";
        }
    }

    function numberThree(data) {
        if ( data <= 3) {
            for ( var i=0; i < data; i++) {
                roman += "X";
            }
        } else if ( data === 4 ) {
            roman += "XL";
        } else if ( data < 9) {
            roman += "L";
            for ( i=0; i < (data-5) && data > 5; i++) {
                roman += "X";
            }
        } else {
            roman += "XC";
        }
    }

    function numberFour(data) {
        if ( data <= 3) {
            for ( var i=0; i < data; i++) {
                roman += "I";
            }
        } else if ( data === 4 ) {
            roman += "IV";
        } else if ( data < 9) {
            roman += "V";
            for ( i=0; i < (data-5) && data > 5; i++) {
                roman += "I";
            }
        } else {
            roman += "IX";
        }
    }

    function checkArr() {
        if ( numArr.length >= 4 )
        {
            numberOne(numArr[0]);
            numberTwo(numArr[1]);
            numberThree(numArr[2]);
            numberFour(numArr[3]);
        }
        else if ( numArr.length === 3 )
        {
            numberTwo(numArr[0]);
            numberThree(numArr[1]);
            numberFour(numArr[2]);
        }
        else if ( numArr.length === 2 )
        {
            numberThree(numArr[0]);
            numberFour(numArr[1]);
        }
        else
        {
            numberFour(numArr[0]);
        }
    }

    checkArr();
    return roman;
}

convertToRoman(97);
