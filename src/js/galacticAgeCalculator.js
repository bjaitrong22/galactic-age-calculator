export default class galacticAgeCalculator {
  constructor(age,sex,avrgLfeExpctncy) { 
    this.age = age;
    this.sex = sex;
    this.avrgLfeExpctncy = avrgLfeExpctncy;
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

  getMercuryLfeExpctncy() {
    let mercLfeExpctncy = (this.avrgLfeExpctncy-this.age)/.24;

    if (mercLfeExpctncy > 0){
      return "Your life expectancy on Mercury is " + mercLfeExpctncy.toFixed(0) + " Mercury years";
    } 
    

  }
}

