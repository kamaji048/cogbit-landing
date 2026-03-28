#!/bin/bash
# deploy.sh – Script de deploy manual usando Docker
set -e

IMAGE="cogbit-landing"
TAG="${1:-latest}"
REGISTRY="${DOCKERHUB_USERNAME:-kamaji048}"

echo "==> Building Docker image: $REGISTRY/$IMAGE:$TAG"
docker build -t "$REGISTRY/$IMAGE:$TAG" .

echo "==> Pushing image to Docker Hub"
docker push "$REGISTRY/$IMAGE:$TAG"

echo "==> Starting container locally"
docker compose down --remove-orphans
docker compose up -d

echo "==> Deploy concluido. Aplicacao rodando em http://localhost:3000"
