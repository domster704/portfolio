git reset --hard HEAD
git pull origin master
git submodule update

docker compose down &&
docker compose up --build -d