module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins:["transform-remove-strict-mode"],
  ignore: [
    "./src/lib/mui/js/mui.min.js",
    "./src/lib/mui/js/mui.js"
    ]
}