document.write(
  '<script src="//unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"></script>');
document.write(
  '<div id="imin-swagger-ui-embed" style="width:100%">\n' +
  '</div>');
document.write(
  '<script>\n' +
  '  // Build a system\n' +
  '  var ui = SwaggerUIBundle({\n' +
  '    url: "https://imin-platform-search-te-pr-188.herokuapp.com/v2/spec.yaml",\n' +
  '    dom_id: "#imin-swagger-ui-embed",\n' +
  '    deepLinking: true,\n' +
  '    presets: [\n' +
  '      SwaggerUIBundle.presets.apis,\n' +
  '      SwaggerUIStandalonePreset\n' +
  '    ],\n' +
  '    plugins: [\n' +
  '      SwaggerUIBundle.plugins.DownloadUrl\n' +
  '    ],\n' +
  '    layout: "StandaloneLayout"\n' +
  '  })\n' +
  '</script>');
  
