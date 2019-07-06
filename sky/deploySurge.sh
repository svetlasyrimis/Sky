git add . &&
git commit -m '$0' &&
git push origin master &&
npm run build &&
cd build &&
mv index.html 200.html &&
npx surge --domain https://skyproject.surge.sh
