from turtle import *
import math
import random

# Name your Turtle.
t = Turtle()

# Set Up your screen and starting position.
setup(500,300)
x_pos = -500
y_pos = 0
t.setposition(x_pos, y_pos)

### Write your code below:
fillcolor("green")
i=0
begin_fill()
for i in range(4):
    forward(1000)
    right(90)
    i += 1

end_fill()

exitonclick()
