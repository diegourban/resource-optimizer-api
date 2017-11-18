# resource-optimizer-api
API to optimize web page resources

[![dependencies Status](https://david-dm.org/diegourban/resource-optimizer-api/status.svg)](https://david-dm.org/diegourban/resource-optimizer-api)

## Requirements
* Node.js 6.x

## Installation
```npm install``` - to install the dependencies

## Usage
```npm start``` - to start the api server

### Calling the API using cURL

```
curl -X POST -H "Content-Type: [content_type]" --data-binary "@[path_to_input]" http://localhost:3000/api/minify >> [path_to_output]
```

Accepted Content-Types:
- text/css
- text/html
- text/javascript
- image/png
- image/jpeg


#### Examples:

Minify CSS:
```
curl -X POST -H "Content-Type: text/css" --data-binary "@/home/urban/inputs/input.css" http://localhost:3000/api/minify >> /home/urban/outputs/output.css
```

Minify JavaScript:
```
curl -X POST -H "Content-Type: text/javascript" --data-binary "@/home/urban/inputs/input.js" http://localhost:3000/api/minify >> /home/urban/outputs/output.js
```

Minify HTML:
```
curl -X POST -H "Content-Type: text/html" --data-binary "@/home/urban/inputs/input.html" http://localhost:3000/api/minify >> /home/urban/outputs/output.html
```

Minify PNG:
```
curl -X POST -H "Content-Type: image/png" --data-binary "@/home/urban/inputs/input.png" http://localhost:3000/api/minify >> /home/urban/outputs/output.png
```

Minify JPEG:
```
curl -X POST -H "Content-Type: image/jpeg" --data-binary "@/home/urban/inputs/input.jpg" http://localhost:3000/api/minify >> /home/urban/outputs/output.jpg
```


### Calling the API using Postman

Import "Resource Optimizer API.postman_collection.json" on Postman and change the body.
