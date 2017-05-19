class SerialNumber {
  constructor(){
    this._currentNumber = SerialNumber.INITIAL;
  }

  validateShowNumber(number){
    return /^[0-9A-HJ-KM-NP-Z]{10}$/.test(String(number));
  }

  showCurrentNumber(){
    return this.translateNumberForShow(this._currentNumber);
  }

  translateNumberFromCount(number){
    return Number(number).toString(SerialNumber.RADIX).toUpperCase();
  }

  translateNumberFromShow(number){
    let invertedMap = this.invertMap(SerialNumber.MAP);
    if(this.validateShowNumber(number)){
      return number.split('').map((c)=> invertedMap[c]).join('');
    }
    else {
      throw new Error('your input is invalid!');
    }
  }

  invertMap(jsonObj){
    let newObj = {};
    return Object.keys(jsonObj).reduce((object, key)=> (newObj[jsonObj[key]] = key, newObj), newObj)
  }

  translateNumberForShow(number){
    let _number = String(number);
    let leftPadZeros = '';
    if(_number.length < 10){
      leftPadZeros = new Array(10 - _number.length).fill('0').join('');
    }
    return leftPadZeros + _number.split('').map((c)=> SerialNumber.MAP[c]).join('');
  }

  translateNumberForCount(number){
    return parseInt(number, SerialNumber.RADIX);
  }

  increaseNumber(n = 1){
    this._currentNumber = (this.translateNumberForCount(this._currentNumber) + n).toString(SerialNumber.RADIX);
  }

  getNumber(start = this._currentNumber, count){
    return this.translateNumberForShow(this.translateNumberFromCount(this.translateNumberForCount(start) + count));
  }

  getCount(start, end){
    if(!start 
      || !end 
      || !this.validateShowNumber(start) 
      || !this.validateShowNumber(end)){
      throw new Error('your input is invalid!');
    }
    return this.translateNumberForCount(this.translateNumberFromShow(end)) - this.translateNumberForCount(this.translateNumberFromShow(start));
  }  

}

SerialNumber.INITIAL = '0';

SerialNumber.RADIX = 33;

SerialNumber.MAP = {
  '0':'0',
  '1':'1',
  '2':'2',
  '3':'3',
  '4':'4',
  '5':'5',
  '6':'6',
  '7':'7',
  '8':'8',
  '9':'9',
  'A':'A',
  'B':'B',
  'C':'C',
  'D':'D',
  'E':'E',
  'F':'F',
  'G':'G',
  'H':'H',
  'I':'J',
  'J':'K',
  'K':'M',
  'L':'N',
  'M':'P',
  'N':'Q',
  'O':'R',
  'P':'S',
  'Q':'T',
  'R':'U',
  'S':'V',
  'T':'W',
  'U':'X',
  'V':'Y',
  'W':'Z'
}

module.exports.SerialNumber = SerialNumber;