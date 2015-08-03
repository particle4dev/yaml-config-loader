A webpack loader for YAML config.


Installation
------------

npm install ...


Usage
-----

```js
{
  module: {
    loaders: {
      {
        test: /\.yml$/,
        loaders: ["file-loader?name=[name].skybreak.json", "yaml-config-loader"]
      }
    ]
  }
}
```

The result of importing a YAML config file will be a JavaScript object. For example,

```
title: Skybreak
subtitle:
description:
author: Hoang Le
language:
timezone:

anita_antoinette: Turn Your Lights Down Low

url: http://localhost:4000
webpackURL: http://localhost:8080

http:
  port: 4000

template: 
  file: template.html

public:
  general:
    title: iojs vietnam
    description: Bringing ES6 to the Node Community in Vietnam.
```

becomes

```
{"title":"Skybreak","subtitle":null,"description":null,"author":"Hoang Le","language":null,"timezone":null,"anita_antoinette":"Turn Your Lights Down Low","url":"http://localhost:4000","webpackURL":"http://localhost:8080","http":{"port":4000},"template":{"file":"template.html"},"public":{"general":{"title":"iojs vietnam","description":"Bringing ES6 to the Node Community in Vietnam."}}}
```
