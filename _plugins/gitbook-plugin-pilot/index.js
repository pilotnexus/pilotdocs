/**
 * @param {String} html
 * @return {String} HTML wrapped in a hint container
 */

// var moduletemplate = require('./module-template.html');

function wrapInContainer(html) {
    return '<div class="hints-container">'+html+'</div>';
}

const fs = require('fs');
const os = require('os');
const path = require('path');

module.exports = {
    book: {
//        assets: './assets',
//        css: [
//            'plugin-hints.css'
//        ]
    },

    blocks: {
        module: {
            process: function (block) {
                // Available styles: info, danger, tip, working
                var svg = block.kwargs.svg;
                //var pluginConfig = this.config.get('pluginsConfig.hints');

                return this
                    .renderBlock('markdown', block.body)
                    .then(function(renderedBody) {
                        return renderedBody + fs.readFileSync(path.join(__dirname, '/module-template.html'), 'utf-8').replace('{{svg}}',svg);
                    });
            }
        }
    }
};
