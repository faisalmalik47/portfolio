from flask import Flask, request
import subprocess

app = Flask(__name__)

@app.route('/trigger-deploy', methods=['POST'])
def trigger_deploy():
    # Triggering the deploy script
    subprocess.call(["/var/www/portfolio/deploy.sh"])
    return 'Deployment triggered', 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4444, ssl_context=('/etc/letsencrypt/live/faisalmalik.in/fullchain.pem', '/etc/letsencrypt/live/faisalmalik.in/privkey.pem'))
