export interface IPrincipal {
    id?: string
    name: string
    roles: string[]
}

export interface IResource {
    id?: string
    name: string
    tags: string[]
}

export interface IEmployee extends IPrincipal {
    badgeNumber: number
    title: string
    department: string
}

export interface IVisitor extends IEmployee {
    expiry: Date
}

export interface IArea extends IResource {
    ingress: string[] // entry points
    egress: string[] // exit points
}

export interface IPolicy {
    id?: string
    type: PolicyType
    principalId?: string
    principalRoles?: string[]
    resourceId?: string
    resourceTags?: string[]
}

export enum PolicyType {
    ID_TAGS,
    ID_RESOURCE,
    ROLES_TAGS,
    ROLES_RESOURCE,
}
