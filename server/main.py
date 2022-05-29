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

import psycopg2
from psycopg2.errors import SerializationFailure

load_dotenv()

app = Flask(__name__)

conn = psycopg2.connect("postgresql://go-outside:xG_I9M5Y5H7Nzpyj0IMeWg@free-tier9.gcp-us-west2.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dgo-outside-db-559")

a.db.init_db(conn)
a.db.print_activities(conn)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/activity", methods=["GET", "POST"])
def placeholder():
    if flask.request.method == "POST":
        activity = flask.request.json['activity']
        category = flask.request.json['category']

        entry = {
            'activity': activity,
            'category': category,
        }

        a.db.insert_activity(conn, entry)

    else:
        category = 'Blizzard'
        result = a.db.return_activity(conn, category)

        jresult = {
            'activity': result[0],
            # 'category': result[1]
        }

        return jresult


if __name__ == '__main__':

    opt = a.db.parse_cmdline()
    logging.basicConfig(level=logging.DEBUG if opt.verbose else logging.INFO)

    try:
        # Attempt to connect to cluster with connection string provided to
        # script. By default, this script uses the value saved to the
        # DATABASE_URL environment variable.
        # For information on supported connection string formats, see
        # https://www.cockroachlabs.com/docs/stable/connect-to-the-database.html.
        
        # db_url = opt.dsn
        # conn = psycopg2.connect(db_url)
        conn = psycopg2.connect("postgresql://go-outside:xG_I9M5Y5H7Nzpyj0IMeWg@free-tier9.gcp-us-west2.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dgo-outside-db-559")
    except Exception as e:
        logging.fatal("Database connection failed")
        logging.fatal(e)

    a.db.init_db(conn)
    a.db.print_activities(conn)

    app.run(debug=True, host="0.0.0.0", port=(8080))
