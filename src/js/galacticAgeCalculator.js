export default class galacticAgeCalculator {
  constructor(age,sex) { 
    this.age = age;
    this.sex = sex;
  } 

  getMercuryAge() {
    let mercAge = this.age /.24;
    return parseFloat(mercAge.toFixed(2));
  }

  getVenusAge() {
    let venuAge = this.age /.62;
    return parseFloat(venuAge.toFixed(2));
  }

  getMarsAge() {
    let marsAge = this.age /1.88;
    return parseFloat(marsAge.toFixed(2));
  }

  getJupiterAge() {
    let jupiAge = this.age /11.86;
    return parseFloat(jupiAge.toFixed(2));
  }
}