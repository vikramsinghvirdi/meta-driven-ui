const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files = [
        './docs/runtime-es5.js',
        './docs/polyfills-es5.js',
        './docs/polyfills-es2015.js',
        './docs/scripts.js',
        './docs/main-es5.js'
      ];

      await fs.ensureDir('output');
      await concat(files, 'output/meta-driven-ui.js');
}
concatenate();
