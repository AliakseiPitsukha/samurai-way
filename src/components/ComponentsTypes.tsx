export type PostType = {
    message: string
    likesCount: number
}
export type PostsDataType = {
    postsData: PostType[]
}
export type ProfileDataType = {
    name: string
}
export type ProfilePageType = {
    profileData: ProfileDataType
    postsBlockData: PostsDataType
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogPageType = {
    dialogData: DialogType[]
    messageData: MessageType[]
}
export type RootStateType = {
    profilePageData: ProfilePageType
    dialogPageData: DialogPageType
}