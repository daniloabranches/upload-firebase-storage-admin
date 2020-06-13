const config = require("./config.json");

//credencial google gloud
const credential = require("./credential.json");

const App = require("./src/App");
const ChangedFiles = require("./src/ChangedFiles");
const UploadFile = require("./src/UploadFile");
const Bucket = require("./src/Bucket");

const changedFiles = new ChangedFiles();

const bucket = new Bucket(config.storageBucket, credential);

const uploadFile = new UploadFile(bucket.get());

const app = new App(changedFiles, uploadFile, config, credential);

app.execute();
