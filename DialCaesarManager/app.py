from flask import Flask
from Calculator import Calculator
from DataBase import Create_DB_Table

App = Flask(__name__)

@App.route('/')
def App():
    return Calculator

if __name__ == '__main__':
    App.run(debug=True)