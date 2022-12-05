# Calculator Project
Here I will discuss my progress and any bugs related to the project.

11/29/2022
Project works basic calculations. 
Bugs Reported: Calculator stops working when pressing an operation key more than once since it will simply just add the key to the evaluation expression.
This deems the expression incalculable so eventually pressing the '=' button will return an error. 
IE: Pressing 9, - , - , - 8, = will return an error. 

Design Flaw: Probably will start a new branch about this. I'm trying to have a better design on the calculator, followed with maybe a title or something nice 
to be sitting on the top of the calculator. 
Other than that, I'm proud to say the calculator is fully functional. 
Next step after fixing bugs and adding a nice title, would be to allow the page to be resizable and mobile device adaptive. 

Objectives: I guess the next thing I could do is create a variable to hold a value of
true or false if a certain key is pressed. 
For example if 3 is pressed, then x. The variable would turn true. Now there has to be a
fork here. If a different operation key is pressed.

11/29/2022

Completed a small side thing that is an importan part of the calculator.I integrated how the 
calculator should function if the system will start with a number zero in the beginning. 


12/05/2022

Pretty much any technical bugs regarding the backend processes of the calculator have been fixed. This includes:

- Complications that arose with results that were "Infinity" or "NaN" (Not a number)
- Complicstions from inputting certain patterns of buttons
- Adding a DEL button for single-character deletion

This also means a whole lot of if-statements that controlled the reaction and action of the program if the user were to input certain patterns of keystrokes or clicks. 
For example, the calculator will not allow the user to input too many operations at once, and the procedure for dealing with it would be to ignore the keystroke/click or change the current keystroke if there is one on screen.

Certain features have also been added as small decorations or embellishments.

- There is now an orange glow around operational buttons
- A title for the calculator
- A restriction which allows for one expression to be evaluated at a time (this has its limitations)

Also, we have a couple still ongoing operations:

- There is still a problem with website resposiveness to changing resolutions.
- For future projects: the container div around the buttons could be turned into a scrolling bar to 
fit in more buttons

This calculator is extremely basic and elementary. Progress for its development will likely end soon because of one of its features that brings a big shortcoming to the projects. 
This calculator evaluates one expression at a time, meaning that its technically impossible for the program to follow a more complicated procedure seen with other calculators where they decide which part of the expression to solve. Unlike those calculators, this calculator does not deal with order of operations or even parentheses with emphasis on certain operations. The calculator also misses the following keys:

- Percentage key
- Negative/positive key
- Exponent key

And other keys of course, but we'll get to those in time.

For this particular calculator the next main projects would be to make it responsive, and to add 2 more buttons so that it looks complete. 

