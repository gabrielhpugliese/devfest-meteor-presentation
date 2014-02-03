marked.setOptions({
  langPrefix: '',
  breaks: true,
  sanitize: true,
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  }
});

