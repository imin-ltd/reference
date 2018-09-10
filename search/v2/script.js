document.write(
  '<script src="//imin-ltd.github.io/swagger-ui-embed/lib/swagger-ui-bundle.js"></script>');
document.write(
  '<div id="imin-swagger-ui-embed" style="width:100%">\n' +
  '</div>');
document.write(
  '<script>\n' +
  '  // Build a system\n' +
  '  var ui = window.SwaggerUIBundle({\n' +
  '    url: "https://search.imin.co/v2/spec.yaml",\n' +
  '    dom_id: "#imin-swagger-ui-embed",\n' +
  '    presets: [\n' +
  '      SwaggerUIBundle.presets.apis,\n' +
  '      SwaggerUIBundle.SwaggerUIStandalonePreset\n' +
  '    ],\n' +
//   '    layout: "StandaloneLayout"\n' +
  '  });\n' +
  '  window.iminSwaggerUiEmbed = ui;\n' +
  '</script>');
  
// # Copied from imin.co/imin-platform-api
// document.write(
//   '<script src="https://imin-api-docs.firebaseapp.com/swagger-ui.js" type="text/javascript"></script>\n' +
//   '<script src="https://imin-api-docs.firebaseapp.com/lib/jquery-1.8.0.min.js" type="text/javascript"></script>\n' +
//   '<script src="https://imin-api-docs.firebaseapp.com/lib/jquery.slideto.min.js" type="text/javascript"></script>\n' +
//   '<script src="https://imin-api-docs.firebaseapp.com/lib/jquery.wiggle.min.js" type="text/javascript"></script>\n' +
//   '<script src="https://imin-api-docs.firebaseapp.com/lib/jquery.ba-bbq.min.js" type="text/javascript"></script>\n' +
//   '<script src="https://imin-api-docs.firebaseapp.com/lib/handlebars-2.0.0.js" type="text/javascript"></script>\n' +
//   '<script src="https://imin-api-docs.firebaseapp.com/lib/underscore-min.js" type="text/javascript"></script>\n' +
//   '<script src="https://imin-api-docs.firebaseapp.com/lib/backbone-min.js" type="text/javascript"></script>\n' +
//   '<script src="https://imin-api-docs.firebaseapp.com/swagger-ui.js" type="text/javascript"></script>\n' +
//   '<script src="https://imin-api-docs.firebaseapp.com/lib/highlight.7.3.pack.js" type="text/javascript"></script>\n' +
//   '<script src="https://imin-api-docs.firebaseapp.com/lib/marked.js" type="text/javascript"></script>\n' +
//   '<script src="https://imin-api-docs.firebaseapp.com/lib/swagger-oauth.js" type="text/javascript"></script>');

// document.write(
//   '<div id="imin-swagger-ui-embed" style="width:100%">\n' +
//   '</div>');
// document.write(
//   '<script>\n' +
//   '    // Pre load translate...\n' +
//   '    if(window.SwaggerTranslator) {\n' +
//   '      window.SwaggerTranslator.translate();\n' +
//   '    }\n' +
//   '    window.swaggerUi = new SwaggerUi({\n' +
//   '      url: "https://search.imin.co/v2/spec.yaml",\n' +
//   '      dom_id: "imin-swagger-ui-embed",\n' +
//   '      supportedSubmitMethods: ["get"],\n' +
//   '      onComplete: function(swaggerApi, swaggerUi){\n' +
//   '        \n' +
//   '      },\n' +
//   '      onFailure: function(data) {\n' +
//   '        log("Unable to Load SwaggerUI");\n' +
//   '      },\n' +
//   '      docExpansion: "list",\n' +
//   '      apisSorter: "alpha",\n' +
//   '      showRequestHeaders: false\n' +
//   '    });\n' +
//   '    \n' +
//   '    window.swaggerUi.load();\n' +
//   '    \n' +
//   '    function log() {\n' +
//   '      if ("console" in window) {\n' +
//   '        console.log.apply(console, arguments);\n' +
//   '      }\n' +
//   '    }\n' +
//   '</script>');
