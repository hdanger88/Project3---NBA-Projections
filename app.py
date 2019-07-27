import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')

@app.route("/JSON")
def data():
    return render_template('data.html')

@app.route("/RookiePlots")
def plots():
    return render_template('plots.html')


if __name__ == "__main__":
    app.run()
