import { IPermissions } from './permissions';
export interface IAuthData{
    access_token: string,
    refresh_token: string,
    user_email: string | null,
    role_name: string | null,
    permissions: IPermissions,
}