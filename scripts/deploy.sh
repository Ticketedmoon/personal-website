#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# Deploy script for skybreak.app
# Builds the Next.js site and syncs to the Digital Ocean droplet
# ============================================================

REMOTE_USER="root"
REMOTE_HOST="skybreak.app"
REMOTE_PATH="/var/www/sites/skybreak.app/html/personal-website/"
BUILD_DIR="out"

echo "==> Building production site..."
npm run build

if [ ! -d "$BUILD_DIR" ]; then
  echo "ERROR: Build directory '$BUILD_DIR' not found. Build may have failed."
  exit 1
fi

echo "==> Deploying to $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH"
rsync -avz --delete "$BUILD_DIR/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH"

echo "==> Reloading Nginx..."
ssh "$REMOTE_USER@$REMOTE_HOST" "sudo systemctl reload nginx"

echo "==> Done! Site deployed to https://skybreak.app"
