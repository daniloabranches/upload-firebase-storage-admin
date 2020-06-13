const path = require("path");

class UploadFile {
  constructor(bucket) {
    this.bucket = bucket;
  }

  async upload(filename, folder) {
    if (folder) {
      folder = `${folder}/${path.basename(filename)}`;
    }

    await this.bucket.upload(filename, {
      gzip: true,
      destination: folder,
    });

    console.log(`${filename} uploaded.`);
  }
}

module.exports = UploadFile;
