const logger = require("winston");
const CssRouter = require("../routers/CssRouter");
const HtmlRouter = require("../routers/HtmlRouter");
const JsRouter = require("../routers/JsRouter");
const ImageRouter = require("../routers/ImageRouter");
const config = require("../../config/config");

module.exports = function(app) {

  const API_ENDPOINT = "/api/minify";

  app.post(API_ENDPOINT, function(req, res, next) {
    logger.info("Recebendo POST");

    if(containsInvalidContent(req)) {
      let msg = "Tipo de conteúdo recebido é inválido " + req.get("Content-Type");
      logger.warn(msg);
      return res.status(406).send(msg);
    }

    req.url = rewriteURL(req) + extractQuery(req.url);

    logger.info("Redirecionando a rota para " + req.url);

    next();
  });

  app.use(API_ENDPOINT, CssRouter);
  app.use(API_ENDPOINT, HtmlRouter);
  app.use(API_ENDPOINT, JsRouter);
  app.use(API_ENDPOINT, ImageRouter);

  app.use(function(req, res) {
    logger.warn(`Someone tried to reach ${req.url}`);
    res.status(404).send("Oops, not found! The endpoind that you are looking for might be /api/minify");
  });

  function containsInvalidContent(req) {
    return !(containsCSS(req)
      || containsJS(req)
      || containsHTML(req)
      || containsImage(req));
  }

  function containsCSS(req) {
    return containsAcceptedContentType(req, config.api.acceptTypes.css);
  }

  function containsJS(req) {
    return containsAcceptedContentType(req, config.api.acceptTypes.js);
  }

  function containsHTML(req) {
    return containsAcceptedContentType(req, config.api.acceptTypes.html);
  }

  function containsImage(req) {
    return containsAcceptedContentType(req, config.api.acceptTypes.images.jpeg, config.api.acceptTypes.images.png);
  }

  function containsAcceptedContentType(req, ...contentTypes) {
    return contentTypes.includes(req.get("Content-Type"));
  }

  function rewriteURL(req) {
    if(containsCSS(req)) {
      url = API_ENDPOINT + "/css";
    } else if (containsJS(req)) {
      url = API_ENDPOINT + "/js";
    } else if (containsHTML(req)) {
      url = API_ENDPOINT + "/html";
    } else if(containsImage(req)) {
      url = API_ENDPOINT + "/image";
    }

    return url;
  }

  function extractQuery(url) {
    var pattern = escapeRegExp(API_ENDPOINT) + "\\?(.*)";
    var matchGroups = new RegExp(pattern).exec(url);
    if(matchGroups) return "?" + matchGroups[1];
    return "";
  }

  function escapeRegExp(stringToGoIntoTheRegex) {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

}
