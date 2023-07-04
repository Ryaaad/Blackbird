/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './index.html',
  './src/**/*.{vue,jsx,ts,tsx,js}',],
  theme: {
    extend: {  screens: {
      Msm: {'max':'480px'},
      Mmd: {'max':'768px' },
      Mlg: {'max':'976px'},
      Mxl: {'max':'1115px'},
      smm: '481px',
      mdm:'769px',
      lgm: '977px',
      xlm: '1115px',
      mdx: {'min': '481px','max':'768px' },
      lgx: {'min':'769px' ,'max':'976px'},
    },},
  },
  plugins: [],
}
