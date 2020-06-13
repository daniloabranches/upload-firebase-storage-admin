const glob = require("glob");
const fs = require("fs");
const moment = require("moment");

class ChangedFiles {
  getFiles(path) {
    const files = glob.sync(path + "/**/*");
    return files.filter((file) => {
      const stats = fs.statSync(file);
      return (
        stats.isFile() && stats.mtime > moment().subtract(1, "days").toDate()
      );
    });
  }
}

module.exports = ChangedFiles;
