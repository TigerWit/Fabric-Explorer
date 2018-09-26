# Fabric-Explorer
Fabric Explorer



### How to

1. Repalce API url in `.webpackrc` with your own API url. 

```json
  "proxy": {
    "/v1/api": {
-      "target": "http://192.168.6.204:8080/",
+      "target": "YOUR_OWN_API_URL",
      "changeOrigin": false,
      "pathRewrite": { "^/api" : "" }
    },
    "/v1/fabric": {
-      "target": "http://192.168.6.204:8111/",
+      "target": "YOUR_OWN_API_URL",
      "changeOrigin": false,
      "pathRewrite": { "^/api" : "" }
    },

  }
```
2. Run `npm install && npm start`.


### Release


```bash
npm install && npm run build
```

After a few seconds, you will see the following information:

```bash
> @ build /private/tmp/myapp
> roadhog build


Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  82.98 KB  dist/index.js
  270 B     dist/index.css 
```  

`build` commond will pack all the resources
，including JavaScript, CSS, web fonts, images, html and so on. And then you can find those files in `dist/` directory.



### API Proxy 


In `nginx.conf`,  replace with the below configure:

```text
        location / {
            root   /YOUR_PATH/dist;
            index  index.html;
        }

        location /v1/api {
            proxy_pass http://YOUR_API_URL/;
        }
        location /v1/fabric {
            proxy_pass http://YOUR_API_URL_FABRIC/;
        }
```

By default, `YOUR_API_URL` is `192.168.6.204:8080`.
