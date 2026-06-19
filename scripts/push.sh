#!/bin/bash
# Auto-push the morning-briefing repo to GitHub.
#
# Runs on the Mac (via the launchd agent in ../deploy), where your GitHub
# credentials and network are available. The scheduled task only commits;
# this script does the push. Triggered whenever a new commit lands on main,
# plus a daily fallback at 07:20 — see deploy/local.morning-briefing.push.plist.
set -uo pipefail

REPO="/Users/cmoutafidis/Documents/projects/personal/morning-briefing"
LOG="$HOME/Library/Logs/morning-briefing-push.log"

cd "$REPO" 2>/dev/null || { echo "[$(date)] repo not found: $REPO" >>"$LOG"; exit 0; }

# Skip if main isn't ahead of origin.
git fetch origin main --quiet 2>>"$LOG" || true
LOCAL=$(git rev-parse main 2>/dev/null || echo "")
REMOTE=$(git rev-parse origin/main 2>/dev/null || echo "")

if [ -n "$LOCAL" ] && [ "$LOCAL" = "$REMOTE" ]; then
  echo "[$(date)] up to date ($LOCAL); nothing to push" >>"$LOG"
  exit 0
fi

echo "[$(date)] pushing main ($LOCAL)..." >>"$LOG"
if git push origin main >>"$LOG" 2>&1; then
  echo "[$(date)] push OK" >>"$LOG"
else
  echo "[$(date)] push FAILED (exit $?)" >>"$LOG"
fi
