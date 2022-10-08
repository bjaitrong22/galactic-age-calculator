import galacticAgeCalculator from '../src/js/galacticAgeCalculator.js';

describe("galacticAgeCalculator", () => {
  
  let galacticAge;

  beforeEach(() => {
    galacticAge = new galacticAgeCalculator(40,"Male", 76);
  });
  
  test("should correctly create a galacticAgeCalculator object with user's sex and age", () => {
    expect(galacticAge.age).toEqual(40);
    expect(galacticAge.sex).toEqual("Male");
  });

  test("should correctly return user's age in Mercury years", () => {
    expect(galacticAge.getMercuryAge()).toEqual(166.67); 
  });

  test("should correctly return user's age in Venus years", () => {
    expect(galacticAge.getVenusAge()).toEqual(64.52);
  });

  test("should correctly return user's age in Mars years", () => {
    expect(galacticAge.getMarsAge()).toEqual(21.28);
  });

  test("should correctly return user's age in Jupiter years", () => {
    expect(galacticAge.getJupiterAge()).toEqual(3.37);
  });

  test("should correctly return user's time left to live on Mercury", () => {
    expect(galacticAge.getMercuryLfeExpctncy()).toEqual("Your life expectancy on Mercury is " + 150 + " Mercury years");
  });

  test("should correctly return user's time left to live on Venus", () => {
    expect(galacticAge.getVenusLfeExpctncy()).toEqual("Your life expectancy on Venus is " + 58 + " Venus years");
  });

  test("should correctly return user's time left to live on Mars", () => {
    expect(galacticAge.getMarsLfeExpctncy()).toEqual("Your life expectancy on Mars is " + 19 + " Mars years");
  });

  test("should correctly return user's time left to live on Jupiter", () => {
    expect(galacticAge.getJupiLfeExpctncy()).toEqual("Your life expectancy on Jupiter is " + 3 + " Jupiter years");
  });

});