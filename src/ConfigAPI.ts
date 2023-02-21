export const ConfigApi = {
    auth:{
        signing: "auth/signing",
        refresh: "auth/refresh"
    },
    profile:{
        currentProfile: "profile/",
        updatePassword: "profile/update/password"
    },
    users:{
        allUsers: "users/",
        userById: (id: string) => `${ConfigApi.users.allUsers}${id}`,
        userByEmail: (email: string) => `${ConfigApi.users.allUsers}search/${email}`,
        updateUserPassword: (id: string)=> `${ConfigApi.users.allUsers}update/password/${id}`
    },
    roles:{
        allRoles: "roles/",
        roleById: (id: string) => `${ConfigApi.roles.allRoles}${id}`,
        roleByName: (name: string) => `${ConfigApi.roles.allRoles}search/${name}`,
        roleWithUsers: (roleId: string)=> `${ConfigApi.roles.allRoles}users/${roleId}`,
        roleWithPermissions: (roleId: string)=> `${ConfigApi.roles.allRoles}permissions/${roleId}`,
    },
    modules:{
        allModulos: "modules/",
        moduleById: (id: string) => `${ConfigApi.modules.allModulos}${id}`,
        moduleByName: (name: string) => `${ConfigApi.modules.allModulos}search/${name}`,
        moduleActions: (idModule: string) => `${ConfigApi.modules.allModulos}actions/${idModule}`
    },
    actions:{
        allActions: "actions/",
        actionById: (id: string) => `${ConfigApi.actions.allActions}${id}`
    },
    permissions:{
        allPermissions: "permissions/",
        permissionsById: (id: string) => `${ConfigApi.permissions.allPermissions}${id}`
    }
}