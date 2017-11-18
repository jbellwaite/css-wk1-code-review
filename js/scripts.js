
export class Age {

  constructor (birthYear, birthMonth, birthDay, todayYear, todayMonth, todayDay) {
    this.birthYear = birthYear;
    this.birthMonth = birthMonth;
    this.birthDay = birthDay;
    this.todayYear = todayYear;
    this.todayMonth = todayMonth;
    this.todayDay = todayDay;
    this.age = 0;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.lifeLeft = 0;
    this.mercuryLife = 0;
    this.venusLife = 0;
    this.marsLife = 0;
    this.jupiterLife = 0;
    this.earthExpectancy = 0;
    this.mercuryExpectancy = 0;
    this.venusExpectancy = 0;
    this.marsExpectancy = 0;
    this.jupiterExpectancy = 0;
  }

  currentAgeCalculator() {

    let years = this.todayYear - this.birthYear;
    let month = 0;
    const secondCalculator = (60*60*24*365);

    if (this.birthMonth <= this.todayMonth) {
      month = this.todayMonth - this.birthMonth;
    }else {
      month = this.birthMonth - this.todayMonth;
    }
    let days = this.birthDay + this.todayDay;

    let yearsSeconds = (years*secondCalculator);
    let monthSeconds =(month*31*86400);
    let daySeconds = (days*86400);

    this.age = yearsSeconds + monthSeconds + daySeconds;

    this.mercuryAge = ((this.age / 0.24)/secondCalculator).toFixed(2);
    this.venusAge = ((this.age / 0.62)/secondCalculator).toFixed(2);
    this.marsAge = ((this.age / 1.88)/secondCalculator).toFixed(2);
    this.jupiterAge = ((this.age / 11.86)/secondCalculator).toFixed(2);

    let lifeLeft = Math.floor(Math.random() * 50);
    this.lifeLeft = lifeLeft;

    this.mercuryLife = lifeLeft / 0.24;
    this.venusLife = lifeLeft / 0.62;
    this.marsLife = lifeLeft / 1.88;
    this.jupiterLife = lifeLeft / 11.86;

    this.earthLife = (this.age/secondCalculator)+ lifeLeft;
    this.mercuryExpectancy = this.mercuryAge + this.mercuryLife;
    this.venusExpectancy = this.venusAge + this.venusLife;
    this.marsExpectancy = this.marsLife + this.marsLife;
    this.jupiterExpectancy = this.jupiterAge + this.jupiterLife;

  }

}
