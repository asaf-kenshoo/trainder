import {StyleSheet, Dimensions} from "react-native";

const PRIMARY_COLOR = "#279A72";
const SECONDARY_COLOR = "#279A72";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#21AF9D";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

//const ICON_FONT = "lucida grande'";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
    // COMPONENT - CARD ITEM
    containerCardItem: {
        backgroundColor: WHITE,
        borderRadius: 8,
        alignItems: "center",
        // margin: 10,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: BLACK,
        shadowOffset: {height: 0, width: 0}
    },
    matchesCardItem: {
        marginTop: 15,
        backgroundColor: "#28D7EB",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    matchesTextCardItem: {
        // fontFamily: ICON_FONT,
        color: WHITE,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    descriptionWrapper: {
        paddingHorizontal:10,
        backgroundColor: "#F3F7F7",
        marginHorizontal: 15,
        textAlign: "center",
        maxHeight: 240,
    },
    descriptionCardItem: {
        paddingHorizontal:10,
        color: GRAY,
        textAlign: "center"
    },
    status: {
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    statusText: {
        color: GRAY,
        fontSize: 12
    },
    online: {
        width: 6,
        height: 6,
        backgroundColor: ONLINE_STATUS,
        borderRadius: 3,
        marginRight: 4
    },
    offline: {
        width: 6,
        height: 6,
        backgroundColor: OFFLINE_STATUS,
        borderRadius: 3,
        marginRight: 4
    },
    actionsCardItem: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 30
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        // backgroundColor: WHITE,
        marginHorizontal: 32,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.15,
        shadowRadius: 20,
        shadowColor: DARK_GRAY,
        shadowOffset: {height: 10, width: 0}
    },
    miniButton: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: WHITE,
        marginHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.15,
        shadowRadius: 20,
        shadowColor: DARK_GRAY,
        shadowOffset: {height: 10, width: 0}
    },
    star: {
        // fontFamily: ICON_FONT,
        color: STAR_ACTIONS
    },
    like: {
        fontSize: 45,
        // fontFamily: ICON_FONT,
        color: OFFLINE_STATUS
    },
    dislike: {
        fontSize: 25,
        // fontFamily: ICON_FONT,
        color: ONLINE_STATUS
    },
    flash: {
        // fontFamily: ICON_FONT,
        color: FLASH_ACTIONS
    },

    header: {
        backgroundColor: "#4F1F54",
        height: 100,
        flex: 1,
    },
    headerLogo: {
        width: 130,
        flexDirection: "row",
        height: '100%',
        alignItems: 'center',
        marginHorizontal: 10
    },
    headerText: {
        // fontFamily: ICON_FONT,
        color: WHITE,
        paddingTop: 30,
        paddingLeft: 30,
        fontSize: 34
    },

    // COMPONENT - MESSAGE
    containerMessage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingHorizontal: 10,
        width: DIMENSION_WIDTH - 100
    },
    avatar: {
        borderRadius: 30,
        width: 60,
        height: 60,
        marginRight: 20,
        marginVertical: 15
    },
    message: {
        color: GRAY,
        fontSize: 12,
        paddingTop: 5
    },

    // COMPONENT - PROFILE ITEM
    centeralizeProfileContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerProfileItem: {
        backgroundColor: WHITE,
        paddingHorizontal: 10,
        paddingBottom: 25,
        margin: 20,
        borderRadius: 8,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: BLACK,
        shadowOffset: {height: 0, width: 0}
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: "red",
    },
    matchesProfileItem: {
        marginTop: 15,
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 20,
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    profileInviteFriendsLabel: {
        backgroundColor: '#32a897',
        height: 35,
        width: 130,
        marginLeft: 5,
        borderRadius: 15
    },
    matchesTextProfileItem: {
        // fontFamily: ICON_FONT,
        color: WHITE
    },
    name: {
        paddingTop: 2,
        color: DARK_GRAY,
        fontSize: 15,
        textAlign: "center"
    },
    descriptionProfileItem: {
        color: GRAY,
        textAlign: "center",
        paddingBottom: 20,
        fontSize: 13
    },
    info: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#ebf5ee',
        borderRadius: 4
    },
    iconProfile: {
        // fontFamily: ICON_FONT,
        fontSize: 12,
        color: DARK_GRAY,
        paddingHorizontal: 10
    },
    infoContent: {
        color: GRAY,
        fontSize: 13
    },

    // CONTAINER - GENERAL
    bg: {
        flex: 1,
        resizeMode: "cover",
        width: DIMENSION_WIDTH,
        height: DIMENSION_HEIGHT-340
    },
    top: {
        paddingTop: 50,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {paddingBottom: 10, fontSize: 22, color: DARK_GRAY},
    icon: {
        // fontFamily: ICON_FONT,
        fontSize: 20,
        color: DARK_GRAY,
        paddingRight: 10
    },

    // CONTAINER - HOME
    containerHome: {
        marginHorizontal: 10
    },

    // CONTAINER - MATCHES
    containerMatches: {
        justifyContent: "space-between",
        flex: 1,
        paddingHorizontal: 10
    },

    // CONTAINER - MESSAGES
    containerMessages: {
        justifyContent: "space-between",
        flex: 1,
        paddingHorizontal: 10
    },

    // CONTAINER - PROFILE
    containerProfile: {marginHorizontal: 0},
    photo: {
        width: DIMENSION_WIDTH,
        height: 450
    },
    topIconLeft: {
        // fontFamily: ICON_FONT,
        fontSize: 20,
        color: WHITE,
        paddingLeft: 20,
        marginTop: -20,
        transform: [{rotate: "90deg"}]
    },
    topIconRight: {
        // fontFamily: ICON_FONT,
        fontSize: 20,
        color: WHITE,
        paddingRight: 20
    },
    actionsProfile: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    iconButton: {
        //fontFamily: ICON_FONT,
        fontSize: 20, color: WHITE
    },
    textButton: {
        //fontFamily: ICON_FONT,
        fontSize: 15,
        color: WHITE,
        paddingLeft: 5
    },
    circledButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    roundedButton: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        height: 50,
        borderRadius: 25,
        backgroundColor: SECONDARY_COLOR,
        paddingHorizontal: 20
    },

    // MENU
    tabButton: {
        paddingTop: 20,
        paddingBottom: 30,
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    tabButtonText: {
        textTransform: "uppercase"
    },
    iconMenu: {
        // fontFamily: ICON_FONT,
        height: 20,
        paddingBottom: 7
    }
});
