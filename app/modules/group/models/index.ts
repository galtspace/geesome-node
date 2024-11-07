/*
 * Copyright ©️ 2018-2020 Galt•Project Society Construction and Terraforming Company
 * (Founded by [Nikolai Popeka](https://github.com/npopeka)
 *
 * Copyright ©️ 2018-2020 Galt•Core Blockchain Company
 * (Founded by [Nikolai Popeka](https://github.com/npopeka) by
 * [Basic Agreement](ipfs/QmaCiXUmSrP16Gz8Jdzq6AJESY1EAANmmwha15uR3c1bsS)).
 */
import {Sequelize} from 'sequelize';

export default async function (sequelize: Sequelize, appModels) {

  appModels.Group = await (await import('./group')).default(sequelize, appModels);
  appModels.GroupPermission = await (await import('./groupPermission')).default(sequelize, appModels);
  appModels.GroupRead = await (await import('./groupRead')).default(sequelize, appModels);
  appModels.Post = await (await import('./post')).default(sequelize, appModels);

  appModels.Mention = await (await import('./mention')).default(sequelize, appModels);

  appModels.Tag = await (await import('./tag')).default(sequelize, appModels);
  appModels.AutoTag = await (await import('./autoTag')).default(sequelize, appModels);

  return appModels;
};
