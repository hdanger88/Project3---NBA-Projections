import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template, json
from flask_sqlalchemy import SQLAlchemy
from flask import url_for

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')

@app.route("/JSON")
def getJsonData():
	filename = 'data/NewRookiePredictions.json'
	with open(filename) as test_file:
		data = json.load(test_file)
		return jsonify(data)
	return jsonify(data)

@app.route("/RookiePlots")
def plots():
    return render_template('plots.html')

@app.route("/jsonData")
def getData():
	filename = 'data/NewRookiePredictions.json'
	with open(filename) as test_file:
		data = json.load(test_file)
		return jsonify(data)
	return jsonify(data)

if __name__ == "__main__":
    app.run()
