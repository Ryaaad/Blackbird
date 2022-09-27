/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './index.html',
  './src/**/*.{vue,jsx,ts,tsx,js}',],
  theme: {
    extend: {  screens: {
      sm: {'max':'480px'},
      md: {'max':'768px' },
      lg: {'max':'976px'},
      xl: {'max':'1115px'},
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
