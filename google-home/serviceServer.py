from flask import Flask, request, jsonify
from googlehomepush import GoogleHome
from googlehomepush.googletts import googleTTS_builder
import sys

app = Flask(__name__)
instance = None
DEVICE = "Mitch Speaker"

try:
    instance = GoogleHome(devicename=DEVICE, host="10.0.0.47", port="8008", ttsbuilder=googleTTS_builder)
except Exception as e:
    print(e)
    sys.exit(0)

@app.route("/say", methods=["POST"])
def index():
    form = request.form
    
    instance.say(form["message"])
    return jsonify(form)
