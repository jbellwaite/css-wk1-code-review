import { Age, AgeSeconds } from './../js/scripts.js';


describe('Age', function() {

  it ('should convert a persons age into seconds', function() {
    let age = new Age (1988, 3, 9, 2017, 11, 17);
    age.currentAgeCalculator();
    expect(age.age).toEqual(938217600);
  })

  it('should convert the time between two dates into seconds', function() {
    let age = new Age(1988, 3, 9, 2017, 11, 17);
    age.currentAgeCalculator();
    expect(age.age).toEqual(938217600);
  });

  it ('should convert a persons Earth age to their Mercury age', function() {
    let age = new Age (1988, 3, 9, 2017, 11, 17);
    age.currentAgeCalculator();
    expect(age.mercuryAge).toEqual('123.96');
  });

  it ('should convert a persons Earth age to their Venus age', function() {
    let age = new Age (1988, 3, 9, 2017, 11, 17);
    age.currentAgeCalculator();
    expect(age.venusAge).toEqual('47.98');
  });

  it ('should convert a persons Earth age to their Mars age', function() {
    let age = new Age (1988, 3, 9, 2017, 11, 17);
    age.currentAgeCalculator();
    expect(age.marsAge).toEqual('15.82');
  });

  it ('should convert a persons Earth age to their Jupiter age', function() {
    let age = new Age (1988, 3, 9, 2017, 11, 17);
    age.currentAgeCalculator();
    console.log(age.jupiterAge);
    expect(age.jupiterAge).toEqual('2.51');
  });

  it('should estimate the remaining number of years the user has left to live on Earth', function() {
    let age = new Age (1988, 3, 9, 2017, 11, 17);
    age.currentAgeCalculator();
    expect(age.lifeLeft).toBeLessThan(50);
  });




});
