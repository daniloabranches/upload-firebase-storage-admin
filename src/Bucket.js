const admin = require("firebase-admin");

class Bucket {
  constructor(storageBucket, credential) {
    this.storageBucket = storageBucket;
    this.credential = credential;
  }

  get() {
    admin.initializeApp({
      credential: admin.credential.cert(this.credential),
      storageBucket: this.storageBucket,
    });

    return admin.storage().bucket();
  }
}

module.exports = Bucket;
