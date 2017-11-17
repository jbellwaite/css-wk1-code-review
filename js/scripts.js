export class Age {

  constructor(age) {
    this.age = age;
  }
  ageCalculator() {
    let ageinSeconds = this.age*365*86400;
    console.log(ageinSeconds);
    return ageinSeconds;

    
  }
}

export class AgeSeconds {

  constructor (birthYear, birthMonth, birthDay, todayYear, todayMonth, todayDay, age) {
    this.birthYear = birthYear;
    this.birthMonth = birthMonth;
    this.birthDay = birthDay;
    this.todayYear = todayYear;
    this.todayMonth = todayMonth;
    this.todayDay = todayDay;
  }

  currentAgeCalculator() {

    let years = this.todayYear - this.birthYear;
    let month = 0;

    if (this.birthMonth <= this.todayMonth) {
      month = this.todayMonth - this.birthMonth;
    }else {
      month = this.birthMonth - this.todayMonth;
    }
    let days = this.birthDay + this.todayDay;

    let yearsSeconds = (years*365*86400);
    let monthSeconds =(month*31*86400);
    let daySeconds = (days*86400);

    return yearsSeconds + monthSeconds + daySeconds;
  }
}
