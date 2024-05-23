from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template ("Landing_Page.html")

@app.route("/Login")
def Login():
    return render_template ("Login.html")

@app.route("/Cadastro")
def Cadastro():
    return render_template ("Cadastro.html")

@app.route("/forum_principal")
def forum_principal():
    return render_template ("forum principal.html")

@app.route("/tabela")
def tabela():
    return render_template ("tabela.html")
    
if __name__ == "__main__":
    app.run(debug=True)