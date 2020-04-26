import DATA from "./data.js";

const cipher = (offset, string) => string.split('').map(char => asciiToString(char, offset)).join('');

const asciiToString = (char, offset) => {
  const code = char.charCodeAt()
  const isUpperCase = code >= DATA.UPPERCASE.MIN && code <= DATA.UPPERCASE.MAX ? DATA.UPPERCASE.MIN : false;
  const isLowerCase = code >= DATA.LOWERCASE.MIN && code <= DATA.LOWERCASE.MAX ? DATA.LOWERCASE.MIN : false ;
  
  return isUpperCase || isLowerCase ? String.fromCharCode(offsetCalc(code, isUpperCase || isLowerCase, offset)) : char;
}

const offsetCalc = (code, minCode, offset) => ((((code - minCode + offset) % DATA.ALPHABET_SIZE) + DATA.ALPHABET_SIZE) % DATA.ALPHABET_SIZE) + minCode;

export default cipher;