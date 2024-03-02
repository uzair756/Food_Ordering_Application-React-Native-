// import React, { useEffect, useState } from 'react';
// import {Text,View} from 'react-native';
// import {useSelector} from 'react-redux'

// export const Header=()=>{
//     const cartData=useSelector((state)=>state.reducer)
//     const [cartitems,setcartitems]=useState(0)
//     console.warn(cartData)
//     useEffect(()=>setcartitems(cartData.length),[cartData])
//     return(
//         <View style={{backgroundColor:'yellow'}}>
//             <Text style={{fontSize:30,backgroundColor:'yellow',alignSelf:'flex-end'}}>{cartitems}</Text>
//         </View>

//     );
// };
