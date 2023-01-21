import json


with open("pokemons.json") as file:
    content = file.read()
    pokemons = json.loads(content)["results"]

print(pokemons[0])
