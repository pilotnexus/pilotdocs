/**
 * @param {String} html
 * @return {String} HTML wrapped in a hint container
 */
function wrapInContainer(html) {
    return '<div class="hints-container">'+html+'</div>';
}

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
                        return '<div>this is my plugin</div>';
                    });
            }
        }
    }
};
