import fastapi import FastAPI
from exercises.conditionals import check_if_word_has_4_or_more_letters
from exercises.python_data_types import return_lower_case_string

app = FastAPI()

@app.get('/')
async def hello_21():
  return {"message": "Hello World!"}

@app.get('check/{word}')
async def check_letters(word):
  return check_if_word_has_4_or_more_letters(word)
  
@app.get('lower/{word}')
async def lower(word):
  return return_lower_case_string(word)