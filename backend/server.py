import flask
from flask import Flask, render_template, url_for, jsonify, Response
from os import environ
import time
import random
import logging
import os
from argparse import ArgumentParser, RawTextHelpFormatter
import db

import psycopg2
from psycopg2.errors import SerializationFailure

app = Flask(__name__)

opt = db.parse_cmdline()
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
def index():
    pass
    # return render_template("index.html",
    #                         scores=scores)


@app.route("api/activity", methods=["GET", "POST"])
def placeholder():
    if flask.request.method == "POST":
        activity = flask.request.json['activity']
        category = flask.request.json['category']

        entry = {
            'activity': activity,
            'category': category,
        }

        db.insert_activity(conn, entry)

    else:
        result = db.return_activity(conn)

        jresult = {
            'activity': result[0],
            'location': result[1],
            'transportation': result[2]
        }

        return jresult

    # return redirect(url_for(DEFAULT_ROUTE_LEADERBOARD))
    # return render_template("player.html", score = score, avatars = avatars)


if __name__ == '__main__':
    db.init_db(conn)
    db.print_activities(conn)
    app.run(debug=True, port="8080")
