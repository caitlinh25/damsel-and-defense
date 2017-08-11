pepperspray= 10
dignity= 100
lateness=0
name = input("What is your name? ")
print(name, "wakes up and gets ready for work. She puts on her new outfit for her big presentation today, that will determine whether she gets promoted, which is a big deal because she'd be moving up in her male dominated job. She goes outside and heads for work. Choose what side of the street you want her to walk on.")
print("She starts the day off with")
print("Dignity:", dignity)
print("Pepperspray:", pepperspray,"g")
print("Lateness:", lateness)
side = input("Left or right? ")
if side=="left" or side== "Left":
    print(name, "sees a group of construction workers ahead." )
    option1= input("Should she cross the street or stand her ground? Type 1 to cross street or 2 to stand her ground ")
    if option1=="1":
        print(name, "avoided the men and feels a bit ashamed for not sticking up for herself. Loses 10 dignity points :(")
        dignity -= 10
        print("Dignity: ", dignity)
    elif option1=="2":
        print(name, "decides that she's not intimidated. As she walks by them they start catcalling and whistling at her. She can't believe the disrespect, so", name, "tells them off. They were surprised by her standing up to them so they stay quiet and walk away.")
        dignity +=10
        print("Dignity:", dignity, "Yay you got a boost of confidence before your presentation!!!")
#right sides
if side== "right" or side=="Right":
    print("Oh no! A creepy guy just came up to", name, ". He stops her from going forward and she's freaking out.")
    option2= input("She has pepperspray in her bag should she use it? ")
    if option2=="yes":
        pepperspray-= 2
        print(name, "sprayed his eyes and now he's screaming, serves him right.")
        print("Pepperspray:", pepperspray,"g")
    elif option2=="no":
        print(name,"is too scared to stand up for herself so she turns and runs towards a different path to work, as she realizes that she's going to be late for work.")
        lateness+=5
        print("Lateness:", lateness,"min")
if dignity== 90 or lateness==5:
    dignity-=20
    print("So she arrives to work and her boss is in a bad mood so he scolds her for something her coworkers did. She hears laughter in the back coming from all her male coworkers. Feeling too ashamed from the earlier events she walks to her desk with her head down.")
    print("Dignity:", dignity, ":(")
elif dignity >100 or lateness==0:
    print("So she arrives to work and her boss is in a bad mood so he scolds her for something her coworkers did. She hears laughter in the back coming from all her male coworkers. Knowing it isn't her fault she tells him whose fault it was as she points to the group of men. The boss respects that she stood up herself and he scolds the men.")
    dignity+=20
    print("Dignity:",dignity)
print(name,"arrives to her desk and finds another group of male coworkers standing in her way. She politely asks them to move, but they completely ignore her. She needs to get to her desk in order to get papers for her presentation.")
option3= input("Should she ask them again or wait for them to leave? Type 1 to ask again and 2 to wait.")
    if option3="1":
        dignity+=5
        print(name, " asks again and they turn and give her nasty looks but eventually move out of her way.")
        print("Dignity:", dignity)
        print(name,"makes it on time to her big presentation. But as shes setting up someone interrupts her, demanding a cup of coffee.")
        option4= input("She's shook. So many things start to run through her mind, 'do I get the coffee or tell him to get his own coffee?' Type no to stay or yes to fetch coffee.")
            if option4="no":
                print(name,"continues and begins her presentation. Once shes done her male coworkers begin to shut down her idea for no reason. However her boss seems to love the pitch and decides to put his trust in her, eventually leading to a promotion.")
                print("... 3 years later", name,"becomes the first female CEO of her company.")
            if option4="yes":
                print(name,"runs out and gets his coffee, which made her too late for her presentation. Better luck next time.")
    elif option3="2"
        dignity-=5
        print(name,"decides to wait and ends up being late to her presentation. Her boss yells at her again and moves on to the next presentation. She just lost her big shot and continues to work in the same position for the next decade.")
