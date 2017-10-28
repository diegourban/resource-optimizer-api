var config = module.exports

config.express = {
  port: process.env.PORT || 3000,
  ip: "localhost"
}
config.api = {
  acceptTypes: {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    image: ["image/jpeg", "image/png"]
  }
}
