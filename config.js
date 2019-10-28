// this file exposes your env vars to your app

// option 1. explicit imporit
// this method remmoves dotenv as a runtime dependancy if you preload env vars
module.exports = {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT
}

// option 2. auto-parse-all import
// note that this method requires dotevnv as a runtime dependancy
/*
if (result.error) {
    throw result.error
}
const { parsed:envs } = result
console.log(envs)
module.exports = envs
*/