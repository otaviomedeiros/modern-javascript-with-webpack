requirejs.config({
  baseUrl: "/js",
  paths: {
    "jquery": "../lib/jquery/dist/jquery.min",
    "lodash": "../lib/lodash/dist/lodash.min"
  },
  urlArgs: "v=" +  (new Date()).getTime()
});
