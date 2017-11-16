define({ "api": [
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Minify CSS",
    "version": "0.2.0",
    "name": "MinifyCSS",
    "group": "API",
    "examples": [
      {
        "title": "Exemplo:",
        "content": "curl -X POST -H \"Content-Type: text/css\" --data-binary \"@/home/urban/inputs/input.css\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.css",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
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
            "description": "<p>Conteúdo minificado.</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/CssRouter.js",
    "groupTitle": "API"
  },
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Minify HTML",
    "version": "0.1.0",
    "name": "MinifyHTML",
    "group": "API",
    "examples": [
      {
        "title": "Exemplo:",
        "content": "curl -X POST -H \"Content-Type: text/html\" --data-binary \"@/home/urban/inputs/input.html\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.html",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
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
            "description": "<p>Conteúdo minificado.</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/HtmlRouter.js",
    "groupTitle": "API"
  },
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Minify JS",
    "version": "0.1.0",
    "name": "MinifyJS",
    "group": "API",
    "examples": [
      {
        "title": "Exemplo:",
        "content": "curl -X POST -H \"Content-Type: text/javascript\" --data-binary \"@/home/urban/inputs/input.js\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.js",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
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
            "description": "<p>Conteúdo minificado.</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/JsRouter.js",
    "groupTitle": "API"
  },
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Optimize JPEG",
    "version": "0.1.0",
    "name": "OptimizeJPEG",
    "group": "API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "jpegQuality",
            "description": "<p>?jpegQuality=high para definir que a qualidade da imagem deve permanecer alta. Opções possíveis são: low, average ou high</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo:",
        "content": "curl -X POST -H \"Content-Type: image/jpeg\" --data-binary \"@/home/urban/inputs/input.jpg\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.jpg",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
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
            "description": "<p>Conteúdo minificado.</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/ImageRouter.js",
    "groupTitle": "API"
  },
  {
    "type": "post",
    "url": "/api/minify",
    "title": "Optimize PNG",
    "version": "0.1.0",
    "name": "OptimizePNG",
    "group": "API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pngQuality",
            "description": "<p>?pngQuality=high para definir que a qualidade da imagem deve permanecer alta. Opções possíveis são: low, average ou high</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemplo:",
        "content": "curl -X POST -H \"Content-Type: image/png\" --data-binary \"@/home/urban/inputs/input.png\" https://resource-optimizer-api.herokuapp.com/api/minify >> /home/urban/outputs/output.png",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
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
            "description": "<p>Conteúdo otimizado.</p>"
          }
        ]
      }
    },
    "filename": "lib/routers/ImageRouter.js",
    "groupTitle": "API"
  }
] });
