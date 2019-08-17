module.exports = {
  presets: ["@vue/app"],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: name => {
        console.log(`name:`, name)
        return `${name}/style/less`
      }
    }, 'vant']
  ]
};
