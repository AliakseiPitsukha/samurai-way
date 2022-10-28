import {RootStateType} from "../components/ComponentsTypes";

export const state: RootStateType = {
    profilePageData: {
        profileData: {name: 'Leks'},
        postsBlockData: {
            postsData: [
                {message: 'bla bla bla', likesCount: 14},
                {message: 'aklsdjhflkajshd', likesCount: 165},
            ]
        }
    },
    dialogPageData: {
        dialogData: [
            {id: 1, name: 'Horus Lupercal'},
            {id: 2, name: 'Leman Russ'},
            {id: 3, name: 'Ferrus Manus'},
            {id: 4, name: 'Fulgrim the Phoenician'},
            {id: 5, name: 'Vulkan'},
            {id: 6, name: 'Rogal Dorn'},
            {id: 7, name: 'Roboute Guilliman'},
            {id: 8, name: 'Sanguinius'},
            {id: 9, name: 'Lion El\'Jonson'},
            {id: 10, name: 'Perturabo'},
            {id: 11, name: 'Mortarion'},
            {id: 12, name: 'Lorgar Aurelian'},
            {id: 13, name: 'Jaghatai Khan'},
            {id: 14, name: 'Konrad Curze'},
            {id: 15, name: 'Angron'},
            {id: 16, name: 'Corvus Corax'},
            {id: 17, name: 'Alpharius Omegon'},
            {id: 18, name: 'Magnus the Red'},
        ],
        messageData: [
            {id: 1, message: 'message 1'},
            {id: 2, message: 'message 2'},
            {id: 3, message: 'message 3'},
            {id: 4, message: 'message 4'},
            {id: 5, message: 'message 5'},
            {id: 6, message: 'message 6'},
        ]
    },
}