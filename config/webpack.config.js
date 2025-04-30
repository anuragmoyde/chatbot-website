// Look for the postcss-loader configuration and update it:
{
  loader: require.resolve('postcss-loader'),
  options: {
    postcssOptions: {
      plugins: [
        'postcss-flexbugs-fixes',
        'postcss-preset-env',
        'tailwindcss',
        'autoprefixer'
      ]
    }
  }
}