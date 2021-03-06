import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
  ScrollView,
  Image
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Box, Text, Center, useColorModeValue} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
const image=require('../../assets/Man.png');
const imageone=require('../../assets/Manone.png');
const imagetwo=require('../../assets/Mantwo.png');
const imagethree=require('../../assets/Manthree.png');
const blankimage=require('../../assets/Blank.png');
// const crossimage=require('../../assets/cross.png');
// const plusimage=require('../../assets/plus.png');
// const image = require('../../assets/Man.png');
// const imageone = require('../../assets/Manone.png');
// const imagetwo = require('../../assets/Mantwo.png');
// const imagethree = require('../../assets/Manthree.png');
// const blankimage = require('../../assets/Blank.png');
const imagefive = require('../../assets/image5.png');
const imageeight = require('../../assets/image8.png');
const imagesix = require('../../assets/image6.png');
const imageseven = require('../../assets/image7.png');
const crossimage = require('../../assets/cross.png');
const plusimage = require('../../assets/plus.png');

const FirstRoute = () => (
  <Center flex={1} my="4">
    This is Tab 1
  </Center>
);

const SecondRoute = () => (
  <ScrollView flex={1} my="4">
      <View style={styles.view}>
        <View>
        <Image source={image} style={styles.image}></Image>
        <Image source={crossimage} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>

        </View>
        <View>
        <Image source={imageone} style={styles.image}></Image>
        <Image source={crossimage} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>

        </View>
        <View>
        <Image source={imagetwo} style={styles.image}></Image>
        <Image source={crossimage} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>

        </View>
        <View>
        <Image source={imagethree} style={styles.image}></Image>
        <Image source={crossimage} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>

        </View>
      
        <View>
        <Image source={blankimage} style={styles.image}></Image>
        <Image source={plusimage} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>

        </View>
        <View>
        <Image source={blankimage} style={styles.image}></Image>
        <Image source={plusimage} style={[styles.image,{position:'absolute',bottom:10,right:10}]}></Image>

        </View>
     
        <LinearGradient
                    colors={['#D72D79', '#9264F2']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={styles.linearGradient}>
                    {/* <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('signuptwo');
                      }}> */}
                    <TouchableOpacity >
                      <Text style={styles.buttonText}>Add Media</Text>
                    </TouchableOpacity>
                    {/* </TouchableOpacity> */}
                  </LinearGradient>
      </View>
      
   
  </ScrollView>
);

const ThirdRoute = () => (
  <ScrollView style={{flex:1}} >  
  <View style={styles.header}>
    <Text style={styles.main_header}>Liked By</Text>
    <Text style={styles.sub_header}>Today</Text>
  </View>
  <View style={styles.view}>
    <View style={styles.maincard}>
      <Image source={image} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
    <View style={styles.maincard}>
      <Image source={imageone} style={styles.image}></Image>
      <View
        style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
    
    <View style={styles.maincard}>
      <Image source={imagetwo} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
   
    <View style={styles.maincard}>
      <Image source={imagethree} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
   
    <View style={styles.maincard}>
      <Image source={imagefive} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
  
    <View style={styles.maincard}>
      <Image source={imagesix} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
   
    <View style={styles.maincard}>
      <Image source={imageseven} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
    
    <View style={styles.maincard}>
      <Image source={imageeight} style={styles.image} />
      <View style={styles.card}>
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.card_heading} >Lucasz Pl </Text>
          <Text style={styles.card_subheading}>Male, 28</Text>
          <Text style={styles.card_subheading}>New York</Text>
        </View>
        <View style={styles.percentbox}>
          <Text style={{color:'#FF0000'}}>75%</Text>
        </View>
      </View>
    </View>
  </View>
</ScrollView>
);

const FourthRoute = () => (
  <ScrollView style={{flex:1}}>  
        <View style={styles.header}>
          <Text style={styles.main_header}>New Matches</Text>
          <Text style={styles.sub_header}>Today</Text>
        </View>
        <View style={styles.view}>
          <View style={styles.maincard}>
            <Image source={image} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
          <View style={styles.maincard}>
            <Image source={imageone} style={styles.image}></Image>
            <View
              style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.maincard}>
            <Image source={imagetwo} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
         
          <View style={styles.maincard}>
            <Image source={imagethree} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
         
          <View style={styles.maincard}>
            <Image source={imagefive} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
         
          <View style={styles.maincard}>
            <Image source={imagesix} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
         
          <View style={styles.maincard}>
            <Image source={imageseven} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.maincard}>
            <Image source={imageeight} style={styles.image} />
            <View style={styles.card}>
              <View style={{ justifyContent: 'center'}}>
                <Text style={styles.card_heading} >Lucasz Pl </Text>
                <Text style={styles.card_subheading}>Male, 28</Text>
                <Text style={styles.card_subheading}>New York</Text>
              </View>
              <View style={styles.percentbox}>
                <Text style={{color:'#FF0000'}}>75%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
);

const initialLayout = {
  width: Dimensions.get('window').width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

function GalleryView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'About',
    },
    {
      key: 'second',
      title: 'Gallery',
    },
    {
      key: 'third',
      title: 'Liked By',
    },
    {
      key: 'fourth',
      title: 'New Matches',
    },
  ]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });
          const color =
            index === i
              ? ('#000', '#F14E53')
              : useColorModeValue('#1f2937', '#a1a1aa');
          const borderColor =
            index === i
              ? 'cyan.500'
              : useColorModeValue('coolGray.200', 'gray.400');
          return (
            <Box
              //borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Animated.Text
                  style={{
                    color,
                  }}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        // marginTop: StatusBar.currentHeight
        paddingTop: 10,
      }}
    />
  );
}

const styles=StyleSheet.create({
    view:{
display:'flex',
flexDirection:'row',
flexWrap:'wrap',
alignItems:'center' ,
paddingHorizontal:10

    },
    image:{
    margin:10 ,
    borderRadius:10
  
    },
    linearGradient: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
        //paddingRight: 15,
        paddingVertical: 4,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        // backgroundColor: 'transparent',
      },
      header: {
        flex: 0.3,
        flexDirection: 'column',
        alignItems: 'center',
      },
      main_header: {
        fontSize: 24,
        fontWeight: '500',
        fontFamily: 'Poppins',
        margin: 20,
      },
      sub_header: {
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Poppins',
        color: '#A4A4A4',
      },
      view: {
        flex: 0.7,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
      maincard:{
        elevation: 5,
        alignItems: 'center', 
      },
      image: {
        zIndex: 99,
        margin: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      },
      card:{
        zIndex: 100,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        borderRadius: 11,
        alignItems:'center',
        padding:10,
        marginTop: -50,
        marginBottom: 10,
      },
      percentbox:{
        marginTop:-20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FF0000',
        paddingHorizontal: 10,
        margin:15,
        left:15
      },
      card_heading:{
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Poppins',
        // margin: 20,
      },
      card_subheading:{
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Poppins',
      },
})
export default GalleryView;
