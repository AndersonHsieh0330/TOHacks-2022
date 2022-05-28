import flask
from flask import Flask, render_template, url_for
from os import environ

DEFAULT_ROUTE_LEADERBOARD = "index"
DEFAULT_ROUTE_PLAYER = "player"

app = Flask(__name__)

# conn_string = environ.get("DB_URI")

@app.route("/")
def index():
    pass
    # scores = leaderboard.get_scores()
    # return render_template("index.html",
    #                         scores=scores)

@app.route("/placeholder", methods=["GET", "POST"])
def placeholder():
    pass
# def player():
#     if flask.request.method == "POST":
#         id = flask.request.values.get("id")
#         avatar = flask.request.values.get("avatar")
#         playername = flask.request.values.get("playername")
#         points = flask.request.values.get("points")
#         leaderboard.add_score(
#             Score(id=id, avatar=avatar, playername=playername, points=points)
#         )
#         return redirect(url_for(DEFAULT_ROUTE_LEADERBOARD))
#     else:
#         avatars = leaderboard.get_avatar_dic()
#         score = Score(avatar="0", playername="", points=0)
#         return render_template("player.html", score = score, avatars = avatars)

if __name__ == '__main__':
    app.run(debug=True)