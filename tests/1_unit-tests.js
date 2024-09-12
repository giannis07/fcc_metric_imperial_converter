const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('getNum', function() {

        test('whole number', function() {
            assert.equal(convertHandler.getNum('8kg'), 8);
          });
        test('decimal number', function() {
            assert.equal(convertHandler.getNum('8.5kg'), 8.5);
          });
        test('fractional input', function() {
            assert.equal(convertHandler.getNum('8/3kg'), 8/3);
          });

        test('fractional input with a decimal', function() {
          assert.equal(convertHandler.getNum('8/3.5kg'), 8/3.5);
        });


        test(' error on a double-fraction', function() {
          assert.equal(convertHandler.getNum('3/2/2kg'), null);
        });
        test('1 when no numerical input is provided', function() {
          assert.equal(convertHandler.getNum('kg'), 1);
        });
        test('', function() {
          assert.equal(convertHandler.getNum('kg'), 1);
        });
    
        
      });

    suite('getUnit', function(){
        test('get unit gal', function() {
            assert.equal(convertHandler.getUnit("5gal"), "gal");
        });

        test('get unit L', function() {
            assert.equal(convertHandler.getUnit("5L"), "L");
        });

        test('get unit mi', function() {
            assert.equal(convertHandler.getUnit("5mi"), "mi");
        });

        test('get unit km', function() {
            assert.equal(convertHandler.getUnit("5km"), "km");
        });

        test('get unit lbs', function() {
            assert.equal(convertHandler.getUnit("5lbs"), "lbs");
        });

        test('get unit kg', function() {
            assert.equal(convertHandler.getUnit("5kg"), "kg");
        });

        test('get error for invalid unit', function() {
            assert.equal(convertHandler.getUnit("5kk"), null);
        });
    });

    suite('getReturnUnit', function() {
        test('return unit for "L"', function() {
            assert.equal(convertHandler.getReturnUnit('L'), 'gal');
        });

        test('return unit for "gal"', function() {
            assert.equal(convertHandler.getReturnUnit('gal'), 'L');
        });

        test('return unit for "kg"', function() {
            assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
        });

        test('return unit for "lbs"', function() {
            assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
        });

        test('return unit for "km"', function() {
            assert.equal(convertHandler.getReturnUnit('km'), 'mi');
        });

        test('return unit for "mi"', function() {
            assert.equal(convertHandler.getReturnUnit('mi'), 'km');
        });
    });

    suite('spellOutUnit', function() {
        test('return spelled-out unit for "L"', function() {
            assert.equal(convertHandler.spellOutUnit('L'), 'liters');
        });

        test('return spelled-out unit for "gal"', function() {
            assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
        });

        test('return spelled-out unit for "kg"', function() {
            assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
        });

        test('return spelled-out unit for "lbs"', function() {
            assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
        });

        test('return spelled-out unit for "km"', function() {
            assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
        });

        test('return spelled-out unit for "mi"', function() {
            assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
        });
    });


    suite('convert', function() {
        test('convert gal to L', function() {
            const galnum = 10;
            const expectedL = galnum * 3.78541; 
            const result = convertHandler.convert(galnum, 'gal');
            assert.approximately(result, expectedL, 0.00001);
        
        });
        test('convert L to gal', function() {
            const Lnum = 10;
            const expectedGal = Lnum * (1 / 3.78541); // Επιστρέφει λίτρα σε γαλόνια
            const result = convertHandler.convert(Lnum, 'L');
            assert.approximately(result, expectedGal, 0.00001);
        });
        test('convert mi to km', function() {
            const minum = 10;
            const expectedKm = minum * 1.60934; // Επιστρέφει μίλια σε χιλιόμετρα
            const result = convertHandler.convert(minum, 'mi');
            assert.approximately(result, expectedKm, 0.00001);
        });
        test('convert km to mi', function() {
            const kmnum = 10;
            const expectedMi = kmnum * (1 / 1.60934); // Επιστρέφει χιλιόμετρα σε μίλια
            const result = convertHandler.convert(kmnum, 'km');
            assert.approximately(result, expectedMi, 0.00001);
        });
        test('convert lbs to kg', function() {
            const lbsnum = 10;
            const expectedKg = lbsnum * 0.453592; // Επιστρέφει λίβρες σε κιλά
            const result = convertHandler.convert(lbsnum, 'lbs');
            assert.approximately(result, expectedKg, 0.00001);
        });
        test('convert kg to lbs', function() {
            const kgnum = 10;
            const expectedLbs = kgnum * (1 / 0.453592); // Επιστρέφει κιλά σε λίβρες
            const result = convertHandler.convert(kgnum, 'kg');
            assert.approximately(result, expectedLbs, 0.00001);
        });   
        
    });



});