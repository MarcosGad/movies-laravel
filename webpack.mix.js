const mix = require('laravel-mix');
require('laravel-mix-purgecss');


mix.postCss('resources/css/main.css', 'public/css', [
   require('tailwindcss'),
])
.purgeCss();

    