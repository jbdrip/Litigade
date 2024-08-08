from flask import Flask, jsonify, request
from flask_socketio import SocketIO
from flask_cors import CORS
from pymongo import MongoClient


app = Flask(__name__)
CORS(app)
socket = SocketIO(app, cors_allowed_origins="*")

db_client = MongoClient('mongodb://localhost:27017/', username = 'admin', password = 'test*2024')
db = db_client["dbtest"]
appointments = db["appointments"]

@app.route('/', methods = ['GET'])
def init():
    return "Server working correctly."

@app.route('/appointment', methods = ['POST'])
def insertNote():
    data = request.get_json()
    print(data)
    try:
        appointments.insert_one(data)
        res = {
            "status": 200,
            "msg": "Cita agendada exitosamente"
        }
    except Exception as e:
        res = {
            "status": 500,
            "msg": "Error al agendar cita",
            "error": str(e)
        }
    return jsonify(res)

if __name__ == "__main__":
    app.run(host = '0.0.0.0', debug = True)