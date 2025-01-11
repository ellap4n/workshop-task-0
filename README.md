# workshop-task-0
the URL for workshop 0 is https://ellap4n.github.io/workshop-task-0/
## initial idea
For workshop 0 I was intrigued by the mouse tracking conditional function, so I decided just to play around with this and some simple shapes in a fun way. 

### Shapes
I decided to draw a cake - and have a slice cutout using both the arc and triangle functions which were required in the workshop. the slice angles werre calculated using simple radian calculations. 

I then added the topping circles - this could've probably been spaced out using a loop or something but I just manually spaced them roughly evenly. 

### Conditionals
Two conditionals I wanted to implement were - 1 different toppings, and 2 - topping would only appear if you hovered over a option, otherwise the cake will just be icing. 

I first created a IF loop for the Y position as these were the same for all three toppings, and then individual x cooridinates changing the stroke colour. The topping circle function was placed outside of the individual x cooridinates but within the outer IF loop. 

### Problem 
However, when run the toppings would appear if I went anywherer within that y coordinate strip, in the last stroke colour because I didnt restrict the toppings from appearing for the x coordinates. So I went back and added more x coordinate restrictions to the outer conditonal. 

I couldve also just copied the circle function into the inner loops instead. 
