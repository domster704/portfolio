git reset --hard HEAD
git pull origin master
cd portfolio-cms && git reset --HARD && git pull origin master
cd ../portfolio-react && git reset --hard && git pull origin master
cd ../

docker compose down &&
docker compose up --build -d