#### git merge repositories
git fetch git://repository.url/repo.git master:branch_name
git merge --allow-unrelated-histories branch_name
git commit

---------

"build": "GENERATE_SOURCEMAP=false react-scripts build" -> proje kodlarinin gozukmemesi icin package.json

#### plesk deploy node and react project
- create 2 subdomain api.example.com , app.example.com
- export data and change utf8mb4 to utf8, utf8mb4_lorem_ci to utf8_general_ci
- create mysql db on plesk and import data
- set env values on node side:
    0. host: "localhost",
    1. user: "created user on plesk",
    2. password: "created pass on plesk",
    3. database: "database name"
- deploy node js to api.example.com and install node on plesk
- build react app and deploy to app.example.com

And project deployed success V