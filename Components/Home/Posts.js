import {StyleSheet, View, Image, Text, ScrollView} from "react-native";
import {Divider} from "react-native-elements";
const users = [
    {
        user: 'Larry Katuva',
        image: 'https://i.pinimg.com/originals/78/3b/e0/783be074781f55bbe26bdefa33f9b1fc.jpg'
    },
    {
        user: 'Chanzima',
        image: 'https://wallpapers.com/images/hd/cool-profile-picture-n8lf8k6jzs6ex36l.jpg'
    },
    {
        user: 'Claire',
        image: 'https://media.licdn.com/dms/image/D4D03AQFfMADjZ08U_A/profile-displayphoto-shrink_100_100/0/1663176996928?e=1685577600&v=beta&t=l8SSCuWM3LdPQlj66PxLKE5eHBmtEejq_NXHaEiwAW4'
    },
    {
        user: 'Ahmed',
        image: 'https://media.licdn.com/dms/image/D4D03AQF-TvfoqFxpbQ/profile-displayphoto-shrink_100_100/0/1678468779815?e=1685577600&v=beta&t=PvirpwIpu5GcSgZSeeoA68p1EZ0ENF8gLuwYeWicPb4'
    },
    {
        user: 'Captain',
        image: 'https://media.licdn.com/dms/image/C4D03AQGsUL28CyCBYw/profile-displayphoto-shrink_100_100/0/1623669316687?e=1685577600&v=beta&t=u8Kbn63TfOTpaAVLRWvljqM-FhXAwArlJh4_PUoHNWY'
    }
]
const posts = [
    {
        imageUrl: users[0].image,
        user: users[0].user,
        likes: 4567,
        caption: 'Feeling motivated and happy',
        profilePicture: 'https://c4.wallpaperflare.com/wallpaper/645/644/891/mafia-wallpaper-preview.jpg',
        comments: [
            {
                user: 'Claire',
                comment: 'Looking amazing'
            },
            {
                user: 'Ken',
                comment: 'Dope!'
            }
        ]
    },
    {
        imageUrl: users[1].image,
        user: users[1].user,
        likes: 4567,
        caption: 'Feeling motivated and happy',
        profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq863pqJR0bUC5dYtK1_4dANA11c5M8GvODQ&usqp=CAU',
        comments: [
            {
                user: 'Claire',
                comment: 'Looking amazing'
            },
            {
                user: 'Ken',
                comment: 'Dope!'
            }
        ]
    }
]


const PostHeader = ({post}) => {
    return (
        <View style={styles.postHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{ uri: post.profilePicture }} style={styles.storyImage}/>
                <Text style={styles.postHeaderText}>{post.user }</Text>
            </View>
            <Text style={{ color: 'white', fontWeight: '900'}}>...</Text>
        </View>
    )
}

const PostImage = ({post}) => {
    return (
        <View style={{ width: '100%', height: 450 }}>
            <Image source={{ uri: post.imageUrl}} style={{ height: '100%', resizeMode: 'cover'}}/>
        </View>
    )
}


const Post = ({post}) => {
    return (
        <View>
            <Divider width={1} orientation={'vertical'}/>
            <PostHeader post={post}/>
            <PostImage post={post}/>
        </View>
    )
}


const Posts = () => {
    return (
        <ScrollView>
            {posts.map((post, index) => (
                <Post key={index} post={post}/>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 30
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        alignItems: 'center',
    },
    postHeaderText: {
      color: 'white',
      marginLeft: 5,
      fontWeight: '700',
    },
    storyImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.5,
        borderColor: '#ff8501',
    },
})

export default Posts