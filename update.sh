git reset --hard HEAD
git pull origin master
git submodule update --remote --merge

docker compose down &&
docker compose up --build -d