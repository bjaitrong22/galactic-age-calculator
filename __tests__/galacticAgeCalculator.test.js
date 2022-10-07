import galacticAgeCalculator from '../src/js/galacticAgeCalculator.js';

describe("galacticAgeCalculator", () => {

  test("should correctly create a galacticAgeCalculator object with user's sex and age", () => {
    const galacticAge = new galacticAgeCalculator(40,"Male");
    expect(galacticAge.age).toEqual(40);
    expect(galacticAge.sex).toEqual("Male");
  });
});