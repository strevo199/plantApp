import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOURS, drop, focus, back, chevron,down_arrow, FONTS, garden, plant4, seed, SIZES, sun, temperature } from '../../constant';

const RequirementBar = ({icon, barPercentage}) => {
    return (
        <View style ={{height: 60, alignItems: 'center'}}>
            <View
                style ={{
                    width: 50,
                    height: 50,
                     alignItems: 'center',
                     justifyContent: 'center',
                     borderRadius: 10,
                     borderWidth: 1,
                     borderColor: COLOURS.gray
                }}
            >
                <Image
                    source={icon}
                    resizeMode = 'cover'
                    style = {{
                        tintColor: COLOURS.secondary,
                        width: 30,
                        height: 30, 
                    }}
                />
            </View>
            {/* Bar */}
            <View
                style ={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: 3,
                    marginTop: SIZES.base,
                    backgroundColor: COLOURS.gray
                }}
            ></View>
            
            <View
                style ={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: barPercentage,
                    height: 3,
                    marginTop: SIZES.base,
                    backgroundColor: COLOURS.primary
                }}
            ></View>
        </View>
    )
}

const RequirementDetail =({icon, label, detail}) => {
    return (
        <View style ={{flexDirection: 'row'}}>
            <View style ={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                    source={icon}
                    style ={{
                        tintColor: COLOURS.secondary,
                        width: 30,
                        height: 30
                    }}
                    resizeMode = 'cover'
                />
                <Text style ={{marginLeft:SIZES.base, color: COLOURS.secondary, ...FONTS.h2}}>{label}</Text>
            </View>
            <View style ={{flex:1, alignItems: 'flex-end'}}>
                <Text style ={{marginLeft: SIZES.base, color: COLOURS.gray, ...FONTS.h2}}>{detail}</Text>
            </View>
        </View>
    )
}


export const PlantDetails =({navigation}) => {

    const renderRequirement = () => {
        return (
            <View style ={{flex: 2.5, marginTop: SIZES.padding, paddingHorizontal: SIZES.padding, justifyContent: 'space-between',alignItems:'center'}}>
                <RequirementDetail
                    icon = {sun}
                    label = "Sunlight"
                    detail = "15°C"
                />
                <RequirementDetail
                    icon = {drop}
                    label = "Water"
                    detail = "200 ML Daily"
                />
                <RequirementDetail
                    icon = {temperature}
                    label = "Room Temp"
                    detail = "25°C"
                />
                <RequirementDetail
                    icon = {garden}
                    label = "Soil"
                    detail = "3kg"
                />
                <RequirementDetail
                    icon = {seed}
                    label = "Fertilzer"
                    detail = "150 Mg"
                />
            </View>
        )

    }


    const renderRequirementBar = () => {
        return (
            <View style ={{flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.padding, justifyContent: 'space-between'}}>
                <RequirementBar
                    icon = {sun}
                    barPercentage = "50%"
                />
                <RequirementBar
                    icon = {drop}
                    barPercentage = "25%"
                />
                <RequirementBar
                    icon = {temperature}
                    barPercentage = "80%"
                />
                <RequirementBar
                    icon = {garden}
                    barPercentage = "30%"
                />
                <RequirementBar
                    icon = {seed}
                    barPercentage = "50%"
                />
            </View>
        )
    }

    const renderHeader = () => {
        return (
            <View
                style ={{
                    position: 'absolute',
                    top: 50,
                    left: SIZES.padding,
                    right: SIZES.padding
                }}
            >
                <View style ={{flexDirection: 'row'}}>
                    <View style ={{ flex: 1}}>
                        <TouchableOpacity
                            style ={{
                                width:40,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor:'rgba(255,255,255,0.5)',
                                borderRadius: 20
                            }}
                            onPress ={() => {navigation.navigate('Home')}}
                        >
                            <Image
                                source={back}
                                resizeMode = 'contain'
                                style ={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style ={{flex: 1, alignItems: 'flex-end',justifyContent: 'center'}}
                        onPress ={() => {console.log('Focus on pressed')}}
                    >
                        <Image
                            source={focus}
                            resizeMode ='contain'
                            style ={{
                                width: 30,
                                height: 30,
                                tintColor: COLOURS.primary

                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style ={{flexDirection: 'row', marginTop: '10%'}}>
                    <View style ={{flex: 1}}>
                        <Text style ={{color: COLOURS.white, ...FONTS.largeTitle}}>Glory Mantas</Text>
                    </View>
                    <View style ={{flex: 1}}>

                    </View>
                </View>
            </View>
        )
    }
    const renderFooter = () => {
        return (
            <View style = {{flex: 1, flexDirection: 'row', paddingVertical: SIZES.padding}}>
                <TouchableOpacity
                    style = {{
                        flex:1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30,
                        paddingHorizontal: SIZES.padding,
                        backgroundColor: COLOURS.primary
                    }}
                    onPress ={() => {console.log('Take action')}}
                >
                    <Text style ={{color: COLOURS.white, ...FONTS.h2}}>Take Action</Text>
                    <Image
                        source={chevron}
                        resizeMode = 'contain'
                        style ={{
                            marginLeft: SIZES.padding,
                            width: 25,
                            tintColor: COLOURS.white,
                            height: 25
                        }}
                    />
                </TouchableOpacity>
                <View style ={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: SIZES.padding}}>
                        <Text style ={{flex: 1, color: COLOURS.secondary, ...FONTS.h3, }}>Almost 2 weeks of growing time</Text>
                        <Image
                            source={down_arrow}
                            resizeMode ='contain'
                            style ={{
                                tintColor: COLOURS.primary,
                                marginLeft: SIZES.base,
                                width: 20,
                                height: 20
                            }}
                        />
                </View>
            </View>
        )
    }

    return (
        <View style ={styles.container}>
            {/* Banner Photo */}
            <View style ={{height: "35%"}}>
                <Image
                    source={plant4}
                    resizeMode ='cover'
                    style ={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>

            {/* requirement */}
            <View
                style ={{
                    flex: 1,
                    marginTop: -40,
                    backgroundColor:COLOURS.lightGray,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingVertical: SIZES.padding
                }}
            >
                <Text style ={{paddingHorizontal: SIZES.padding, color: COLOURS.secondary, ...FONTS.h1}}>Requirement</Text>
                {renderRequirementBar()}
                {renderRequirement()}
                {renderFooter()}
            </View>
            {renderHeader()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})