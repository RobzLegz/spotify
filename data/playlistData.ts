const playlistData = {
    name: "Ogre",
    image: "https://i.scdn.co/image/ab67706c0000bebb537e065f215536ed3e371e50",
    length: "1h 0min",
    creator: "robertssuburbos",
    creaorImage: "https://i.scdn.co/image/ab6775700000ee858f91257f72101635901cdf5d",
    songs: [
        {
            name: "IPHONE",
            authors: [
                "Rico Nasty"
            ],
            album: "Nightmare Vacation",
            cover: "https://upload.wikimedia.org/wikipedia/en/a/a9/Rico_Nasty_-_Nightmare_Vacation.jpg",
            dateAdded: "19 days ago",
            liked: false,
        }
    ]
}

const playlistOptions = [
    {
        icon: "add-circle-outline",
        iconType: "Ionicons",
        text: "Add songs"
    },
    {
        icon: "beamed-note",
        iconType: "Entypo",
        text: "Make Collaborative"
    },
    {
        icon: "edit-2",
        iconType: "Feather",
        text: "Edit playlist"
    },
    {
        icon: "close",
        iconType: "AntDesign",
        text: "Delete Playlist"
    },
    {
        icon: "download-circle",
        iconType: "MaterialCommunityIcons",
        text: "Remove download"
    },
    {
        icon: "format-list-bulleted",
        iconType: "MaterialIcons",
        text: "Add to queue"
    },
    {
        icon: "radio",
        iconType: "Feather",
        text: "Go to Playlist Radio"
    },
    {
        icon: "beamed-note",
        iconType: "Entypo",
        text: "Add to other playlist"
    },
    {
        icon: "share",
        iconType: "Fontisto",
        text: "Share"
    },
    {
        icon: "user-circle",
        iconType: "FontAwesome5",
        text: "Remove from profile"
    },
    {
        icon: "lock",
        iconType: "Feather",
        text: "Make private"
    },
    {
        icon: "smartphone",
        iconType: "Feather",
        text: "Add to Home Screen"
    }
]

export default playlistData;

export {
    playlistOptions
}