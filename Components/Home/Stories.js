import {Image, ScrollView, StyleSheet, Text, View} from "react-native";

export const users = [
    {
        user: 'Larry Katuva',
        image: 'https://media.licdn.com/dms/image/C4D03AQG4cJ7lZNR9nw/profile-displayphoto-shrink_200_200/0/1650527639161?e=1685577600&v=beta&t=OZPedmOlDNgfoUjx8kpjiBHsEgtg_EWeRGNQLi7x0RA'
    },
    {
        user: 'Chanzima Outhan',
        image: 'https://media.licdn.com/dms/image/C4D03AQGajLDpdyd04g/profile-displayphoto-shrink_100_100/0/1618636906201?e=1685577600&v=beta&t=9sP3pIS2m0QnOgPEagnfrvX7gBbgQ9APJqdPqj8A0Bo'
    },
    {
        user: 'Claire Kanini',
        image: 'https://media.licdn.com/dms/image/D4D03AQFfMADjZ08U_A/profile-displayphoto-shrink_100_100/0/1663176996928?e=1685577600&v=beta&t=l8SSCuWM3LdPQlj66PxLKE5eHBmtEejq_NXHaEiwAW4'
    },
    {
        user: 'Ahmed mana',
        image: 'https://media.licdn.com/dms/image/D4D03AQF-TvfoqFxpbQ/profile-displayphoto-shrink_100_100/0/1678468779815?e=1685577600&v=beta&t=PvirpwIpu5GcSgZSeeoA68p1EZ0ENF8gLuwYeWicPb4'
    },
    {
        user: 'Captain Mwangi',
        image: 'https://media.licdn.com/dms/image/C4D03AQGsUL28CyCBYw/profile-displayphoto-shrink_100_100/0/1623669316687?e=1685577600&v=beta&t=u8Kbn63TfOTpaAVLRWvljqM-FhXAwArlJh4_PUoHNWY'
    }
]

const Story = ({ story, index }) => {
    return (
        <View key={index} style={styles.story}>
            <Image style={styles.storyImage} source={{ uri: story.image }}/>
            <Text style={styles.storyText}>{
                story.user.length > 10? story.user.slice(0, 10).toLowerCase() + '...': story.user.toLowerCase() }
            </Text>
        </View>
    )
}

const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {users.map((story, index) => (
                    <View key={index} style={styles.story}>
                        <Image style={styles.storyImage} source={{ uri: story.image }}/>
                        <Text style={styles.storyText}>{
                            story.user.length > 10? story.user.slice(0, 10).toLowerCase() + '...': story.user.toLowerCase() }
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        alignItems: 'center',
        textAlign: 'center',
    },
    storyImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 5,
        borderWidth: 3,
        borderColor: '#ff8501',
    },
    storyText: {
        marginBottom: 5,
        color: 'white'
    }
})

export default Stories