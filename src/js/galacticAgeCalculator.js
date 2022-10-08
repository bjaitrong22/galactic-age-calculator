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

    if (mercLfeExpctncy > 0) {
      return "Your life expectancy on Mercury is " + mercLfeExpctncy.toFixed(0) + " Mercury years";
    }else {
      let positiveMercLfeExpctncy = -1 * (mercLfeExpctncy.toFixed(0));
      return "You have lived " + positiveMercLfeExpctncy + " Mercury years beyond the average life expectancy." 
    } 

  }
    
  getVenusLfeExpctncy() {   
    let venuLfeExpctncy = (this.avrgLfeExpctncy-this.age)/.62;

    if (venuLfeExpctncy > 0) {
      return "Your life expectancy on Venus is " + venuLfeExpctncy.toFixed(0) + " Venus years";
    }else {
      let positiveVenuLfeExpctncy = -1 * (venuLfeExpctncy.toFixed(0));
      return "You have lived " + positiveVenuLfeExpctncy + " Venus years beyond the average life expectancy." 
    }
  }

  getMarsLfeExpctncy() {
    let marsLfeExpctncy = (this.avrgLfeExpctncy-this.age)/1.88;

    if(marsLfeExpctncy > 0){
      return "Your life expectancy on Mars is " + marsLfeExpctncy.toFixed(0) + " Mars years";
    }else {
      let positiveMarsLfeExpctncy = -1 * (marsLfeExpctncy.toFixed(0));
      return "You have lived " + positiveMarsLfeExpctncy + " Mars years beyond the average life expectancy."
    }
  }

  getJupiLfeExpctncy() {
    let jupiLfeExpctncy = (this.avrgLfeExpctncy-this.age)/11.86;
    
    if(jupiLfeExpctncy > 0){
      return "Your life expectancy on Jupiter is " + jupiLfeExpctncy.toFixed(0) + " Jupiter years";
    } else {
      let positiveJupiLfeExpctncy = -1 * (jupiLfeExpctncy.toFixed(0));
      return "You have lived " + positiveJupiLfeExpctncy + " Jupiter years beyond the average life expectancy."
    }
  }
}

