#!/usr/bin/env python3
"""
Nope we aren't commenting
"""

import time
import random
import logging
import os
from argparse import ArgumentParser, RawTextHelpFormatter

import psycopg2
from psycopg2.errors import SerializationFailure


def init_db(conn):
    with conn.cursor() as cur:
        cur.execute(
            "CREATE TABLE IF NOT EXISTS activities (activity STRING PRIMARY KEY, category STRING)"
        )
        cur.execute(
            "UPSERT INTO activities (activity, category) VALUES ('Hiking', 'Blizzard')")
        cur.execute(
            "UPSERT INTO activities (activity, category) VALUES ('Not Hiking', 'Any Other Weather')")
        cur.execute(
            "UPSERT INTO activities (activity, category) VALUES ('Flying', 'Blizzard')")
        logging.debug("init_db(): status message: %s",
                      cur.statusmessage)
    conn.commit()


def insert_activity(conn, entry):
    with conn.cursor() as cur:
        cur.execute(
            f"UPSERT INTO activities (activity, category) VALUES ('{entry['activity']}','{entry['category']}')"
        )
        logging.debug("init_db(): status message: %s",
                      cur.statusmessage)
    conn.commit()


def delete_activity(conn, activity):
    with conn.cursor() as cur:
        cur.execute(f"DELETE FROM activities WHERE activity='{activity}'")
        logging.debug("delete_activity(): status message: %s",
                      cur.statusmessage)
    conn.commit()


def return_activity(conn, category):
    with conn.cursor() as cur:
        cur.execute("SELECT activity FROM activities "
                    f"WHERE category='{category}' "
                    "ORDER BY RANDOM() "
                    "LIMIT 1")
        logging.debug("delete_activity(): status message: %s",
                      cur.statusmessage)
        result = cur.fetchall()
        conn.commit()

        # delete_activity(conn, result[0][0])

        print(f"OK {result}")
        return result[0]


def print_activities(conn):
    with conn.cursor() as cur:
        cur.execute("SELECT activity, category FROM activities")
        logging.debug("print_activities(): status message: %s",
                      cur.statusmessage)
        rows = cur.fetchall()
        conn.commit()
        print(f"Activities at {time.asctime()}:")
        for row in rows:
            print(row)


def clear_activities(conn):
    with conn.cursor() as cur:
        cur.execute("DROP TABLE activities")
        logging.debug("clear_activities(): status message: %s",
                      cur.statusmessage)
        conn.commit()


def main():
    opt = parse_cmdline()
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
        logging.fatal("database connection failed")
        logging.fatal(e)
        return


    init_db(conn)
    print_activities(conn)

    delete_activity(conn, "Not Hiking")
    print_activities(conn)

    insert_activity(
        conn, {
            'activity': 'Helicoptering', 'category': 'Blizzard'})
    print_activities(conn)

    return_activity(conn, "Blizzard")

    print_activities(conn)

    clear_activities(conn)
    # try:
    #     print_activities(conn)
    # except ValueError as ve:
    #     # Below, we print the error and continue on so this example is easy to
    #     # run (and run, and run...).  In real code you should handle this error
    #     # and any others thrown by the database interaction.
    #     logging.debug("print_activities(conn) failed: %s", ve)

    # Close communication with the database.
    conn.close()


def parse_cmdline():
    parser = ArgumentParser(description=__doc__,
                            formatter_class=RawTextHelpFormatter)

    parser.add_argument("-v", "--verbose",
                        action="store_true", help="print debug info")

    parser.add_argument(
        "dsn",
        default=os.environ.get("DATABASE_URL"),
        nargs="?",
        help="""\
database connection string\
 (default: value of the DATABASE_URL environment variable)
            """,
    )

    opt = parser.parse_args()
    if opt.dsn is None:
        parser.error("database connection string not set")
    return opt


if __name__ == "__main__":
    main()
