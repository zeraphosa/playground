#### git merge repositories
git fetch git://repository.url/repo.git master:branch_name
git merge --allow-unrelated-histories branch_name
git commit

---------

"build": "GENERATE_SOURCEMAP=false react-scripts build" -> proje kodlarinin gozukmemesi icin package.json

#### example-heroku-deploy
- set .env files for db connection from heroku clearDb mysql ads on
- create procfile
- connect github with heroku so on git commit deploy