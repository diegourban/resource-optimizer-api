var config = module.exports

config.express = {
  port: process.env.PORT || 3000
}
config.api = {
  acceptTypes: {
    css: "text/css",
    js: "text/javascript",
    html: "text/html",
    images: {
      jpeg: "image/jpeg",
      png: "image/png"
    }
  }
}
