Super Galactic Age Calculator

This application was made to satisfy the week one code review for Epicodus Javascript course. The application is able to convert a person's age on earth to a person's age if they were on another planet in our galaxy. The application is also able to "predict" the user's life expectancy, and tell the user until how old the user will live on each planet.

The application displays a form that accepts input from the user. The application asks the user to enter their age and the current date. When the user presses the submit button after the form, the application starts a series of calculations. First, the application converts the user's age into seconds. The application then converts the users' age in seconds to the user's age on each planet in years.

The application also has the capability to "magically" predict how long the user will live. The application does this by generating a random number between zero and fifty, and then adds the random number to the user's current age. This is obviously by no means scientific, and the user can re-submit the form multiple times to get multiple answers for how long they will live.

The Application shall:
  - take a person's age in years and convert it into seconds.
  - take two dates and determine the difference, in seconds, between the two.
      this is essentially the same as the first one, as the user has to enter their birth date and the current date in order to calculate their age.
  - return the age of a human in Mercury years.
  - return the age of a human in Venus years.
  - return the age of a human in Mars years.
  - return the age of a human in Jupiter years.
  - determine how many years a user has left to live on each planet.
      Because I used a random number generator, i'm not able to determine how many years exactly should be expected with each output. However, I did test that the random number generated is less than 50 (a number I just came up with.)

Technologies used:

  This application requires a web browser in order to run. I used several applications while developing this project. Those include:
    -HTML / CSS
    - Javascript / JQuery
    - Gulp / Browserify / Vinyl-Source-Stream / Uglify / Bower
    - Jshint
    - Jasmine / Karma
    - Babelify

Set-Up:

  In order to set-up this application, follow these directions:
    - Clone the application to your desktop from Github
    - Ensure Node Project Manager (NPM) is installed on your device. Initialize NPM in the project by entering "NPM init" at the root level of the directory.
    - Ensure Bower is installed on your device. Initialize Bower in the project by entering "bower init" at the root level of the directory.

GH-Pages Link:

  Access this project through the following link:

Known Bugs:

  No known bugs at this time. 
