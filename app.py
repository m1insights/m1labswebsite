from flask import Flask, render_template, request, redirect, url_for
import os
import datetime

app = Flask(__name__)
# Set secret key for session security
app.secret_key = os.environ.get('SECRET_KEY', 'dev-secret-key')

@app.route('/')
def index():
    current_year = datetime.datetime.now().year
    return render_template('index.html', current_year=current_year)

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    # In a production environment, you would save this data to a database
    # and potentially send an email notification
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    
    # For now, we'll just redirect back to the main page with a success parameter
    return redirect(url_for('index', contact_success=True))

if __name__ == '__main__':
    # Use environment variables with fallbacks for development
    port = int(os.environ.get('PORT', 5001))
    debug = os.environ.get('FLASK_ENV', 'development') == 'development'
    app.run(host='0.0.0.0', debug=debug, port=port)
