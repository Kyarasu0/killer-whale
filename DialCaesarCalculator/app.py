from flask import Flask
from Calculator import Calculator
from DataBase import Chipers

App = Flask(__name__)

@App.route('/')
def App():
    return Calculator

if __name__ == '__main__':
    App.run(debug=True)