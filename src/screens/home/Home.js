import React,{useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import {styles} from "./homeStyle";
import {
    COLOURS,
    focus,
    plus,
    FONTS,
    heart_green_outline,
    heart_red,
    plant1,
    plant2,profile2,profile3,profile4,profile5,
    plant3,
    plant4, plant5, plant6,profile1,
    SIZES
} from "../../constant";


export const Home =({navigation}) => {

    //Dummy Data;
    const [newPlants, setNewPlants] = useState([
        {
            id: 0,
            name: "Plant 1",
            img: plant1,
            favourite: false
        },
        {
            id: 1,
            name: "Plant 2",
            img: plant2,
            favourite: true
        },
        {
            id: 2,
            name: "Plant 3",
            img: plant3,
            favourite: false
        },
        {
            id: 3,
            name: "Plant 4",
            img: plant4,
            favourite: true
        },
    ])

    const [friendList, setFriendList] = useState([
        {
            id: 0,
            img: profile1
        },
       
        {
            id: 1,
            img: profile2
        },
        {
            id: 2,
            img: profile3
        },
        {
            id: 3,
            img: profile4
        },
        {
            id: 4,
            img: profile5
        },
    ])

    const renderFriendsComponent = () => {
        if (friendList.length == 0) {
            return (
                <View></View>
            )
        } else if (friendList.length <= 3) {
            return (
                friendList.map((item,index) => (
                    <View key={`friend-${index}`}
                        style ={index == 0? {} : {marginLeft:-20}}
                    >
                        <Image
                            source={item.img}
                            resizeMode ='cover'
                            style ={{
                                width: 50,
                                height:50,
                                borderRadius: 25,
                                borderWidth:3,
                                borderColor: COLOURS.primary
                            }}
                        />
                    </View>
                ))
            )
        } else {
            return (
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    {friendList.map((item, index) => {
                        if (index <= 2) {
                            return (
                                <View
                                    key={`fri-${index}`}
                                    style ={index ==0 ? {} : {marginLeft: -20}}
                                >
                                    <Image
                                        source={item.img}
                                        resizeMode ='cover'
                                        style ={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                            borderWidth: 3,
                                            borderColor: COLOURS.primary
                                        }}
                                    />
                                </View>
                            )
                        
                        }
                    })}
                    <Text style ={{marginLeft: 5, color: COLOURS.secondary, ...FONTS.body3}}>+{friendList.length - 3} More</Text>
                </View> 
            )
        }
    }

    const renderPlants =(item, index) => {
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base}}>
                <Image
                    source={item.img}
                    resizeMode={'cover'}
                    style={{
                        width: SIZES.width *0.23,
                        height: "82%",
                        borderRadius:15,
                        borderTopLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }}
                />
                <View
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: "17%",
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        backgroundColor:COLOURS.primary
                    }}
                >
                    <Text style={{color: COLOURS.white, padding:2, ...FONTS.body4}}>{item.name}</Text>
                </View>
                <TouchableOpacity
                    onPress = {() => {console.log("Favourite on Press")}}
                    style = {{
                        position: 'absolute',
                        top: '15%',
                        left: 7
                    }}
                >
                    <Image
                        source ={item.favourite ? heart_red : heart_green_outline}
                        style = {{
                            width: 20,
                            height: 20
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style ={styles.container}>
            {/*New Plants*/}
            <View style={{height: "30%", backgroundColor: COLOURS.white}}>
                <View
                    style={{
                        flex: 1,
                        borderBottomRightRadius: 50,
                        borderBottomLeftRadius: 50,
                        backgroundColor: COLOURS.primary
                    }}
                >
                    <View style={{marginTop:SIZES.padding * 3, marginHorizontal: SIZES.padding}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                            <Text style={{color: COLOURS.white, ...FONTS.h2}}>New Plants</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log("Focus on password")}}
                            >
                                <Image
                                    source={focus}
                                    resizeMode={"contain"}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: COLOURS.white
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: SIZES.base}}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={newPlants}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({item, index}) => renderPlants(item, index)}/>
                        </View>
                    </View>
                </View>
            </View>
        {/*    Today's Share*/}
            <View style={{height: "50%", backgroundColor:COLOURS.lightGray}}>
                <View
                    style ={{
                        flex: 1,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: COLOURS.white
                    }}
                >
                    <View style ={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
                        <View style ={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style ={{color: COLOURS.secondary, ...FONTS.h2}}>Today's Share</Text>
                            <TouchableOpacity
                                onPress = {() =>{console.log("see All on pressed")}}
                            >
                                <Text style ={{color: COLOURS.secondary, ...FONTS.body3}}>See All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style ={{flexDirection: 'row', height: '80%', marginTop: SIZES.base, marginHorizontal: SIZES.padding}}>
                        <View style ={{flex: 1}}>
                            <TouchableOpacity
                                style ={{flex: 1}}
                                onPress ={() => {navigation.navigate('PlantDetail')}}
                            >
                                <Image
                                    source ={plant5} 
                                    resizeMode ="cover"
                                    style = {{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 20
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style ={{flex: 1,marginTop: SIZES.font}}
                                onPress ={() => {navigation.navigate('PlantDetail')}}
                            >
                                <Image
                                    source ={plant6}
                                    resizeMode ="cover"
                                    style = {{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 20
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style ={{flex: 1.3}}>
                            <TouchableOpacity
                                style ={{flex: 1, marginLeft: SIZES.font}}
                                onPress ={() => {navigation.navigate('PlantDetail')}}
                            >
                                <Image
                                    source={plant4}
                                    resizeMode = 'cover'
                                    style ={{
                                        height:'100%',
                                        borderRadius: 20,
                                        width: '100%'
                                    }}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

            </View>
        {/*    Added Friend*/}
            <View style={{height: "20%", backgroundColor: COLOURS.lightGray}}>
                <View style ={{flex: 1, backgroundColor: COLOURS.lightGray}}>
                    <View style ={{marginTop:SIZES.radius, marginHorizontal: SIZES.padding}}>
                        <Text style ={{color: COLOURS.secondary, ...FONTS.h2}}>Added Friends</Text>
                        <Text style ={{color: COLOURS.secondary, ...FONTS.body3}}>5 Total</Text>
                        <View style ={{flexDirection:'row', height: '60%'}}>
                            {/* firwends */}
                            <View style ={{flex: 1.3,flexDirection: 'row', alignItems: 'center'}}>
                                {renderFriendsComponent()}
                            </View>
                            {/* firwends */}
                            <View style ={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'flex-end'}}>
                                <Text style ={{color: COLOURS.secondary, ...FONTS.body3}}>Add Friends</Text>
                                <TouchableOpacity
                                    style ={{
                                        marginLeft: SIZES.base,
                                        width: 40,
                                        height: 40,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: COLOURS.gray
                                    }}
                                    onPress ={() => {console.log('Add friend on pressed');}}
                                >
                                    <Image
                                        source={plus}
                                        resizeMode ='contain'
                                        style ={{
                                            width: 35,
                                            height: 35,
                                            tintColor:COLOURS.primary
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
