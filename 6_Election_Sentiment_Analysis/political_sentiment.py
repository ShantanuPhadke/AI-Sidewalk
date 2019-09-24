from flask import Flask, render_template, url_for, flash, redirect
import requests

app = Flask(__name__)
app.config['SECRET_KEY'] = '8479fd7bef4ebf6c264fd36063af37b8'

@app.route("/")
@app.route("/")
def home():
	return "<h1> Homepage! </h1>"

if __name__ == '__main__':
	app.run(debug=True, port=8000)


def get_tweets(search_string, num_tweets):
	return "<h1> Get Tweets aint implemented yet!! </h1>"
	
