// document.write(
//   '<script src="//unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"></script>');
// document.write(
//   '<div id="imin-swagger-ui-embed" style="width:100%">\n' +
//   '</div>');
// document.write(
//   '<script>\n' +
//   '  // Build a system\n' +
//   '  var ui = window.SwaggerUIBundle({\n' +
//   '    url: "https://imin-platform-search-te-pr-188.herokuapp.com/v2/spec.yaml",\n' +
//   '    dom_id: "#imin-swagger-ui-embed",\n' +
//   '    presets: [\n' +
//   '      SwaggerUIBundle.presets.apis,\n' +
//   '      SwaggerUIBundle.SwaggerUIStandalonePreset\n' +
//   '    ],\n' +
//   '    layout: "StandaloneLayout"\n' +
//   '  });\n' +
//   '  window.iminSwaggerUiEmbed = ui;\n' +
//   '</script>');
  
document.write(
  '<script src="https://imin-api-docs.firebaseapp.com/swagger-ui.js" type="text/javascript"></script>');
document.write(
  '<div id="imin-swagger-ui-embed" style="width:100%">\n' +
  '</div>');
document.write(
  '<script>\n' +
  '    // Pre load translate...\n' +
  '    if(window.SwaggerTranslator) {\n' +
  '      window.SwaggerTranslator.translate();\n' +
  '    }\n' +
  '    window.swaggerUi = new SwaggerUi({\n' +
  '      url: "https://imin-platform-search-te-pr-188.herokuapp.com/v2/spec.yaml",\n' +
  '      dom_id: "imin-swagger-ui-embed",\n' +
  '      supportedSubmitMethods: ["get"],\n' +
  '      onComplete: function(swaggerApi, swaggerUi){\n' +
  '        \n' +
  '      },\n' +
  '      onFailure: function(data) {\n' +
  '        log("Unable to Load SwaggerUI");\n' +
  '      },\n' +
  '      docExpansion: "list",\n' +
  '      apisSorter: "alpha",\n' +
  '      showRequestHeaders: false\n' +
  '    });\n' +
  '    \n' +
  '    window.swaggerUi.load();\n' +
  '    \n' +
  '    function log() {\n' +
  '      if ("console" in window) {\n' +
  '        console.log.apply(console, arguments);\n' +
  '      }\n' +
  '    }\n' +
  '</script>');
