from flask import Flask, request, abort
import hashlib
import hmac
import subprocess
import os

app = Flask(__name__)

# Replace 'your-webhook-secret' with your GitHub webhook secret
WEBHOOK_SECRET = 'papaji'.encode()

# Path to your deploy.sh script
DEPLOY_SCRIPT_PATH = '/var/www/portfolio/deploy.sh'

@app.route("/webhook", methods=['POST'])
def webhook():
    # Verify the request signature
    signature = request.headers.get('X-Hub-Signature-256')
    if not is_valid_signature(request.data, signature):
        print("Invalid signature")
        abort(403)

    # Process the GitHub event
    event = request.headers.get('X-GitHub-Event', 'ping')
    if event == "ping":
        return "Ping event received", 200
    elif event == "push":
        payload = request.json
        # Check if the push was to the main branch
        if payload['ref'] == 'refs/heads/main':
            # Execute the deploy script
            subprocess.run(["bash", DEPLOY_SCRIPT_PATH])
            return "Deploy script executed", 200

    return "Event not processed", 200

def is_valid_signature(payload, signature):
    if not signature:
        return False
    sha_name, signature = signature.split('=')
    if sha_name != 'sha256':
        return False
    mac = hmac.new(WEBHOOK_SECRET, msg=payload, digestmod=hashlib.sha256)
    return hmac.compare_digest(mac.hexdigest(), signature)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=4444, ssl_context=('/etc/letsencrypt/live/faisalmalik.in/fullchain.pem', '/etc/letsencrypt/live/faisalmalik.in/privkey.pem'))
