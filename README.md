I am building my own JavaScript development starter kit and hopefully learn about 
1. dev server configuration, 
2. linting,
3. NPM Scripts,  
4. build automation, 
5. Testing and
6. Continuous Integration

###Set up 
```
npm install
install all the node modules
```

```
npm start - 
starts the express dev server and does a vulnerability check using node security package
```

```
npm share- 
starts the express dev server and sets up a local tunnel for sharing purpose using the localtunnel npm package
```


    "prestart": "node buildScripts/welcomeMsg.js" ,
    "start": "npm-run-all --parallel security-check open:src",
    "open:src": "node buildScripts/srcServer.js",
    "security-check": "nsp check",
    "localtunnel": "lt --port 8000",
    "share": "npm-run-all --parallel open:src localtunnel"
### Development Server - Express 

