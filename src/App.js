class App {
  constructor(changedFiles, uploadFile, config, credential) {
    this.changedFiles = changedFiles;
    this.uploadFile = uploadFile;
    this.config = config;
    this.credential = credential;
  }

  execute() {
    const files = this.changedFiles.getFiles(this.config.path);

    files.forEach((file) => {
      let folder = null;
      if (file.includes(".jpg")) {
        folder = "images";
      }

      this.uploadFile.upload(file, folder);
    });
  }
}

module.exports = App;
