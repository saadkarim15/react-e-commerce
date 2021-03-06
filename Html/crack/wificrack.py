from random import *

guess = ""
password = input("password")
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
           "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","#","@","!","$","%","&","^","*","1","2","3","4","5","6","7","8","9","0",".",",","'","+","-","_","`","~","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

while guess != password:
    Guess = ""
    for letter in password:
        guessletter = letters[randint(0,25)]
        guess = str(guessletter)+str(guess)
    print(guess)
print("Password is successfully cracked!")
input("")