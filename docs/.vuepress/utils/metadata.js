const fs = require('fs');
const path = require('path');

const metadataFilePath = path.resolve(__dirname, '..', '..', 'api', 'api.json');
const tiApiMetadata = JSON.parse(fs.readFileSync(metadataFilePath).toString());

export function getMetadata(typeName) {

}

