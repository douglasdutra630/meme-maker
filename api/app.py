from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_heroku import Heroku
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config["SQL_ALCHEMY_DATABASE_URI"] = "sqlte:///" + os.path.join(basedir,"app.sqlite")

if __name__ == "__main__":
    app.run(debug = True)