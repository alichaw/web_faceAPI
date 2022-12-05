from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == '__main__':
    #定義app在8080埠運行
    app.run(host="0.0.0.0",port=3000,debug=True)