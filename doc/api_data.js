define({ "api": [
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Minify CSS",
    "version": "0.2.0",
    "name": "MinifyCSS",
    "group": "Minify",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST -H \"Content-Type: text/css\" --data-binary \"@/home/urban/inputs/input.css\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.css",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>text/css</p>"
          }
        ],
        "Response Headers": [
          {
            "group": "Response Headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>text/css</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Content minified</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/CssRouter.js",
    "groupTitle": "Minify"
  },
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Minify HTML",
    "version": "0.1.0",
    "name": "MinifyHTML",
    "group": "Minify",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST -H \"Content-Type: text/html\" --data-binary \"@/home/urban/inputs/input.html\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.html",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>text/html</p>"
          }
        ],
        "Response Headers": [
          {
            "group": "Response Headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>text/html</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Content minified</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/HtmlRouter.js",
    "groupTitle": "Minify"
  },
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Minify JPEG",
    "version": "0.1.0",
    "name": "MinifyJPEG",
    "group": "Minify",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST -H \"Content-Type: image/jpeg\" --data-binary \"@/home/urban/inputs/input.jpg\" http://localhost:3000/api/minify >> /home/urban/outputs/output.jpg",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>image/jpeg</p>"
          }
        ],
        "Response Headers": [
          {
            "group": "Response Headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>image/jpeg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Buffer",
            "optional": false,
            "field": "body",
            "description": "<p>Content minified</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/ImageRouter.js",
    "groupTitle": "Minify"
  },
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Minify JS",
    "version": "0.1.0",
    "name": "MinifyJS",
    "group": "Minify",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST -H \"Content-Type: text/javascript\" --data-binary \"@/home/urban/inputs/input.js\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.js",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>text/javascript</p>"
          }
        ],
        "Response Headers": [
          {
            "group": "Response Headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>text/javascript</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Content minified</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/JsRouter.js",
    "groupTitle": "Minify"
  },
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Minify PNG",
    "version": "0.1.0",
    "name": "MinifyPNG",
    "group": "Minify",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST -H \"Content-Type: image/png\" --data-binary \"@/home/urban/inputs/input.png\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.png",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Request Headers": [
          {
            "group": "Request Headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>image/png</p>"
          }
        ],
        "Response Headers": [
          {
            "group": "Response Headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>image/png</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Buffer",
            "optional": false,
            "field": "body",
            "description": "<p>Content minified</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/ImageRouter.js",
    "groupTitle": "Minify"
  }
] });
