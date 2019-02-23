# handlebars-web-api

Tiny web API to render handlebars template

# Try immediately

```
$ curl -H 'Content-type:application/json' https://handlebars-web-api.herokuapp.com/ -d '{"template": "Hello, {{ name  }}!", "data": {"name": "World"}}'
Hello, World!
```
