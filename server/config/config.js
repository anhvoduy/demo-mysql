var mySql = {
    host: '172.24.0.2', // For docker => docker inspect [containerid]
    user: 'root',
    password: '3nations',
    database: 'estore',
    connectionLimit: 10,    
	debugMode: true
};

var azure = {
    provider: "azureblob",
    azureblob: {
        container: "estore",
        accountName: "accountName",
        host: "estore.blob.core.windows.net",
        accessKey: "accessKey"
    }
};

var aws = {
    provider: "s3",
    s3: {
        accessKeyId: "accessKeyId",
        secretAccessKey: "secretAccessKey",
        bucket: "estore"
    }
};

var fs = {
    provider: 'fs',
    destination: './uploads'
};

module.exports = {
    mySql: mySql,
    azure: azure,
    aws: aws,
    fs: fs,
    default: 'fs',
    secretKey: 'ilovejavascript'
};