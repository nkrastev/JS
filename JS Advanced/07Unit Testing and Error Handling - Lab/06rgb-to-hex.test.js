const assert = require("chai").assert;
const expect= require("chai").assert;
const rgbToHexColor = require('./rgb-to-hex');

/*Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
Return undefined if any of the input parameters are of invalid type or not in the expected range*/


describe("RGB Tests", function () {
    // it("Check RED is valid 1", function () {
    //     assert(rgbToHexColor(37, 5,5).length==7);           
    // });
    it("Check RED is valid 2", function () {
        assert(rgbToHexColor(255, 255,255).length==7);           
    });
    it("Check RED is IN valid negative number", function () {
        assert(rgbToHexColor(-5, 255,255)==undefined);           
    });
    it("Check green is valid 1", function () {
        assert(rgbToHexColor(5, 5,5).length==7);           
    });
    it("Check green is valid 2", function () {
        assert(rgbToHexColor(5, 255,255).length==7);           
    });
    it("Check green is IN valid negative number", function () {
        assert(rgbToHexColor(5, -5,255)==undefined);           
    });
    it("Check blue is valid 1", function () {
        assert(rgbToHexColor(5, 5,5).length==7);           
    });
    it("Check blue is valid 2", function () {
        assert(rgbToHexColor(5, 255,255).length==7);           
    });
    it("Check blue is IN valid negative number", function () {
        assert(rgbToHexColor(5, 5,-7)==undefined);           
    });
    it("Check with non Integers", function () {
        assert(rgbToHexColor(5, 5, 5.5)==undefined);           
    });
    it("Check Starts With", function () {                
        assert(rgbToHexColor(5, 5, 5).startsWith('#0')==true);           
    });
    it("Check Uppercase", function () {                
        assert(rgbToHexColor(5, 5, 5)===rgbToHexColor(5, 5, 5).toUpperCase());           
    });

    //?!?
    it("Check invalid invalid  ", function () {
        assert(rgbToHexColor(-1, 1,1)==undefined);           
    });
    it("Check invalid numbers  ", function () {
        assert(rgbToHexColor(300, 1,1)==undefined);           
    });
    it("Check invalid invalid  ", function () {
        assert(rgbToHexColor(1, -1,1)==undefined);           
    });
    it("Check invalid numbers  ", function () {
        assert(rgbToHexColor(1, 301,1)==undefined);           
    });
    it("Check invalid invalid  ", function () {
        assert(rgbToHexColor(1, 1,-1)==undefined);           
    });
    it("Check invalid numbers  ", function () {
        assert(rgbToHexColor(1, 1,301)==undefined);           
    });

    //one by one to test NON integer
    it("Check invalid numbers  ", function () {
        assert(rgbToHexColor(1.1, 1,1)==undefined);           
    });
    it("Check invalid numbers  ", function () {
        assert(rgbToHexColor(1, 1.1,1)==undefined);           
    });
    it("Check invalid numbers  ", function () {
        assert(rgbToHexColor(1, 1,1.1)==undefined);           
    });
    //valid color 742727
    
    it("Check invalid numbers  ", function () {
        assert(rgbToHexColor(116, 39,39)=='#742727');           
    });

    
    it("Check invalid input  ", function () {
        assert(rgbToHexColor('dimitrichko', 39,39)==undefined);           
    });
    it("Check invalid input  ", function () {
        assert(rgbToHexColor(39, 'dimitrichko',39)==undefined);           
    });
    it("Check invalid input  ", function () {
        assert(rgbToHexColor(39, 39,'dimitrichko')==undefined);           
    });

    it("Check invalid input  ", function () {
        assert(rgbToHexColor(39, 39,[1,2,3])==undefined);           
    });

    it("Check invalid input  ", function () {
        assert(rgbToHexColor(39, 39,{dimitri4ko:3})==undefined);           
    });
    it("Check invalid input  ", function () {
        assert(rgbToHexColor(39, 39,'1')==undefined);           
    });

    //*(&%(@#%@*(%#))) пак малоумни условия, няма да има тест дали резултата е 7 символа дължина, ама ще тествате точно белия цвят...
    it("Valid", function () {
        assert(rgbToHexColor(0,0,0)=='#000000');           
    });

    // it("Valid", function () {
    //     assert(rgbToHexColor(255,255,255)=='#FFFFFF');           
    // });

});
