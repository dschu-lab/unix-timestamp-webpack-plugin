import UnixTimestampPlugin from '../../../src/UnixTimestampPlugin';
import path from 'path';

process.traceDeprecation = true;

module.exports = {
    entry: path.join(__dirname, './index'),
    plugins: [
        new UnixTimestampPlugin({
            filePath: path.join(__dirname)
        }),
    ],
    output: {
        filename: './test/cases/simple/dist/basic-example.js',
    }
};