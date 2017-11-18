import { Age } from './../js/scripts.js';

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();

    let birthYear = $("#dob-year").val();
    birthYear = parseInt(birthYear);
    let birthMonth = $("#dob-month").val();
    birthMonth = parseInt(birthYear);
    let birthDay = $("#dob-day").val();
    birthDay = parseInt(birthYear);
    let todayYear = $("#current-year").val();
    todayYear = parseInt(birthYear);
    let todayMonth = $("#current-month").val();
    todayMonth = parseInt(birthYear);
    let todayDay = $("#current-day").val();
    todayDay = parseInt(birthYear);

    let userAge = new Age(birthYear, birthMonth, birthDay, todayYear, todayMonth, todayDay);
    userAge.currentAgeCalculator();
    console.log(userAge.age);
    console.log(userAge.lifeLeft);
    console.log(userAge.mercuryLife);
    console.log(userAge.earthLife);
    // age.parseInt();

    // $("#output").show();
    $(".earth-stats").text("On earth, you are" + userAge.age + " seconds old. Based on our galactic calculations, you will live " + userAge.lifeLeft + " years left, which means you will live until you are " + userAge.earthExpectancy + ".");
    $(".mercury-stats").text("On Mercury, you are" + userAge.mercuryAge + "years old. Based on our galactic calculations, you will live " + userAge.mercuryLife + " years left, which means you will live until you are " + userAge.mercuryExpectancy +".");

    $(".venus-stats").text("On Venus, you are" + userAge.venusAge + "years old. Based on our galactic calculations, you will live " + userAge.venusLife + " years left, which means you will live until you are " + userAge.venusExpectancy +".");

    $(".mars-stats").text("On Mars, you are" + userAge.marsAge + "years old. Based on our galactic calculations, you will live " + userAge.marsLife + " years left, which means you will live until you are " + userAge.marsExpectancy +".");

    $(".jupiter-stats").text("On Jupiter, you are" + userAge.jupiterAge + "years old. Based on our galactic calculations, you will live " + userAge.jupiterLife + " years left, which means you will live until you are " + userAge.jupiterExpectancy +".");

  });
});
