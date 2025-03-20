export interface User {
    id: string,
    username : string,
    password : string,
    role: string,
    createdAt: number
}


export interface Follow {
    followingUserId: number,
    followedUserId: number,
    createdAt: number
}
export interface Post {
    id: string,
    title: string,
    body: string,
    userId: string,
    status: boolean,
    likes: string[],
    createdAt: number
}
export interface UserState {
    user: User | null,
    isLogin: boolean
}
