import fs from 'fs';

class UnixTimestampPlugin {
    constructor(options) {
        const defaultOptions = {
            filePath: './',
            fileName: '.build-timestamp',
        };

        this.options = Object.assign({}, defaultOptions, options);
    }

    apply(compiler) {
        compiler.plugin('done', function(compilation, callback, options=this.options) {
            console.log(`Writing build timestamp... ${compilation.endTime}`);

            fs.writeFileSync(`${options.filePath}/${options.fileName}`, compilation.endTime, 'utf8')
        }.bind(this));
    }
}

export default UnixTimestampPlugin;