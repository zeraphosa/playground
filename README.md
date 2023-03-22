## Playground

### To hide react project codes:
```
"build": "GENERATE_SOURCEMAP=false react-scripts build"
```
### Plesk deploy steps for node:
- Create 2 subdomain api.example.com, app.example.com
- Export data and change utf8mb4 to utf8, utf8mb4_lorem_ci to utf8_general_ci
- Create mysql db on plesk and import data
- Set env in node side:
  ```
  host: "localhost",
  user: "created user on plesk",
  password: "created pass on plesk",
  database: "database name"
  ```
- Deploy node js to api.example.com and install node on plesk
- Build react app and deploy to app.example.com
- If there are route problems showed up create web.config file on plesk and add these lines:
```
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
          <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
            <match url="^app.js\/debug[\/]?" />
          </rule>
        </rules>
      </rewrite>
    </system.webServer>
 </configuration>
```
- Or create .htaccess file and add this:
```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteBase /
RewriteRule ^server/(.*)?$ http://127.0.0.1:3000/$1 [P,L]
```

### Tailwind configure for html & css
```
npm init -y
npm install tailwindcss
```
Create src & public folder. In src create styles.css and add these:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Then add package.json new script:
```
"build-css": "tailwindcss build src/styles.css -o public/styles.css"
```
```
npx tailwindcss init
```
Update tailwind.config.js
```
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```
npm run build-css
```

