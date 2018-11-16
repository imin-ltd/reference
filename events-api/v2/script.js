document.write(
  '<script src="//reference.imin.co/lib/swagger-ui-bundle.js"></script>');
document.write(
  // surely there's somewhere else we can get these styles
  '<link rel="stylesheet" type="text/css" href="https://petstore.swagger.io/swagger-ui.css">');
document.write(
  '<div id="imin-swagger-ui-embed" style="width:100%">\n' +
  '</div>');
document.write(
  '<script>\n' +
  '  // Build a system\n' +
  '  var ui = window.SwaggerUIBundle({\n' +
  '    url: "https://search-sandbox.imin.co/events-api/v2/spec.yaml",\n' +
  '    dom_id: "#imin-swagger-ui-embed",\n' +
  '    enableCORS: false,\n' +
  '    presets: [\n' +
  '      SwaggerUIBundle.presets.apis,\n' +
  '      SwaggerUIBundle.SwaggerUIStandalonePreset\n' +
  '    ],\n' +
  '  });\n' +
  '  window.iminSwaggerUiEmbed = ui;\n' +
  '</script>');

