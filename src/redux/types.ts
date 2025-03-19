export interface User {
    username : string,
    password : string,
    role: string,
    createdAt: Date
}

export interface UserState {
    user: User | null,
    isLogin: boolean
}

export interface Follow {
    followingUserId: number,
    followedUserId: number,
    createdAt: Date
}

export interface Post {
    title: string,
    body: string,
    userId: number,
    status: boolean,
    createdAt: Date
}