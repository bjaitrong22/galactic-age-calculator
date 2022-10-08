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
    
  }
}