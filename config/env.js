const appRootPath = require('../router/main');
module.exports = {
    get: () => {
        appRootPath + '/.env';
    }
};
