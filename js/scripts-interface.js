import { Age } from './../js/scripts.js';

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();

    let birthYear = $("#dob-year").val();
    birthYear = parseInt(birthYear);

    let birthMonth = $("#dob-month").val();
    birthMonth = parseInt(birthMonth);

    let birthDay = $("#dob-day").val();
    birthDay = parseInt(birthDay);

    let todayYear = $("#current-year").val();
    todayYear = parseInt(todayYear);

    let todayMonth = $("#current-month").val();
    todayMonth = parseInt(todayMonth);

    let todayDay = $("#current-day").val();
    todayDay = parseInt(todayDay);

    let userAge = new Age(birthYear, birthMonth, birthDay, todayYear, todayMonth, todayDay);
    userAge.currentAgeCalculator();
    // age.parseInt();

    // $("#output").show();
    $(".earth-stats").text("On Earth, you are" + userAge.earthLife );

        if (userAge.lifeLeft <= 10) {
          $(".earth-expectancy").text("The galaxy sees that your lifestyle is going to catch up with you. In " + userAge.lifeLeft + " years, you overdose on adderol and Mountain Dew while furiously trying to finish your last Epicodus Code Review. That means you will live to an age of " + userAge.earthExpectancy + " on Earth.");
        } if else(userAge.lifeLeft >= 11 && userAge.lifeLeft <= 20) {
          $(".earth-expectancy").text("The galaxy sees your fate. In " + userAge.lifeLeft + " years, you are a succesful software engineer for a hot new start-up, making six figures, living your dream life. However, you fall asleep while smoking a joint after a night out with friends and unintentionally light your penthouse on fire. You die from smoke inhilation , but leave millions behind for your cat. That means, you will live to an age of " + userAge.earthExpectancy + " on Earth.");
        } if else (userAge.lifeLeft >=21 && userAge.lifeLeft <= 30) {
          $(".earth-expectancy").text("The galaxy sees your fate. After Epicodus, you succesfully navigated the corporate ladder. You started out as a lowely junior developer, but steadily earned promotion after promotion, until you took over as CTO of a fourtune 500 company in Seattle. However, in " + userAge.lifeLeft + " years, your spouse catches you in bed with the pool boy and kills you both. This means, you will live to an age of " + userAge.earthExpectancy + " on Earth.")
        } if else (userAge.lifeLeft >=32 && userAge.lifeLeft <= 40) {
          $(".earth-expectancy").text("The galaxy sees your fate. In " + userAge.lifeLeft + " years, you are living in a trailer in Molalla with your 19 cats. After finishing Epicodus, you decided not to pursue a career in the tech community, and eventually end up selling house plants on Craigslist. One night, one of your cats falls asleep on your face, smothering you to death. That means you will live to an age of " + userAge.earthExpectancy + " years on Earth.");
        } else {
          $(".earth-expectancy").text ("The galaxy sees your fate. In " + userAge.lifeLeft + " years, you are staying in your Italian villa. You've just enjoyed a night out with friends where you ate the finest Italian cuisine and drank the finest italian wine. After dinner, you grab some gelato and a bag of coke and decide to lounge in your hot tub. After finishing the gelato and a line of coke, you suddenly have a heart attack and drown in your hot tub. That means you will live to an age of " + userAge.earthExpectancy + " years on Earth".)
        }

    $(".mercury-stats").text("On Mercury, you are" + userAge.mercuryAge + "years old. Based on our galactic calculations, you will live " + userAge.mercuryLife + " years left, which means you will live until you are " + userAge.mercuryExpectancy +".");

    $(".venus-stats").text("On Venus, you are" + userAge.venusAge + "years old. Based on our galactic calculations, you will live " + userAge.venusLife + " years left, which means you will live until you are " + userAge.venusExpectancy +".");

    $(".mars-stats").text("On Mars, you are" + userAge.marsAge + "years old. Based on our galactic calculations, you will live " + userAge.marsLife + " years left, which means you will live until you are " + userAge.marsExpectancy +".");

    $(".jupiter-stats").text("On Jupiter, you are" + userAge.jupiterAge + "years old. Based on our galactic calculations, you will live " + userAge.jupiterLife + " years left, which means you will live until you are " + userAge.jupiterExpectancy +".");

  });
});
