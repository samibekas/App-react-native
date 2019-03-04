import { Navigation } from 'react-native-navigation'

const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs: [
            {
                screen: "awesome-places.FindPlaceScreen",
                label: "Find place",
                title: "Find place"
            },
            {
                screen: "awesome-places.SharePlaceScreen",
                label: "Share place",
                title: "Share place"
            }
        ]
    })
}

export default startTabs
