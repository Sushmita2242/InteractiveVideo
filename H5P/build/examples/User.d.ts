import { IUser } from '../src';
/**
 * Example user object
 */
export default class User implements IUser {
    constructor();
    canCreateRestricted: boolean;
    canInstallRecommended: boolean;
    canUpdateAndInstallLibraries: boolean;
    id: string;
    name: string;
    type: 'local';
}
