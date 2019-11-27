/*
 * Copyright ©️ 2019 GaltProject Society Construction and Terraforming Company
 * (Founded by [Nikolai Popeka](https://github.com/npopeka)
 *
 * Copyright ©️ 2019 Galt•Core Blockchain Company
 * (Founded by [Nikolai Popeka](https://github.com/npopeka) by
 * [Basic Agreement](ipfs/QmaCiXUmSrP16Gz8Jdzq6AJESY1EAANmmwha15uR3c1bsS)).
 */

import {
  GroupType,
  IContent,
  IDatabase,
  IFileCatalogItem,
  IGroup, IListParams,
  IPost,
  IUser, IUserAccount,
  IUserApiKey, IUserAuthMessage,
  IUserLimit
} from "../database/interface";
import {IStorage} from "../storage/interface";
import {GeesomeEmitter} from "./v1/events";
import {IRender} from "../render/interface";

export interface IGeesomeApp {
  config: any;
  database: IDatabase;
  storage: IStorage;
  events: GeesomeEmitter;
  render: IRender;
  authorization: any;

  frontendStorageId;

  getSecretKey(keyName): Promise<string>;

  setup(userData: IUserInput): Promise<{user: IUser, apiKey: string}>;

  registerUser(userData: IUserInput): Promise<IUser>;

  loginPassword(usernameOrEmail, password): Promise<IUser>;

  loginAuthMessage(authMessageId, address, signature, params?): Promise<IUser>;

  generateUserAccountAuthMessage(accountProvider, accountAddress): Promise<IUserAuthMessageResponse>;

  updateUser(userId, updateData): Promise<IUser>;

  setUserAccount(userId, accountData): Promise<IUserAccount>;

  generateUserApiKey(userId, apiKeyData): Promise<string>;

  updateApiKey(userId, id, updateData): Promise<void>;

  getUserByApiKey(apiKey): Promise<IUser>;

  getUserApiKeys(userId, isDisabled?, search?, listParams?: IListParams): Promise<IUserApiKeysListResponse>;

  setUserLimit(adminId, limitData: IUserLimit): Promise<IUserLimit>;

  getMemberInGroups(userId, types: GroupType[]): Promise<IGroup[]>;

  getAdminInGroups(userId, types: GroupType[]): Promise<IGroup[]>;

  getPersonalChatGroups(userId): Promise<IGroup[]>;

  addUserFriendById(userId, friendId): Promise<void>;

  removeUserFriendById(userId, friendId): Promise<void>;

  getUserFriends(userId, search?, listParams?: IListParams): Promise<IUserListResponse>;

  canCreatePostInGroup(userId, groupId);

  canEditGroup(userId, groupId);

  isAdminInGroup(userId, groupId): Promise<boolean>;

  isMemberInGroup(userId, groupId): Promise<boolean>;

  addMemberToGroup(userId, groupId): Promise<void>;

  removeMemberFromGroup(userId, groupId): Promise<void>;

  addAdminToGroup(userId, groupId): Promise<void>;

  removeAdminFromGroup(userId, groupId): Promise<void>;

  createPost(userId, postData);

  updatePost(userId, postId, postData);

  createGroup(userId, groupData): Promise<IGroup>;

  createGroupByRemoteStorageId(manifestStorageId): Promise<IGroup>;

  updateGroup(userId, id, updateData): Promise<IGroup>;

  getGroup(groupId): Promise<IGroup>;

  getGroupPosts(groupId, listParams?: IListParams): Promise<IPost[]>;

  asyncOperationWrapper(methodName, args, options);

  saveData(fileStream, fileName, options);

  saveDataByUrl(url, options);

  getAsyncOperation(userId, id);

  createContentByRemoteStorageId(manifestStorageId): Promise<IContent>;

  createPostByRemoteStorageId(manifestStorageId, groupId, publishedAt?, isEncrypted?): Promise<IPost>;

  getFileStream(filePath, options?);

  checkStorageId(storageId): string;

  getDataStructure(dataId);

  getDataStructure(dataId);

  getFileCatalogItems(userId, parentItemId, type?, search?, listParams?: IListParams): Promise<IFileCatalogListResponse>;

  getFileCatalogItemsBreadcrumbs(userId, itemId): Promise<IFileCatalogItem[]>;

  getFileCatalogItemsBreadcrumbs(userId, itemId): Promise<IFileCatalogItem[]>;

  getContentsIdsByFileCatalogIds(catalogIds): Promise<number[]>;

  createUserFolder(userId, parentItemId, folderName): Promise<IFileCatalogItem>;

  addContentToFolder(userId, contentId, folderId): Promise<any>;

  updateFileCatalogItem(userId, fileCatalogId, updateData): Promise<IFileCatalogItem>;

  saveContentByPath(userId, path, contentId): Promise<IFileCatalogItem>;

  getContentByPath(userId, path): Promise<IContent>;

  getFileCatalogItemByPath(userId, path, type): Promise<IFileCatalogItem>;

  publishFolder(userId, fileCatalogId): Promise<{storageId:string, staticId:string}>;

  regenerateUserContentPreviews(userId): Promise<void>;

  getAllUserList(adminId, searchString, listParams?: IListParams): Promise<IUser[]>;

  getAllContentList(adminId, searchString, listParams?: IListParams): Promise<IContent[]>;

  getAllGroupList(adminId, searchString, listParams?: IListParams): Promise<IGroup[]>;

  getUserLimit(adminId, userId, limitName): Promise<IUserLimit>;

  getContent(contentId): Promise<IContent>;

  getContentByStorageId(storageId): Promise<IContent>;

  //TODO: define interface
  getPeers(topic): Promise<any>;

  //TODO: define interface
  getIpnsPeers(ipns): Promise<any>;

  //TODO: define interface
  getGroupPeers(groupId): Promise<any>;

  createStorageAccount(accountName): Promise<string>;

  resolveStaticId(staticId): Promise<string>;
}

export interface IUserInput {
  name: string;
  email?: string;
  password?: string;

  accounts: IUserAccountInput[];
}

export interface IUserAccountInput {
  id?: number;
  provider: string;
  address: string;
  description: string;
  type?: string;
}

export interface IUserAuthResponse {
  apiKey: string;
  user: IUser;
}

export interface IUserAuthMessageResponse {
  id: number;
  provider: string;
  address: string;
  message: string;
}

export interface IFileCatalogListResponse {
  list: IFileCatalogItem[];
  total: number;
}

export interface IUserApiKeysListResponse {
  list: IUserApiKey[];
  total: number;
}

export interface IUserListResponse {
  list: IUser[];
  total: number;
}
