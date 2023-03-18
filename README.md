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
- if there are route problems showed up create web.config file on plesk and add these lines:
<code>
  <configuration>
      <system.webServer>
        <handlers>
          <add name="iisnode" path="app.js" verb="*" modules="iisnode" />
        </handlers>
    
        <rewrite>
          <rules>
            <rule name="myapp">
            <match url="/*" />
            <action type="Rewrite" url="app.js" />
          </rule>
    <!-- Don't interfere with requests for node-inspector debugging -->
        <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
           <match url="^app.js\/debug[\/]?" />
        </rule>    
      </rules>   
    </rewrite>  
  </system.webServer>
 </configuration>
</code>
And project deployed success V