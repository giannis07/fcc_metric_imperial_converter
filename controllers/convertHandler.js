function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let regex = /[\d./]+/g;
    let matchedNum = input.match(regex);

    if (matchedNum) {
      let num = matchedNum[0];
      if (num.includes("/")) {
        let numsplited = num.split("/");
        if (numsplited.length == 2) {
          let numerator = parseFloat(numsplited[0]);
          let denominator = parseFloat(numsplited[1]);
          if (!isNaN(numerator) && !isNaN(denominator) && denominator != 0) {
            result = numerator / denominator;
          } else {
            result = null;
          }
        } else {
          result = null;
        }
      } else result = parseFloat(num);
      if (isNaN(result)) result = null;
    } else {
      result = 1;
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    let regex = /[a-zA-Z]+/g;
    let matchedUnit = input.match(regex);
    const validUnits = ['L', 'gal', 'kg', 'lbs', 'km', 'mi'];

    if (matchedUnit) {
        // Μετατροπή σε lowercase για σύγκριση
        let unit = matchedUnit[0].toLowerCase();
        if (unit === 'l') {
            result = 'L'; // Επιστροφή 'L' για λίτρα
        } else if (validUnits.includes(unit)) {
            result = unit; // Επιστροφή τη μονάδα σε lowercase
        } else {
            result = null; // Μη έγκυρη μονάδα
        }
    } else {
        result = null; // Μη έγκυρη είσοδος
    }

    return result;
};

  
  this.getReturnUnit = function(initUnit) {
    let result;
    const unitsObj = {
      L: 'gal',
      gal: 'L',
      kg: 'lbs',
      lbs: 'kg',
      km: 'mi',
      mi: 'km',
    };
    
    result = unitsObj[initUnit] || null;
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    const wordUnit = {
      L: 'liters',
      gal: 'gallons',
      kg: 'kilograms',
      lbs: 'pounds',
      km: 'kilometers',
      mi: 'miles',
    };
    
    result = wordUnit[unit] || null;
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lToGal = 1 / galToL;
    const lbsToKg = 0.453592;
    const kgToLbs = 1 / lbsToKg;
    const miToKm = 1.60934;
    const kmToMi = 1 / miToKm;
    let result;

    switch (initUnit) {
      case 'L':
        result = (initNum * lToGal).toFixed(5); // Liters to Gallons
        break;
      case 'gal':
        result = (initNum * galToL).toFixed(5); // Gallons to Liters
        break;
      case 'kg':
        result = (initNum * kgToLbs).toFixed(5); // Kilograms to Pounds
        break;
      case 'lbs':
        result = (initNum * lbsToKg).toFixed(5); // Pounds to Kilograms
        break;
      case 'km':
        result = (initNum * kmToMi ).toFixed(5); // Kilometers to Miles
        break;
      case 'mi':
        result = (initNum * miToKm).toFixed(5); // Miles to Kilometers
        break;
      default:
        result = null;
    }
    
    result = parseFloat(result);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    const initUnitString = this.spellOutUnit(initUnit);
    const returnUnitString = this.spellOutUnit(returnUnit);

    if (!initUnitString || !returnUnitString) {
      return 'invalid unit';
    }

    result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
  
    return result;
  };
  
}

module.exports = ConvertHandler;