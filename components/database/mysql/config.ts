/*
 * Copyright ©️ 2018 Galt•Space Society Construction and Terraforming Company
 * (Founded by [Nikolai Popeka](https://github.com/npopeka),
 * [Dima Starodubcev](https://github.com/xhipster),
 * [Valery Litvin](https://github.com/litvintech) by
 * [Basic Agreement](http://cyb.ai/QmSAWEG5u5aSsUyMNYuX2A2Eaz4kEuoYWUkVBRdmu9qmct:ipfs)).
 *
 * Copyright ©️ 2018 Galt•Core Blockchain Company
 * (Founded by [Nikolai Popeka](https://github.com/npopeka) and
 * Galt•Space Society Construction and Terraforming Company by
 * [Basic Agreement](http://cyb.ai/QmaCiXUmSrP16Gz8Jdzq6AJESY1EAANmmwha15uR3c1bsS:ipfs)).
 */

module.exports = {
    'name': 'geesome_core',
    'user': 'root',
    'password': 'root',
    'options': {
        'host': 'localhost',
        'port': 3306,
        'dialect': 'mysql',
        'operatorsAliases': false,
        'pool': { 'max': 5, 'min': 0, 'acquire': 30000, 'idle': 10000 },
        'dialectOptions': { 'multipleStatements': true, charset: 'utf8mb4', collate: 'utf8_general_ci'}
    }
};
