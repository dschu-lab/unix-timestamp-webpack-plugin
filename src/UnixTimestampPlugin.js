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
        if (compiler.hasOwnProperty('hooks')) {
            compiler.hooks.done.tap('UnixTimestampPlugin', (compilation) => {
                this.writeTimestamp(compilation.endTime);
            });
        }
        else {
            compiler.plugin('done', (compilation) => {
                this.writeTimestamp(compilation.endTime);
            });
        }
    }

    writeTimestamp(timestamp) {
        console.log(`Writing build timestamp... ${timestamp}`);

        fs.writeFileSync(`${this.options.filePath}/${this.options.fileName}`, timestamp, 'utf8');
    }
}

export default UnixTimestampPlugin;