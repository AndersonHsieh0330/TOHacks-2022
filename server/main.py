import flask
from flask import Flask, render_template, url_for, jsonify, Response
from os import environ
import time
import random
import logging
import os
from argparse import ArgumentParser, RawTextHelpFormatter
import a.db
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin


import psycopg2
from psycopg2.errors import SerializationFailure

load_dotenv()

app = Flask(__name__)
CORS(app)

opt = a.db.parse_cmdline()
logging.basicConfig(level=logging.DEBUG if opt.verbose else logging.INFO)

try:
    # Attempt to connect to cluster with connection string provided to
    # script. By default, this script uses the value saved to the
    # DATABASE_URL environment variable.
    # For information on supported connection string formats, see
    # https://www.cockroachlabs.com/docs/stable/connect-to-the-database.html.
    db_url = opt.dsn
    conn = psycopg2.connect(db_url)
except Exception as e:
    logging.fatal("Database connection failed")
    logging.fatal(e)


@app.route("/")
@cross_origin()
def index():
    pass

@app.route("/api/activity", methods=["GET", "POST"])
@cross_origin()
def placeholder():
    if flask.request.method == "POST":
        activity = flask.request.args.get('activity')
        category = flask.request.args.get('category')

        entry = {
            'activity': activity,
            'category': category,
        }

        a.db.insert_activity(conn, entry)
        
        return "ok"

    else:
        category = flask.request.args.get('category')
        result = a.db.return_activity(conn, category)

        jresult = {
            'activity': result[0],
            # 'category': result[1]
        }

        return jresult

    # return redirect(url_for(DEFAULT_ROUTE_LEADERBOARD))
    # return render_template("player.html", score = score, avatars = avatars)


if __name__ == '__main__':
    a.db.init_db(conn)
    a.db.print_activities(conn)
    app.run(debug=True, host="0.0.0.0", port=(8080))
