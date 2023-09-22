const withPWA = require('next-pwa')({
  dest: 'public',
  register: false,
  skipWaiting: false
})

module.exports = withPWA()



// const withPWA = require('next-pwa')({
//   //   dest: 'public',
//   //   register: false,
//   //   skipWaiting: false,
//   // })
  
//   // const plugins = []
//   // plugins.push(withPWA)
  
//   // const nextConfig = {
//   //   distDir: 'build',
//   // }
  
//   // module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig)
