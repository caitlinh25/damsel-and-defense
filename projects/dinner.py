import random
appetizer = ["calamari", "small house salad", "crab cake bites"]
main_course = ["steak", "sea bass", "baked chicken"]
dessert = ["ice cream", "cheesecake", "chocolate cake"]
dessert.extend(["creme brule", "cannoli"])
print("appetizer:", random.choice(appetizer))
print("main course:", random.choice(main_course))
print("dessert:", random.choice(dessert))
