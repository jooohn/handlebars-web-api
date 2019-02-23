# handlebars-web-api

Tiny web API to render handlebars template

### Usage

https://handlebars-web-api.herokuapp.com/ (POST only)

```
curl https://handlebars-web-api.herokuapp.com/ \
  -H 'Content-type:application/json' \
  -d '{"template": "Hello, {{ name }}!", "data": {"name": "World"}}'
```

##### Response

```
Hello, World!
```
