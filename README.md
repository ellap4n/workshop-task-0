# workshop-task-0
the URL for workshop 0 is https://ellap4n.github.io/workshop-task-0/
## initial idea
For workshop 0 I was intrigued by the mouse tracking conditional function, so I decided just to play around with this and some simple shapes in a fun way. 

### Shapes
I decided to draw a cake - and have a slice cutout using both the arc  and triangle functions which were required in the workshop. 
I found the functions for these shapes in the p5 reference page, 
https://p5js.org/reference/p5/arc/
https://p5js.org/reference/p5/triangle/
and the slice angles were calculated using simple radian calculations. 

```
//cake drawing
  arc(200, 250, 150, 150, (15*PI)/8, (3*PI)/2);
  triangle(210, 235, 210, 165, 275, 208);
  arc(210, 235, 150, 150, (3*PI/2), (15*PI/8));
```

I then added the topping circles - this could've probably been spaced out using a loop or something but I just manually spaced them roughly evenly. 

### Conditionals
Two conditionals I wanted to implement were - 
1 - different toppings
2 - the topping would only appear if you hovered over a option, otherwise the cake will just be icing. 

I first created a IF loop for the Y position using the logical AND operator '&&' as these were the same for all three toppings, and then individual x cooridinates changing the stroke colour. 
the knowledge of BOOLEAN FUNCTIONS I already had from some previous coding experience - and I knew the syntaxs for these were the same on most coding softwares - as so they were for javascript too.
The topping circle function was placed outside of the individual x cooridinates but within the outer IF loop. 


### Problem 
However, when run the toppings would appear if I went anywherer within that y coordinate strip, in the last stroke colour because I didnt restrict the toppings from appearing for the x coordinates. So I went back and added more x coordinate restrictions using && for the boundaries and logical OR '||' for each possibility to the outer conditional. 

I could've also just copied the circle function into the inner loops instead but decided to add the condition overall in case of any changes I wanted to make to the circle positions. 

```
  if (mouseY > 75 && mouseY < 125 && ((mouseX > 75 && mouseX<125)||(mouseX>175 && mouseX <225)||(mouseX >275 && mouseX <325))) {
    if(mouseX> 75 && mouseX < 125) {
      stroke(strawberry);
      fill(strawberry);
    } else if(mouseX > 175 && mouseX < 225) {
      stroke(blueberry);
      fill(blueberry);
    } else if(mouseX >275 && mouseX <325) {
      stroke(lemon);
      fill(lemon);
    }
```

## Finishing + Next Steps
I played around with the colour tones so they were all cohesive - next steps would be to create more complex shapes - actual lemons strawberries blueberries etc. 
a eating function would be cute too - somehow the user can cut a slice for themselves etc.



