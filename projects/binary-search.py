import csv
import string

# Open the CSV File and read it in.
f = open('countries.csv')
data = f.read()

# Split the data into an array of countries.
countries = data.split('\n')

length = len(countries)
print(countries)

new_countries = []

# Start your search algorithm here.
user_country= input("Type the country you want to search: ")

if user_country < countries[round(length/2)]:
    for i in range(0,round(length/2)):
        new_countries.append (countries[i])
elif user_country > countries[round(length/2)]:
    for i in range(round(length/2), length):
        new_countries.append (countries[i])
print(new_countries)
