import { homedir } from 'os';

export const CHG_CONFIG = '.chgconfig';
export const HOME_DIR = homedir();
export const GLOBAL_CONFIG_PATH = `${HOME_DIR}/${CHG_CONFIG}`;

export const CHG_DIR = '.chg';
export const OBJECT_DIR = `${CHG_DIR}/objects`;
export const HEAD_FILE = `${CHG_DIR}/HEAD`;
