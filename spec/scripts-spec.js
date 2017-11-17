import { Age, AgeSeconds } from './../js/scripts.js';


describe('Age', function() {

  it ('should convert a persons age into seconds', function() {
    let age = new Age (29);
    expect(age.ageCalculator()).toEqual(914544000);
  })

  it('should convert the time between two dates into seconds', function() {
    let age = new AgeSeconds(1988, 3, 9, 2017, 11, 17);
    expect(age.currentAgeCalculator()).toEqual(938217600);
  });


});
