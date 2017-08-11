from turtle import *
import math
import random

# Name your Turtle.
t = Turtle()

# Set Up your screen and starting position.
setup(500,300)

### Write your code below:
color= input("Pick a color:")
pencolor(color)
sides = int(input("Choose a number of sides:"))
i=0
for i in range(sides):
    forward(100)
    left(360/sides)
    i += 1






# Close window on click.
exitonclick()
