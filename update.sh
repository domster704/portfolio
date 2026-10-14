#!/usr/bin/env bash

set -euo pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

git reset --hard HEAD && git pull
git submodule update --init --remote

docker compose down &&
docker compose up --build -d
