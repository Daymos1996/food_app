import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Touchable
} from "react-native";
import { icons,images,SIZES, COLORS,FONTS } from "../constants";

const home = ()=>{



const initialCurrentLocation = {
    streetName: "Tatrzanska",
    gps: {
        latitude: 51.741103,
        longitude: 19.495292
    }
}

const categoryData = [
    {
        id: 1,
        name: "Pizza",
        icon: icons.pizza
    },
    {
        id: 2,
        name: "Noodles",
        icon: icons.noodle,
    },
    {
        id: 3,
        name: "Italian",
        icon: icons.italian,
    },
    {
        id: 4,
        name: "Sandwich",
        icon: icons.sandwich,
    },
    {
        id: 5,
        name: "Burgers",
        icon: icons.hamburger,
    },
    {
        id: 6,
        name: "Fast Food",
        icon: icons.fastFood,
    },
    {
        id: 7,
        name: "Mexicana Food",
        icon: icons.mexicanaFood,
    },
    {
        id: 8,
        name: "Sushi",
        icon: icons.sushi,
    },
    {
        id: 9,
        name: "Kebab",
        icon: icons.kebab,
    }

]

// price rating
const affordable = 1
const fairPrice = 2
const expensive = 3

const restaurantData = [
    {
        id: 1,
        name: "Bobby burger",
        rating: 4.8,
        categories: [5, 6],
        priceRating: expensive,
        photo: images.bobbyBurger,
        duration: "30 - 45 min",
        location: {
            latitude: 51.76969,
            longitude: 19.45577,
        },
        courier: {
            avatar: images.avatar_1,
            name: "Amy"
        },
        menu: [
            {
                menuId: 1,
                name: "Crispy Chicken Burger",
                photo: images.crispy_chicken_burger,
                description: "Burger with crispy chicken, cheese and lettuce",
                calories: 200,
                price: 10
            },
            {
                menuId: 2,
                name: "Crispy Chicken Burger with Honey Mustard",
                photo: images.honey_mustard_chicken_burger,
                description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                calories: 250,
                price: 15
            },
            {
                menuId: 3,
                name: "Crispy Baked French Fries",
                photo: images.baked_fries,
                description: "Crispy Baked French Fries",
                calories: 194,
                price: 8
            }
        ]
    },
    {
        id: 2,
        name: "Mafiosso Burgers",
        rating: 4.5,
        categories: [5, 6],
        priceRating: affordable,
        photo: images.mafiosoBurger,
        duration: "30 - 50 min",
        location: {
            latitude: 51.75190192086841,
            longitude: 19.39809384175606,
        },
        courier: {
            avatar: images.avatar_1,
            name: "Amy"
        },
        menu: [
            {
                menuId: 1,
                name: "Crispy Chicken Burger",
              //  photo: images.crispy_chicken_burger,
                description: "Burger with crispy chicken, cheese and lettuce",
                calories: 200,
                price: 10
            },
            {
                menuId: 2,
                name: "Crispy Chicken Burger with Honey Mustard",
               // photo: images.honey_mustard_chicken_burger,
                description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                calories: 250,
                price: 15
            },
            {
                menuId: 3,
                name: "Crispy Baked French Fries",
              //  photo: images.baked_fries,
                description: "Crispy Baked French Fries",
                calories: 194,
                price: 8
            }
        ]
    },
    {
        id: 3,
        name: "Gastromachina Stacja",
        rating: 4.8,
        categories: [5, 6],
        priceRating: fairPrice,
        photo: images.gastromachina,
        duration: "30 - 50 min",
        location: {
            latitude: 51.76589937625464,
            longitude: 19.45645048477151,
        },
        courier: {
            avatar: images.avatar_1,
            name: "Amy"
        },
        menu: [
            {
                menuId: 1,
                name: "Crispy Chicken Burger",
               // photo: images.crispy_chicken_burger,
                description: "Burger with crispy chicken, cheese and lettuce",
                calories: 200,
                price: 10
            }
           
        ]
    },
    
    {
        id: 4,
        name: "DaGrasso",
        rating: 4.8,
        categories: [1, 3],
        priceRating: fairPrice,
        photo: images.dagrasso,
        duration: "40 - 80 min",
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },
        courier: {
            avatar: images.avatar_2,
            name: "Jackson"
        },
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                //photo: images.hawaiian_pizza,
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                calories: 250,
                price: 15
            }
        ]
    },
    {
        id: 5,
        name: "Pizza Hut",
        rating: 4.5,
        categories: [1, 3],
        priceRating: fairPrice,
        photo: images.pizzahut,
        duration: "30 - 90 min",
        location: {
            latitude: 51.71873020990318,
            longitude: 19.48726373589092,
        },
        courier: {
            avatar: images.avatar_2,
            name: "Jackson"
        },
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                //photo: images.hawaiian_pizza,
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                calories: 250,
                price: 15
            }
        ]
    },
    {
        id: 6,
        name: "Gruby Benek",
        rating: 3.8,
        categories: [1, 3],
        priceRating: affordable,
        photo: images.grubybenek,
        duration: "30 - 80 min",
        location: {
            latitude: 51.73826002142478,
            longitude: 19.488376689430755,
        },
        courier: {
            avatar: images.avatar_2,
            name: "Jackson"
        },
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                //photo: images.hawaiian_pizza,
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                calories: 250,
                price: 15
            }
        ]
    },
    {
        id: 7,
        name: "Pasta GO",
        rating: 4.5,
        categories: [2, 3],
        priceRating: affordable,
        photo: images.pastago,
        duration: "25 - 40 min",
        location: {
            latitude: 51.7680770355632,
            longitude: 19.454916450355658,
        },
        courier: {
            avatar: images.avatar_2,
            name: "Jackson"
        },
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                //photo: images.hawaiian_pizza,
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                calories: 250,
                price: 15
            }
        ]
    },

    
    

]

