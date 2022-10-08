import galacticAgeCalculator from '../src/js/galacticAgeCalculator.js';

describe("galacticAgeCalculator", () => {
  
  let galacticAge;

  beforeEach(() => {
    galacticAge = new galacticAgeCalculator(40,"Male");
  });
  
  test("should correctly create a galacticAgeCalculator object with user's sex and age", () => {
    expect(galacticAge.age).toEqual(40);
    expect(galacticAge.sex).toEqual("Male");
  });

  test("should correctly return user's age in Mercury years", () => {
    expect(galacticAge.getMercuryAge()).toEqual(166.67);
    
  });
});