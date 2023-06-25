function convertToRoman(num) {
  let romansNum = "";
  function checkNum(number) {
    if(number - 1000 >= 0) {
      return "M";
    }
    else if(number - 900 >= 0) {
      return "CM";
    }
    else if(number - 500 >= 0) {
      return "D";
    }
    else if(number - 400 >= 0) {
      return "CD";
    }
    else if(number - 100 >= 0) {
      return "C";
    }
    else if(number - 90 >= 0) {
      return "XC";
    }
    else if(number - 50 >= 0) {
      return "L";
    }
    else if(number - 40 >= 0) {
      return "XL";
    }
    else if(number - 10 >= 0) {
      return "X";
    }
    else if(number - 9 >= 0) {
      return "IX";
    }
    else if(number - 5 >= 0) {
      return "V";
    }
    else if(number - 4 >= 0) {
      return "IV";
    }
    else if(number - 1 >= 0) {
      return "I";
    }
  }
 for(let i = num; i > 0; i) {
switch(checkNum(i)) {
  case "M":
  i = i - 1000;
  romansNum += "M"
  break;
  case "CM":
  i = i - 900;
  romansNum += "CM"
  break;
  case "D":
  i = i - 500;
  romansNum += "D"
  break;
    case "CD":
  i = i - 400;
  romansNum += "CD"
  break;
  case "C":
  i = i - 100;
  romansNum += "C"
  break;
  case "XC":
  i = i - 90;
  romansNum += "XC"
  break;
  case "L":
  i = i - 50;
  romansNum += "L"
  break;
  case "XL":
  i = i - 40;
  romansNum += "XL"
  break;
  case "X":
  i = i - 10;
  romansNum += "X"
  break;
  case "IX":
  i = i - 9;
  romansNum += "IX"
  break;
  case "V":
  i = i - 5;
  romansNum += "V"
  break;
  case "IV":
  i = i - 4;
  romansNum += "IV"
  break;
  case "I":
  i = i - 1;
  romansNum += "I"
  break;
}
 }
 return romansNum;
}

convertToRoman(36);
