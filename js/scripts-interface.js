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

    $(".output-area").show();
    $("#formOne").hide();
    $(".earth-age").text("On Earth, you are " + userAge.earthLife );

        if (userAge.lifeLeft <= 10) {
          $(".earth-stats").text("The galaxy sees that your lifestyle is going to catch up with you. In " + userAge.lifeLeft + " years, you overdose on adderol and Mountain Dew while furiously trying to finish your last Epicodus Code Review. That means you will live to an age of " + userAge.earthExpectancy + " on Earth.");
        } else if (userAge.lifeLeft >= 11 && userAge.lifeLeft <= 20) {
          $(".earth-stats").text("The galaxy sees your fate. In " + userAge.lifeLeft + " years, you are a succesful software engineer for a hot new start-up, making six figures, living your dream life. However, you fall asleep while smoking a joint after a night out with friends and unintentionally light your penthouse on fire. You die from smoke inhilation , but leave millions behind for your cat. That means, you will live to an age of " + userAge.earthExpectancy + " on Earth.");
        } else if (userAge.lifeLeft >=21 && userAge.lifeLeft <= 30) {
          $(".earth-stats").text("The galaxy sees your fate. After Epicodus, you succesfully navigated the corporate ladder. You started out as a lowely junior developer, but steadily earned promotion after promotion, until you took over as CTO of a fourtune 500 company in Seattle. However, in " + userAge.lifeLeft + " years, your spouse catches you in bed with the pool boy and kills you both. This means, you will live to an age of " + userAge.earthExpectancy + " on Earth.");
        } else if (userAge.lifeLeft >=32 && userAge.lifeLeft <= 40) {
          $(".earth-stats").text("The galaxy sees your fate. In " + userAge.lifeLeft + " years, you are living in a trailer in Molalla with your 19 cats. After finishing Epicodus, you decided not to pursue a career in the tech community, and eventually end up selling house plants on Craigslist. One night, one of your cats falls asleep on your face, smothering you to death. That means you will live to an age of " + userAge.earthExpectancy + " years on Earth.");
        } else {
          $(".earth-stats").text ("The galaxy sees your fate. In " + userAge.lifeLeft + " years, you've become a health addict after gaining a bunch of weight due to your job as a software engineer. You managed to lose over 100 pounds by switching to a vegan ketogenic diet where you only consume carrots and avocados. Your health guru has decided that in order to lose the last 15 pounds, you must go on an all juice cleanse, so you commit to consuming nothing by carrot and celery juice for the next 7 days. However, much to your suprise, all that carrot celery juice causes irreprable liver damage, and you die only 48 hours into your cleanse. That means you will live to an age of " + userAge.earthExpectancy + " years on Earth.");
        }

    $("#mercury-age").text(userAge.mercuryAge);
    $("#mercury-life").text(userAge.mercuryLife);
    $("#mercury-expectancy").text(userAge.mercuryExpectancy);

    $("#venus-age").text(userAge.venusAge);
    $("#venus-life").text(userAge.venusLife);
    $("#venus-expectancy").text(userAge.venusExpectancy);

    $("#mars-age").text(userAge.marsAge);
    $("#mars-life").text(userAge.marsLife);
    $("#mars-expectancy").text(userAge.marsExpectancy);

    $("#jupiter-age").text(userAge.jupiterAge);
    $("#jupiter-life").text(userAge.jupiterLife);
    $("#jupiter-expectancy").text(userAge.jupiterExpectancy);

  });
});
