import UnixTimestampPlugin from '../../../src/UnixTimestampPlugin';
import path from 'path';

module.exports = {
    entry: './index',
    plugins: [
        new UnixTimestampPlugin({
            filePath: path.join(__dirname)
        }),
    ],
};