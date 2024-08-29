#!/bin/bash

# Renew the certificates
certbot renew --quiet

# Restart the Docker containers to apply new certificates
docker compose restart nginx