const [categories, setCategories] = React.useState(categoryData)
const [selectedCategory, setSelectedCategory] = React.useState(null)
const [restaurants, setRestaurants] = React.useState(restaurantData)
const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)



function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

    setRestaurants(restaurantList)

    setSelectedCategory(category)
}

function getCategoryNameById(id){
    let category = categories.filter(a=>a.id == id)

    if(category.length > 0)
        return category[0].name
    
    return ""
}

function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id)

    if (category.length > 0)
        return category[0].name

    return ""
}

//gorny nagłowek
    function renderHeader(){
        return(
            <View style={{flexDirection: 'row', height:50, paddingTop:20 }}>
                <TouchableOpacity
                    style={{
                     width:50,
                     paddingLeft: SIZES.padding *2,
                     justifyContent: 'center'
        
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode='contain'
                        style={{
                            width:30,
                            height:30
                        }} 
                    />

                </TouchableOpacity>
                <View  style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View
                        style={{
                            width: '70%',
                            height: '100%',
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{...FONTS.h3}}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                        style={{
                            width: 50,
                            paddingRight: SIZES.padding *2,
                            justifyContent: 'center'
                        }}
                >            
                        <Image 
                            source={icons.basket}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                </TouchableOpacity>           
              
            </View>


        )
    }

    //Kategorie menu 
    function renderMainCategories(){
        const renderItem = ({item }) => {
            return(
                //Pole wokół ikon kategorie
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding*2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.
                        primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={()=> onSelectCategory(item)}
                >

                    
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: (selectedCategory?.id == item.id) ?
                            COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height:30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ?
                            COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                            {item.name}
                    </Text>
                  
                </TouchableOpacity>
            )
        }

        return(
            <View style={{
                paddingTop: SIZES.padding *2,
                paddingLeft: SIZES.padding *2
                
            }}>
                <Text style={{...FONTS.h1}}>What would you </Text>
                <Text style={{...FONTS.h1}}>like to eat ? </Text>
                
               <FlatList 
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => '${item.id}'}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingVertical: SIZES.padding *2
                }}
               />
            </View>
        )

    }

    function renderRestaurantList() {
        const renderItem = ({item}) =>(
            <TouchableOpacity
                style={{marginBottom: SIZES.padding *2 }}
                //onPress -> navigate to Restaurant screen 
            >
                {/*image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        //zdjecie restauracji 
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius 
                        }}
                    />

                    
                    <View
                        //czas dostawy
                        style={{
                            position: 'absolute',
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopLeftRadius: SIZES.radius,
                            borderBottomRightRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{...FONTS.h4}}>{item.duration}</Text>

                    </View>
                </View>
                 
                 {/* informacje o resturacji */}
                 <Text style={{...FONTS.body3}}>{item.name}</Text>

                 <View
                    style={{
                        marginTop:SIZES.padding,
                        flexDirection: 'row'
                    }}
                 >
                     {/*ocena*/}
                     <Image 
                        source={icons.star}
                        style={{
                            height: 25,
                            width: 25,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                     />
                     <Text style={{...FONTS.body3}}>{item.rating}</Text>

                     {/*kategorie*/}
                     <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                     >
                        {
                            item.categories.map((categoryId)=> {
                                return(
                                    <View
                                        style={{
                                            flexDirection: 'row'
                                        }}
                                        key={categoryId}
                                    >
                                        <Text style={{...FONTS.body3}}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{...FONTS.h3, color: COLORS.darkgray}}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/*price*/}
                        {
                            [1,2,3].map((priceRating)=>(
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ?
                                        COLORS.black : COLORS.darkgray
                                    }}
                                >
                                $</Text>
                            ))
                        }
                     </View>

                 </View>

            </TouchableOpacity>
        )
        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => '${item.id}'}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30 
                }}
            />
        )
    }
    
    return( 
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default home;
