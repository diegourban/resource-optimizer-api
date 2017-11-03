# resource-optimizer-api
API to optimize web page resources

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

Header Content Types accepted:
- text/css
- text/html
- text/javascript
- image/png
- image/jpeg


#### Examples:

Minify CSS:
```
curl -X POST -H "Content-Type: text/css" --data-binary "@/home/urban/Documents/inputs/input.css" http://localhost:3000/api/minify >> /home/urban/Documents/outputs/output.css
```

Minify HTML:
```
curl -X POST -H "Content-Type: text/html" --data-binary "@/home/urban/Documents/inputs/input.html" http://localhost:3000/api/minify >> /home/urban/Documents/outputs/output.html
```

Minify JavaScript:
```
curl -X POST -H "Content-Type: text/javascript" --data-binary "@/home/urban/Documents/inputs/input.js" http://localhost:3000/api/minify >> /home/urban/Documents/outputs/output.js
```

Minify PNG:
```
curl -X POST -H "Content-Type: image/png" --data-binary "@/home/urban/Documents/inputs/input.png" http://localhost:3000/api/minify >> /home/urban/Documents/outputs/output.png
```

Minify JPEG:
```
curl -X POST -H "Content-Type: image/jpeg" --data-binary "@/home/urban/Documents/inputs/input.jpg" http://localhost:3000/api/minify >> /home/urban/Documents/outputs/output.jpg
```


### Calling the API using Postman

Import "Resource Optimizer API.postman_collection.json" on Postman and change the body.
