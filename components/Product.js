// import React, { useEffect, useState } from 'react';
// import {Text,View,Image,Button} from 'react-native';
// import {addToCart,removetocart} from './redux/action'
// import {useDispatch,useSelector} from 'react-redux'

// export const Product=(props)=>{
//     const item = props.item
//     const [present,setpresent]=useState(false)

//     const dispatch = useDispatch();
//     const cartItems = useSelector((state)=>state.reducer)
//     const handleaddtocart=(item)=>{
//         dispatch(addToCart(item))
//     }
//     const handleremovetocart=(item)=>{
//         dispatch(removetocart(item.name))
//     }

//     useEffect(()=>{
//         let result = cartItems.filter((element)=>{
//             return element.name === item.name
//         })
//         if (result.length){
//             setpresent(true)
//         }
//         else
//         {
//             setpresent(false)
//         }
//     },[cartItems])

//     return(
//         <View>
//             <View style={{alignItems:'center',marginBottom:50,borderBottomWidth:3,borderColor:'black',padding:10}}>
                    
//                     <Text>{item.name}</Text>
//                     <Text>{item.color}</Text>
//                     <Text>{item.price}</Text>
//                     <Image  style={{width:200,height:200}} source={{uri:item.image}}/>
//                     {
//                      present?  <Button title='REMOVE TO CART' onPress={()=>handleremovetocart(item)}/>:<Button title='ADD TO CART' onPress={()=>handleaddtocart(item)}/> 
//                     }
                    
//                  </View>
//         </View>

//     );
// };