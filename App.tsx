// import React,{Component, useEffect, useId, useState} from 'react';
// import {
//   Button,View,Text, TextInput, StyleSheet, FlatList, ScrollView, SectionList, TouchableHighlight, TouchableOpacity, ActivityIndicator, Modal, Touchable, Pressable, StatusBar, Platform
//  } from 'react-native';
//  import CompanyData from './components/CompanyData';
//  import exStyles from './style';




//  let age=3;
//  var email='abc@gmail.com ';

//  function fruit(){
//   return 'apple'
//  }

//  const App=()=>{
//   return(
//   <View>
//     <Text style={{fontSize:40}}>React Native</Text>
//     <UserData/>
//     <CompanyData/>
//     <Buttonbanao/>
//   </View>
//   );
//  };
// const UserData=()=>{
//   return (
//     <View>
//       <Text>Name:Unknown</Text>
//       <Text>Age:19</Text>
//       <Text>Email:{email}</Text>
//     </View>
//   );
// };



// const Buttonbanao=()=>{
//   let data=10
//   function fruit(){
//     data=100
//     console.warn(data)
//   }
//   return(
//     <View>
//       <Text>Button on press {data}</Text>
//       <Button title='On Press' onPress={()=>fruit()} color={'green'} />
//     </View>

//   );
// };



// const Seekho=()=>{
//   const [name,SetName]=useState("unknown")
//   let [data,setData]=useState('peter')
//   function testName(){
//     SetName('known')
//     setData('popo')

//   }

//   return(
//     <View>
//       <Text style={{fontSize:30}}>{name}</Text>
//       <Text style={{fontSize:30}}>{data}</Text>

//       <Button title='update name' onPress={testName}></Button>

//     </View>


//  );
// };







// const Seekh=()=>{
//   const [name,SetName]=useState('ali')
//   function wow(){
//     SetName('cheater')
//   }
//   return(
//     <View>
//      <Text style={{fontSize:30}}>parent</Text>
//      <Button title='update props' onPress={()=>wow()}></Button>
//     </View>

//   );
// };




// const shuru=()=>{
//   return(
//     <View>
//       <Text style={exStyles.textBox} >Login Page</Text>
//       <Text style={[exStyles.textBox,exStyles.textBox]} >Email</Text>
//       <Text>password</Text>
//       <Button title='login' color={'black'} onPress={()=>console.warn('login successfull')}></Button>
//     </View>

//   );
// };




// const learn=()=>{
//   const [name,SetName]=useState('')
//   return(
//     <View>
//       <Text>handle text input</Text>
//       <Text>Your name is: {name}</Text>
//       <TextInput 
//        style={{color:'black',backgroundColor:'white',borderWidth:2,borderColor:'blue'}}
//        placeholder='Enter your name'
//       value={name}
//        onChangeText={(text)=>SetName(text)}

//       />
//       <Button title='clear input' onPress={()=>SetName('')}/>
//     </View>
//   );
// };






// const learning=()=>{
//   const [name,SetName]=useState('')
//   const [email,SetEmail]=useState('')
//   const [password,SetPassword]=useState('')
//   const [display,setDisplay]=useState(false)
//   const uradosb=()=>{
//      setDisplay(false);
//      SetName('');
//      SetEmail('');
//      SetPassword('');
//   };
//   return(
//     <View>
//       <Text style={styles1.textbox1}>Simple form in React Native</Text>
//       <TextInput 
//        style={{backgroundColor:"green" ,borderWidth:2,borderColor:'black',marginBottom:20}}
//        placeholder='Enter your name'
//        value={name}
//        onChangeText={(text)=>SetName(text)}
//       />
//       <TextInput
//       style={{backgroundColor:"green" ,borderWidth:2,borderColor:'black',marginBottom:10}}
//        placeholder='Enter your email'
//        value={email}
//        onChangeText={(text)=>SetEmail(text)}
//       />
//       <TextInput
//        style={{backgroundColor:"green" ,borderWidth:2,borderColor:'black',marginBottom:10}}
//        placeholder='enter your password'
//        value={password}
//        onChangeText={(text)=>SetPassword(text)} 
//        secureTextEntry={true}   
//       />

//       <View style={{backgroundColor:' purple'}}>
//       <Button
//        title='print details'
//        onPress={()=>setDisplay(true)}

//       />
//       </View>
//       <View style={{marginBottom:10}}>

//       </View>


//        <Button
//        title='clear details'
//        onPress={()=>uradosb()}

//       />
//       <View>
//         {
//           display ?
//            <View>
//             <Text>Name is {name}</Text>
//             <Text>Email is {email}</Text>
//             <Text>Password is {password}</Text>


//            </View>
//       :null  
//       }
//       </View>
//     </View>

//   );
// };

// const styles1=StyleSheet.create({
//   textbox1:{
//     color:'white',
//     backgroundColor:'black',
//     borderRadius:2,
//     borderColor:'blue',
//     marginBottom:10,
//     fontSize:30,
//     borderWidth:2
//   }
// })




// const kiabaathai=()=>{
//   const users=[
//     {
//       id:1,
//       name:'ali'
//     },
//     {
//       id:2,
//       name:'ahmed'
//     },
//     {
//       id:3,
//       name:'zafar'
//     }
//   ]
//   return(
//     <View>
//       <Text>flatlist seekh rha hoon</Text>
//       <FlatList  
//        data={users}
//        renderItem={({item})=><Text>{item.name}</Text>}

//       />
//     </View>

//   );
// };

// const kiabaathaii=()=>{
//   const users=[
//     {
//       name1:'a',
//       id:1
//     },
//     {
//       name1:'b',
//       id:2
//     },
//     {
//       id:1,
//       name:'ali'
//     },
//     {
//       id:2,
//       name:'ahmed'
//     },
//     {
//       id:3,
//       name:'zafar'
//     },
//     {
//       id:1,
//       name:'ali'
//     },
//     {
//       id:2,
//       name:'ahmed'
//     },
//     {
//       id:3,
//       name:'zafar'
//     },
//     {
//       id:1,
//       name:'ali'
//     },
//     {
//       id:2,
//       name:'ahmed'
//     },
//     {
//       id:3,
//       name:'zafar'
//     }
//   ]
//   return(
//     <View>
//       <Text>map function seekh rha hoon bhai</Text>
//       <ScrollView>
//       {
//        users.map((item)=><Text style={modify.textbox}>{item.name1}</Text>)
//       }
//       </ScrollView>
//     </View>
//   );
// };


// const modify=StyleSheet.create({
//   textbox:{
//     marginBottom:10,
//     color:'blue',
//     fontsize:30,
//     backgroundColor:'lightgreen',
//     borderRadius:20,
//     height:70,
//     textAlignVertical:'center',
//     textAlign:'center',
//     borderWidth:2,
//     borderColor:'purple'
//   }
// }

// )

// const kiabaathaiii=()=>{
//   const users=[
//     {
//       name1:'a',
//       id:1
//     },
//     {
//       name1:'b',
//       id:2
//     },
//     {
//       id:1,
//       name:'ali'
//     },
//     {
//       id:2,
//       name:'ahmed'
//     },
//     {
//       id:3,
//       name:'zafar'
//     },
//     {
//       id:1,
//       name:'ali'
//     },
//     {
//       id:2,
//       name:'ahmed'
//     },
//     {
//       id:3,
//       name:'zafar'
//     },
//     {
//       id:1,
//       name:'ali'
//     },
//     {
//       id:2,
//       name:'ahmed'
//     },
//     {
//       id:3,
//       name:'zafar'
//     }
//   ]
//   return(
//     <View>
//       <Text>mukhtarya gal wadh gai ae</Text>
//       <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
//         {
//           users.map((item)=><Text style={mukhtar.textbox}>{item.name}</Text>)
//         }
//       </View>
//     </View>
//   );
// };
// const mukhtar=StyleSheet.create({
//   textbox:{
//     height:70,
//     width:60,
//     color:'blue',
//     backgroundColor:'green',
//     margin:20,
//     textAlignVertical:'center',
//     textAlign:'center',
//     fontSize:20

//   }
// })




// const kiabaathaiiii=()=>{
//   const users=[
//     {
//       name:'ali',
//       email:'ali@gmail.com'
//     },
//     {
//       name:'bilal',
//       email:'bilal@gmail.com'
//     },
//     {
//       name:'asad',
//       email:'asadgmail.com'
//     }
//   ]
//   return(
//     <View>
//       <Text>Component in loop with flatlist</Text>
//       <FlatList
//         data={users}
//         renderItem={({item})=>
//         <View style={{flexDirection:'row',borderWidth:1}}>
//         <Text style={{margin:50,fontSize:20}}>{item.name}</Text>
//         <Text style={{margin:50,fontSize:20,flex:1}}>{item.email}</Text>
//         </View>
//         }
//         />
//     </View>



//   );
// }; 


// const kiabaathaiiiii=()=>{
//   const users=[
//     {
//       name:'ali',
//       data:['d','e','f']
//     },
//     {
//       name:'bilal',
//       data:['g','h','i']
//     },
//     {
//       name:'asad',
//       data:['k','l','c']
//     }
//   ]
//   return(
//     <View>
//       <Text>selection list in react native</Text>
//       <SectionList
//       sections={users}
//       renderItem={({item})=><Text>{item}</Text>}
//       renderSectionHeader={({section:{name}})=><Text>{name}</Text>

//   }
//       />
//     </View>

//   );
// };

// const Appp=()=>{
//   const [count,setCount]=useState(0);
//   const [data,setData]=useState(100);
//   useEffect(()=>{console.warn('count added')},[count])

//   return(
//     <View>
//       <Text>{data} use effect aas component did update {count}</Text>
//       <Button
//        title='update counter'
//        onPress={()=>{setCount(count+1)}}
//        />
//        <Button
//        title='update data'
//        onPress={()=>(setData(data+1))}/>
//       </View>

//   );
// };


// const haha=()=>{
//   const [show,setShow]=useState(false)
//   return(
//     <View style={{backgroundColor:'green',flex:1}}>
//       <Text>show hide component</Text>
//       <Button
//       title='toggle component'
//       onPress={()=>setShow(!show)}/>

//       {
//         show ?
//         <User />  


//         :null
//       }
//     </View>

//   );
//     };


// const User=()=>{
//   let timer=setInterval(()=>{console.warn('timer called');},2000)
//   useEffect(()=>{clearInterval(timer)})
//   return(
//     <View>
//       <Text>func called on console</Text>
//     </View>

//   );
// ;}

// const hush=()=>{
//   return(
//     <View style={{flex:1}}>
//       <View style={{flex:3 ,flexDirection:'row',margin:10}}>
//         <View style={{flex:1,backgroundColor:'orange',margin:10}}></View>
//         <View style={{flex:1,backgroundColor:'purple',margin:10}}></View>
//         <View style={{flex:1,backgroundColor:'green',margin:10}}></View>
//       </View>
//       <View style={{backgroundColor:'blue',flex:1,margin:10}}></View>
//       <View style={{backgroundColor:'yellow',flex:1,margin:10}}></View>
//     </View>

//   );
// };

// const bush=()=>{
//   return(
//     <View>
//       <TouchableHighlight>
//         <Text style={{backgroundColor:'grey',padding:10,borderRadius:15,fontSize:30,textAlign:'center',margin:10,shadowColor:'purple',shadowOpacity:100}}>Button</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// const rush=()=>{
//   const [selectedradio,setSelectedradio]=useState(1)
//   return(
//     <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
//       <TouchableOpacity onPress={()=>setSelectedradio(1)}>
//         <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
//           <View style={{height:40,width:40,borderColor:'blue',borderWidth:2,borderRadius:30,margin:10,shadowColor:'blue'}}>
//            <View>
//             {
//               selectedradio==1 ?
//               <View style={{backgroundColor:'blue',height:28,width:28,borderRadius:30,alignContent:'center',alignItems:'center',margin:4}}></View>

//               :null
//             }
//            </View>
//           </View>
//           <Text style={{fontSize:20,color:'blue'}}>Radio 1</Text>
//         </View>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={()=>setSelectedradio(2)}>
//         <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
//           <View style={{height:40,width:40,borderRadius:30,backgroundColor:'white',borderColor:'black',borderWidth:2,margin:10}}>
//             <View>
//             {
//               selectedradio==2 ?
//               <View style={{backgroundColor:'black',height:28,width:28,borderRadius:30,alignContent:'center',alignItems:'center',margin:4}}></View>   

//               :null
//             }
//             </View>
//           </View>
//           <Text style={{fontSize:20}}>Radio 2</Text>
//         </View>
//       </TouchableOpacity>
//     </View>

//   );
// };

// const dush=()=>{
//   const [selectedradio,setSelectedradio]=useState(1)
//   const skills=[
//     {
//       id:1,
//       name:'js'
//     },
//     {
//       id:2,
//       name:'py'
//     }, 
//     {
//       id:3,
//       name:'java'
//     },
//      {
//       id:4,
//       name:'sql'
//     }
//   ]
//   return(
//     <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
//       {
//       skills.map((item,index)=><TouchableOpacity key={index} onPress={()=>setSelectedradio(item.id)}>
//       <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
//         <View style={{height:40,width:40,borderColor:'blue',borderWidth:2,borderRadius:30,margin:10,shadowColor:'blue'}}>
//          <View>
//           {
//             selectedradio==item.id ?
//             <View style={{backgroundColor:'blue',height:28,width:28,borderRadius:30,alignContent:'center',alignItems:'center',margin:4}}></View>

//             :null
//           }
//          </View>
//         </View>
//         <Text style={{fontSize:20,color:'blue'}}>{item.name}</Text>
//       </View>
//     </TouchableOpacity>)
//       }
//     </View>


//   );
// };

// const jush=()=>{
//   const [show,setShow]=useState(false);
//   const displayloader=()=>{
//     return setShow(true)
//   }
//   setTimeout(() => {
//     setShow(false)

//   }, 3000);
//   return(
//     <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
//       <ActivityIndicator size={40} animating={show}></ActivityIndicator>
//       <Button title='show/hide loader' onPress={()=>displayloader()}/>
//     </View>

//   );
// };

// const kush=()=>{
//   const [modalshow,setModalShow]=useState(true)
//   return(
//     <View style={{flex:1,backgroundColor:'blue'}}>
//       <Modal
//       transparent={true}
//       visible={modalshow}
//       >
//         <View style={{justifyContent:'center',flex:1}}>
//           <View style={{height:70,width:160,backgroundColor:'white',alignContent:'center',alignSelf:'center',margin:20,marginBottom:10,borderWidth:2,borderColor:'black',borderRadius:10}}>
//             <Text >Hello code step by step</Text>
//             <Button
//             title='close modal'
//             onPress={()=>setModalShow(false)}/>
//           </View>
//         </View>
//       </Modal>
//       <View style={{flex:1,justifyContent:'flex-end'}}>
//       <Button
//       title='open modal'
//       onPress={()=>setModalShow(true)}/>
//       </View>
//     </View>

//   );

// };


// const nush=()=>{
//   return(
//     <View style={{flex:1,justifyContent:'center',alignSelf:'center'}}>
//       <Pressable
//        onLongPress={()=>{console.warn('press')}}
//       > 
//         <Text style={{backgroundColor:'lightblue',color:'purple',margin:70,alignContent:'center',alignItems:'center'}}>press kr</Text>
//       </Pressable>
//     </View>

//   );
// };

// const such=()=>{
//   return(
//     <View>
//       <StatusBar
//       backgroundColor={'orange'}
//       barStyle={'dark-content'}
//       hidden={false}
//       />
//     </View>
//   );
// };

// const chuss=()=>{
//   return(
//     <View>
//       <Text style={{fontSize:30}}>{Platform.OS}</Text>
//       {
//         Platform.OS=='ios'?
//          <View style={{height:40,width:40,backgroundColor:'blue'}}></View>
//         :
//         <View style={{width:40,height:40,backgroundColor:'red'}}></View>
//       }
//       <Text style={chussar.textbox}>hello</Text>
//     </View>

//   );
// };

// const chussar=StyleSheet.create({
//   textbox:{
//     fontSize:40,
//     color:Platform.OS=='ios'?'blue':'red'
//   }
// })
// export default chuss;

// import {View,Text} from 'react-native';


// const CompanyData=()=>{
//     const name='xyz'
//     return (
//       <View>
//         <Text style={{fontSize:20}}>Comp-Name:{name}</Text>
//         <Text style={{fontSize:20}}>Total Employee:500</Text>
//         <Text style={{fontSize:20}}>Product:500</Text>
//       </View>

//     );
//    };

// export default CompanyData;


// import React,{Component} from "react";

// class kiabaathaiiiiiii extends Component{
//     render(){
//       return(
//         <Text>wow</Text>
//       )

//     };
//   };
































// import React, { useState } from "react";
// import { Text, View, Button, TextInput } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'


// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//       screenOptions={{
//         headerTintColor:'darkgreen',
//         headerStyle:{
//           backgroundColor:'black'
//         },
//         headerTitleStyle:{
//           fontSize:30
//         }
//       }}  
//         >
//         <Stack.Screen name="Login" component={Login} 
//         options={{
//           headerTitle:(props:any)=><Button title='left' onPress={hu}/>,
//           headerRight:(props:any)=><User1/>
//         }}
//          />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const Home = (props:any) => {
//   const {name,age}=props.route.params
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30 }}>Home Screen</Text>
//       <Text style={{fontSize:30}}>Name:{props.route.params.name}</Text>
//       <Text style={{fontSize:30}}>Age:{props.route.params.age}</Text>
//     </View>
//   );
// };

// const Login = (props: any) => {
//   const [name,setName]=useState('');
//   let age=9;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
//       <Text style={{ fontSize: 30 }}>Login Screen</Text>
//       <TextInput placeholder="enter your name" onChangeText={(text)=>setName}/>
//       <Button title="Go to home page" onPress={() => props.navigation.navigate('Home',{name,age})} />
//     </View>
//   );
// };

// const User1=()=>{
//   return(
//     <TextInput placeholder="likh shaba" />
//   )
// }
// const hu=()=>{
//   console.warn('mukhtar')
// }
// const Tab=createMaterialTopTabNavigator();
// const Appp=()=>{
//   return(
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Login" component={Login} />
//         <Tab.Screen name='Home' component={Home}/>
//       </Tab.Navigator>
//     </NavigationContainer>

//   );
// };
// const Home=()=>{
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text style={{fontSize:30}}>Home Page</Text>
//     </View>

//   );
// };
// const Login=()=>{
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text style={{fontSize:30}}>Login Page</Text>
//     </View>

//   );
// };


// export default Appp;


// import React, { useEffect, useState } from "react";
// import {Text,View} from 'react-native'

// const App=()=>{


//     const callAPI=async()=>{
//         const url = 'https://jsonplaceholder.typicode.com/posts/1';
//         let result = await fetch(url);
//         result = await result.json();
//         setData(result)
//     }
// useEffect(()=>{
//     callAPI();
// },[])
//     return(
//         <View>
//             <Text>API call</Text>
//             {
//                 data ?
//                   <View>
//                     <Text>{data.title}</Text>
//                   </View>
//                   :null
//             }
//         </View>

//     );
// };
// export default App;

// import React, { useEffect, useState } from "react";
// import { Text, View,ScrollView } from 'react-native';

// const App = () => {
//     const [data, setData] = useState([]);

//     const callAPIData = async () => {
//         const url = 'http://192.168.10.11:3000/users';
//         let result = await fetch(url);
//         let data = await result.json();
//         setData(data);
//     };

//     useEffect(() => {
//         callAPIData();
//     }, []);

//     return (
//         <View>
//             <Text>Api call</Text>
//             {
//                 data.length ? (
//                     data.map(item => (
//                         <View key={item.id}>
//                             <Text>{item.name}</Text>
//                         </View>
//                     ))
//                 ) : null
//             }
//         </View>
//     );
// };

// export default App;

// import React, { useEffect, useState } from "react";
// import {Text,View} from 'react-native'

// const App=()=>{
//     const [data,setData]=useState([])
//     const getAPIData=async()=>{
//         const url = 'http://localhost:3000/users'
//         let result = await fetch(url)
//         let data = await result.json()
//         setData(data)


//     }

//     useEffect(()=>{
//         getAPIData();

//     },[]);


//     return(
//         <View>
//             <Text>Api called</Text>
//             {
//                 data.lenght ? (
//                     data.map((item)=>(
//                         <View key={item.name}>
//                             <Text>{item.name}</Text>
//                         </View>
//                     ))
//                 )



//                  :null
//             }
//         </View>

//     );
// };

// export default App

// import React from "react";
// import {View,Text,Button} from 'react-native'

// const App=()=>{
//     const data={
//         "name":"shappar",
//         "age":16,
//         "email":"shappar@gmail.com",
//         "id":6
//     }
//     const datapost=async()=>{
//         const url = "http://192.168.10.11:3000/users";
//         const result = await fetch(url,{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
//     }
//     return(
//         <View>
//             <Text>post method adding data in json file</Text>
//             <Button title="paste the data enetered" onPress={datapost}/>
//         </View>

//     );
// };
// export default App;
// import React, { useState } from "react";
// import {Text,View,TextInput,Button} from 'react-native'




// const App=()=>{
//     const [name,setName]=useState('')
//     const [age,setAge]=useState('')
//     const [email,setEmail]=useState('')

//     const [NameError,setNameError]=useState(false)
//     const [AgeError,setAgeError]=useState(false)
//     const [EmailError,setEmailError]=useState(false)


//     const Adddata=async()=>{
//         if (!name){
//             setNameError(true)
//         }
//         else
//         {
//             setNameError(false)
//         }

//         if (!age){
//             setAgeError(true)
//         }
//         else
//         {
//             setAgeError(false)
//         }

//         if (!email){
//             setEmailError(true)
//         }
//         else
//         {
//             setEmailError(false)
//         }

//         if (!name || !age || !email){
//             return false
//         }







//         const url = "http://192.168.10.11:3000/users"
//         let result = await fetch(url , {method:"POST" ,headers:{"Content-Type":"application/json"},body:JSON.stringify({name,age,email})})
//         result = await result.json()
//         if (result){
//             console.warn('aagya')
//         }
//     }




//     return(
//         <View>
//             <Text style={{fontSize:20,alignSelf:'center'}}>post api with input fied</Text>
//             <TextInput placeholder="Enter your name" value={name} onChangeText={(text)=>setName(text)}   style={{borderWidth:3,borderColor:'black',padding:10,borderRadius:30,margin:10}}/>
//             {
//                 NameError? <Text style={{color:'red',marginLeft:10}}>enter a valid name</Text>:null
//             }
//             <TextInput placeholder="Enter your age" value={age} onChangeText={(text)=>setAge(text)}   style={{borderWidth:3,borderColor:'black',padding:10,borderRadius:30,margin:10}}/>
//             {
//                 AgeError? <Text style={{color:'red',marginLeft:30}}>enter a valid age</Text>:null
//             }
//             <TextInput placeholder="Enter your email" value={email} onChangeText={(text)=>setEmail(text)}   style={{borderWidth:3,borderColor:'black',padding:10,borderRadius:30,margin:10}}/>
//             {
//                 EmailError? <Text style={{color:'red',marginLeft:10}}>enter a valid email</Text>:null
//             }
//             <Button title="SAVE DATA" onPress={()=>{Adddata()}}/>

//         </View>

//     );
// };

// export default App;

// import React, { useEffect, useState } from "react";
// import {View,Text,Button, Modal, TextInput} from 'react-native';

// const App=()=>{
//     const [data,setData]=useState([])
//     const api=async()=>{
//         const url = "http://192.168.10.6:3000/users"
//         let result = await fetch(url);
//         let data =await result.json();
//         setData(data)
//         if (data){
//             console.warn('result aagya')

//         }
// }

// const deleteUser=async(id)=>{
//     const url = "http://192.168.10.6:3000/users"
//     let result = await fetch(`${url}/${id}`,{method:'delete'})
//     let data= await result.json()
//     if (data){
//         console.warn('data deleted')
//         api();

//     }
// }

//     useEffect(()=>{
//         api();
//         },[])


//     const [modalshow,setModalShow]=useState(false)
//     const [selecteduser,setSelectedUser]=useState(undefined)

//     const select=(data)=>{
//         setModalShow(true)
//         setSelectedUser(data)
//         console.warn(data.id)
//         console.warn(data.name)

//     }


//     return(
//         <View style={{flex:1}}>
//             <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',margin:5,padding:7}}>
//                 <View style={{flex:1}}><Text>Name</Text></View>
//                 <View style={{flex:1}}><Text>Age</Text></View>
//                 <View style={{flex:1}}><Text>Operations</Text></View>
//             </View>

//         {    

//         data.length?
//          data.map((item)=><View style={{flex:1,flexDirection:'row',justifyContent:'space-around',borderWidth:1,backgroundColor:'orange'}}>
//             <View style={{flex:1}}><Text>{item.name}</Text></View>
//             <View style={{flex:1}}><Text>{item.age}</Text></View>
//             <View style={{flex:1}}><Button title="delete" onPress={()=>{deleteUser(item.id)}}/></View>
//             <View style={{flex:1}}><Button title="update" onPress={()=>select(item)}/></View>
//          </View>)
//          :null
// }

// <Modal visible={modalshow} transparent={true}>
//     <User setModalShow={setModalShow} selecteduser={selecteduser} />
// </Modal>
//       </View>

//     );

// };
// const User=(props:any)=>{
//     const [name,setName]=useState(props.selecteduser.name)
//     const [age,setAge]=useState(props.selecteduser.age.toString())
//     const [email,setEmail]=useState(props.selecteduser.email)
//   const changekr=async()=>{
//     console.warn(props.selecteduser.id)
//     const url = "http://192.168.10.6:3000/users";
//     const id = props.selecteduser.id;
//     let result = await fetch(`${url}/${id}`,{method:'Put',headers:{"Content-Type":"application/json"},body:JSON.stringify({name,age,email})})
//     result=await result.json();
//   }



//     return(
//         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//         <View  style={{marginBottom:10,alignContent:'center',height:300,width:400,alignSelf:'center',borderWidth:3,borderColor:'black',backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:15}}>
//             <TextInput value={name} onChangeText={(text)=>setName(text)} style={{borderColor:'black',borderWidth:2,width:200,marginBottom:10}} />
//             <TextInput value={age} onChangeText={(text)=>setAge(text)} style={{borderColor:'black',borderWidth:2,width:200,marginBottom:10}} />
//             <TextInput value={email} onChangeText={(text)=>setEmail(text)} style={{borderColor:'black',borderWidth:2,width:200,margin:10}}/>
//             <Button title="update" onPress={changekr}/>
//             <Button title="close" onPress={()=>props.setModalShow(false)}/>
//         </View>
//     </View>

//     )
// }






// export default App;


// import React, { useEffect, useState } from "react";
// import {View,Text,Button, Modal, TextInput} from 'react-native';

// const App=()=>{
//     const [data,setData]=useState([])
//     const check=async(text)=>{
//         const url = `http://192.168.10.6:3000/users?q=${text}`
//         let result = await fetch(url);
//         let data = await result.json();
//         if (data){
//             setData(data)

//         }
//     }

//     const [search,setSearch]=useState('')

//     return(
//         <View>
//             <TextInput placeholder="Search" onChangeText={(text)=>check(text)} style={{borderWidth:2,marginBottom:10,margin:10,borderColor:'skyblue'}}/>
//             {
//                 data.length ?
//                  data.map((item)=>
//                     <View>
//                         <Text>{item.name}</Text>
//                         <Text>{item.age}</Text>
//                         <Text>{item.email}</Text>
//                     </View>

//                  )
//                  :null
//                 }

//         </View>

//     );
// };


// export default App;

// 

// import React, {useState} from "react";
// import {View,Text,Button} from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// const App=()=>{
//     const [user,setUser]=useState('')
//         AsyncStorage.setItem("user","sidhu")
//     const getData=async()=>{
//         const name=await AsyncStorage.getItem("user")
//         setUser(name)


//     }
//     const deleteData=async()=>{
//         await AsyncStorage.removeItem("user")
//     }
//     return(
//         <View>
//             <Text>async storage | {user}</Text>
//             <Button title='set data' onPress={setData}/>
//             <Button title='get data' onPress={getData} />
//             <Button title="delete data" onPress={deleteData}/>
//         </View>

//     );
// };
// export default App;


// import React, {useState} from "react";
// import {View,Text,Button, TextInput} from 'react-native'
// const App=()=>{
//     return(
//         <View>
//             <TextInput  style={{margin:10}} placeholder="enter your name"/>
//             <TextInput style={{margin:10}} placeholder="enter your password`"/>
//             <Button title="update input"/>
//             <View style={{height:100,width:50,backgroundColor:'green',borderWidth:2,borderColor:'red'}}></View>
//         </View>
//     );
// };
// export default App;

// import React from 'react';
// import {Text,View,Image,Button,ScrollView} from 'react-native';
// import { Header } from './components/Header';
// import { Product } from './components/Product';


// const App=()=>{


//     const products=[
//         {
//             id:1,
//             name:"samsung mobile",
//             color:'white',
//             price:15000,
//             image:"http://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
//         },
//         {   
//             id:2,
//             name:"samsung ipad",
//             color:'white',
//             price:15000,
//             image:"http://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
//         },
//         {
//             id:3,
//             name:"nokia",
//             color:'white',
//             price:15000,
//             image:"http://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
//         }
//     ]



//     return(
//         <View>
//             <Header/>
//             <ScrollView>

//             {

//                 products.map((item)=><Product item={item}/>)
//             }
//             </ScrollView>

//         </View>

//     );
// };
// export default App;
// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const HomePage = () => {
//   const products = [
//     {
//       id: 1,
//       name: 'Product 1',
//       price: '$19.99',
//       image:"http://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       price: '$24.99',
//       image:"http://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
//     },
//     // Add more products here
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to My Store</Text>
//       <View style={styles.productsContainer}>
//         {products.map((product) => (
//           <View key={product.id} style={styles.productCard}>
//             <Image  style={{width:200,height:200}} source={{uri:product.image}}/>
//             <Text style={styles.productName}>{product.name}</Text>
//             <Text style={styles.productPrice}>{product.price}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   productsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   productCard: {
//     width: '48%',
//     marginBottom: 16,
//     borderRadius: 8,
//     backgroundColor: '#f2f2f2',
//     alignItems: 'center',
//     padding: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   productImage: {
//     width: 120,
//     height: 120,
//     marginBottom: 8,
//     borderRadius: 8,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   productPrice: {
//     fontSize: 14,
//     color: '#888',
//   },
// });

// export default HomePage;
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // Home Page component
// const HomePage = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Home Page</Text>
//       <Text>Welcome to the Home Page!</Text>
//     </View>
//   );
// };

// // Signup Page component
// const SignupPage = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       {/* Signup form code */}
//     </View>
//   );
// };

// // Login Page component
// const LoginPage = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Perform API call to verify credentials
//     // Replace with your actual API call implementation
//     const apiEndpoint = 'https://example.com/api/login';
//     const credentials = { email, password };

//     fetch(apiEndpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           // Login successful, navigate to home page
//           navigation.navigate('HomePage');
//         } else {
//           // Login failed, display error message
//           Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         Alert.alert('Login Error', 'An error occurred during login. Please try again later.');
//       });
//   };

//   const handleSignup = () => {
//     navigation.navigate('SignupPage');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleSignup}>
//         <Text style={styles.signupText}>Don't have an account? Sign up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Create a stack navigator
// const Stack = createStackNavigator();

// // App component
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="LoginPage">
//         <Stack.Screen name="LoginPage" component={LoginPage} />
//         <Stack.Screen name="SignupPage" component={SignupPage} />
//         <Stack.Screen name="HomePage" component={HomePage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     borderRadius: 4,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   signupText: {
//     marginTop: 16,
//     textAlign: 'center',
//     color: '#007bff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// export default App;
// const Signup = (props: any) => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const [nameError, setNameError] = useState(false);
//   const [ageError, setAgeError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);

//   const validateEmail = (email: string) => {
//     // Regular expression to validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateUsername = (username: string) => {
//     // Regular expression to validate username format (no special characters)
//     const usernameRegex = /^[a-zA-Z0-9]*$/;
//     return usernameRegex.test(username);
//   };

//   const validatePassword = (password: string) => {
//     // Validate password length
//     return password.length >= 8;
//   };

//   const AddData = async () => {
//     setNameError(false);
//     setAgeError(false);
//     setEmailError(false);
//     setPasswordError(false);

//     if (!name) {
//       setNameError(true);
//     }
//     if (!age) {
//       setAgeError(true);
//     }
//     if (!email || !validateEmail(email)) {
//       setEmailError(true);
//     }
//     if (!password || !validatePassword(password)) {
//       setPasswordError(true);
//     }

//     if (!name || !age || !email || !password) {
//       return false;
//     }

//     const url = "http://192.168.10.3:3000/users";
//     let result = await fetch(url, {
//       method: 'POST',
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, age, email, password })
//     });
//     result = await result.json();
//     props.navigation.navigate('Login', console.warn('Account created'));
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
//       <Text style={{ fontSize: 40, marginBottom: 40, fontWeight: 'bold', color: '#333' }}>Les Acheteurs</Text>
//       <TextInput
//         placeholder="Enter your name"
//         onChangeText={(text) => setName(text)}
//         value={name}
//         style={{
//           width: 300,
//            height: 40,
//            borderWidth: 2,
//            borderColor: 'orange',
//            borderRadius: 8,
//            padding: 10,
//            marginBottom: 10,
//            backgroundColor: '#fff'
//          }}
//        />
//       {nameError ? <Text style={{ color: 'red', marginRight: 90 }}>Enter a valid username</Text> : null}

//       <TextInput
//         placeholder="Enter your age"
//         value={age}
//         onChangeText={(text) => setAge(text)}
//         style={{
//                     width: 300,
//                      height: 40,
//                      borderWidth: 2,
//                      borderColor: 'orange',
//                      borderRadius: 8,
//                      padding: 10,
//                      marginBottom: 10,
//                      backgroundColor: '#fff'
//                    }}
//                  />
//       {ageError ? <Text style={{ color: 'red', marginRight: 90 }}>Enter a valid age</Text> : null}

//       <TextInput
//         placeholder="Enter your email"
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//         style={{
//           width: 300,
//            height: 40,
//            borderWidth: 2,
//            borderColor: 'orange',
//            borderRadius: 8,
//            padding: 10,
//            marginBottom: 10,
//            backgroundColor: '#fff'
//          }}
//        />
//       {emailError ? <Text style={{ color: 'red', marginRight: 90 }}>Enter a valid email</Text> : null}

//       <TextInput
//         placeholder="Enter your password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry={true}
//         style={{
//           width: 300,
//            height: 40,
//            borderWidth: 2,
//            borderColor: 'orange',
//            borderRadius: 8,
//            padding: 10,
//            marginBottom: 10,
//            backgroundColor: '#fff'
//          }}
//        />
//       {passwordError ? <Text style={{ color: 'red', marginRight: 90 }}>Enter a valid password (minimum 8 characters)</Text> : null}

//       <Button title="Signup" onPress={() => AddData()} />
//     </View>
//   );
// };

// const HomePage = (props: any) => {
//   const [search, setSearch] = useState('');
//   const [cartItems, setCartItems] = useState([]);

//   const products = [
//         {
//           id: 1,
//           name: 'T Shirt',
//           color: 'Black',
//           price: 7,
//           image: 'https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png',
//           description: 'This T-shirt is made from high-quality cotton fabric, ensuring comfort and durability. It features a classic black color and a crew neck design. Perfect for casual wear and can be easily paired with jeans or shorts.',
//           size: 'M',
//           material: '100% Cotton',
//           brand: 'ABC Apparel'
//         },
//         {ee
//           id: 2,
//           name: 'Polo Shirt',
//           color: 'White',
//           price: 9,
//           image: 'https://w7.pngwing.com/pngs/512/604/png-transparent-t-shirt-polo-shirt-clothing-top-polo-shirt-white-polo-shirt-white-fashion-active-shirt-thumbnail.png',
//           description: 'This T-shirt is made from high-quality cotton fabric, ensuring comfort and durability. It features a classic black color and a crew neck design. Perfect for casual wear and can be easily paired with jeans or shorts.',
//           size: 'M',
//           material: '100% Cotton',
//           brand: 'ABC Apparel'
//         },
//         {
//           id: 3,
//           name: 'Casual Shirt',
//           color: 'Mix',
//           price: 16,
//           image: 'https://w7.pngwing.com/pngs/264/23/png-transparent-t-shirt-dress-shirt-sleeve-shirt-tshirt-blue-tartan-thumbnail.png',
//           description: 'This T-shirt is made from high-quality cotton fabric, ensuring comfort and durability. It features a classic black color and a crew neck design. Perfect for casual wear and can be easily paired with jeans or shorts.',
//           size: 'M',
//           material: '100% Cotton',
//           brand: 'ABC Apparel'
//         },
//         {
//           id: 4,
//           name: 'Polo Shirt',
//           color: 'Red',
//           price: 15000,
//           image: 'https://w7.pngwing.com/pngs/695/311/png-transparent-t-shirt-hoodie-polo-shirt-tshirt-tshirt-active-shirt-jersey-thumbnail.png',
//           description: 'This T-shirt is made from high-quality cotton fabric, ensuring comfort and durability. It features a classic black color and a crew neck design. Perfect for casual wear and can be easily paired with jeans or shorts.',
//           size: 'M',
//           material: '100% Cotton',
//           brand: 'ABC Apparel'
//         },
//         {
//           id: 5,
//           name: 'Hoodie',
//           color: 'Black',
//           price: 11,
//           image: 'https://w7.pngwing.com/pngs/747/815/png-transparent-hoodie-t-shirt-supreme-bluza-t-shirt-thumbnail.png',
//           description: 'This T-shirt is made from high-quality cotton fabric, ensuring comfort and durability. It features a classic black color and a crew neck design. Perfect for casual wear and can be easily paired with jeans or shorts.',
//           size: 'M',
//           material: '100% Cotton',
//           brand: 'ABC Apparel'
//         },
//       ];

//   const filteredProducts = products.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleProductPress = (product: any) => {
//     props.navigation.navigate('ProductDetails', { product });
//   };

//   const handleAddToCart = (product: any) => {
//     setCartItems((prevCartItems) => [...prevCartItems, product]);
//   };

//   const handleRemoveFromCart = (product: any) => {
//     setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== product.id));
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: '#f5f5f5', paddingVertical: 20, paddingHorizontal: 20 }}>
//       <View style={{ alignItems: 'center', marginBottom: 20 }}>
//         <TextInput
//           placeholder="Search"
//           value={search}
//           onChangeText={(text) => setSearch(text)}
//           style={{
//             width: 350,
//             height: 50,
//             borderWidth: 2,
//             borderColor: 'lightgrey',
//             borderRadius: 15,
//             padding: 10,
//             backgroundColor: '#fff',
//           }}
//         />
//       </View>
//       <ScrollView contentContainerStyle={{ marginBottom: 50, borderBottomWidth: 3 }}>
//         {filteredProducts.map((item) => (
//           <TouchableOpacity key={item.id} onPress={() => handleProductPress(item)}>
//             <View style={{ backgroundColor: 'white', borderRadius: 30, borderWidth: 3, borderColor: 'lightgrey', marginBottom: 20, padding: 10 }}>
//               <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
//               <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Color: {item.color}</Text>
//               <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Price: ${item.price}</Text>
//               <Image style={{ width: 200, height: 200, marginTop: 10, marginBottom: 10 }} source={{ uri: item.image }} />
//               <TouchableOpacity  style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: 'black', borderRadius: 50, padding: 10 }} onPress={() => handleAddToCart(item)}>
//                 <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Add to Cart</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       <TouchableOpacity
//         style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: 'black', borderRadius: 50, padding: 10 }}
//         onPress={() => props.navigation.navigate('Cart', { cartItems })}
//       >
//         <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Go to Cart ({cartItems.length})</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const ProductDetails = (props: any) => {
//   const product = props.route.params.product;

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: 20 }}>
//       <Image style={{ width: 200, height: 200, marginBottom: 20 }} source={{ uri: product.image }} />
//       <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>{product.name}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Color: {product.color}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Price: ${product.price}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Description: {product.description}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Size: {product.size}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Material: {product.material}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Brand: {product.brand}</Text> 
//     </View>
//   );
// };

// const Cart = (props: any) => {
//   const cartItems = props.route.params.cartItems;

//   const handleRemoveFromCart = (product: any) => {
//     setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== product.id));
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: '#f5f5f5', paddingVertical: 20, paddingHorizontal: 20 }}>
//       {cartItems.map((item: any) => (
//         <View key={item.id} style={{ backgroundColor: 'white', borderRadius: 30, borderWidth: 3, borderColor: 'lightgrey', marginBottom: 20, padding: 10 }}>
//           <Image style={{ width: 200, height: 200, marginBottom: 10 }} source={{ uri: item.image }} />
//           <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold', marginBottom: 10 }}>{item.name}</Text>
//           <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10, backgroundColor: 'red', borderRadius: 50, padding: 5 }} onPress={() => handleRemoveFromCart(item)}>
//             <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Remove</Text>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </View>
//   );
// };



























































































































// import React, { useState ,useEffect} from "react";
// import { Text, TextInput, View, Button,Alert,ScrollView ,Image,TouchableOpacity, ImageBackground} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Signup" component={Signup} />
//         <Stack.Screen name="HomePage" component={HomePage}  />
//         <Stack.Screen name="ProductDetails" component={ProductDetails} />
//         <Stack.Screen name="Cart" component={Cart} />
//         <Stack.Screen name="Confirmation" component={Confirmation} />
//         <Stack.Screen name="ConfirmNotification" component={ConfirmNotification} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;










// const Login = (props: any) => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const handleLogin = async () => {
//     const url = 'http://192.168.10.13:3000/users';
//     const response = await fetch(url, {method: 'GET',headers: { 'Content-Type': 'application/json' }});
//     const data = await response.json();
//     const existingUser = data.find((user: any) => user.name === name && user.password === password && name.length>0 && password.length>0);
//     if (existingUser) {
//         console.warn("Loggedin as ",name)
//         props.navigation.navigate('HomePage');
//       } else {
//         Alert.alert('Login Failed', 'Incorrect name or password');
//       }
//   };
//   return (
//     <ImageBackground style={{flex: 1,justifyContent: 'center',alignItems: 'center',}} source={require('./assets/aditya-joshi-wG923J9naFQ-unsplash.jpg')}>
//     <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
//       <Text style={{ fontSize: 40, marginBottom: 40, fontWeight: 'bold', color: '#333' }}>Les Acheteurs</Text>
//       <TextInput
//         placeholder="Enter username"
//         value={name}
//         onChangeText={(text) => setName(text)}
//         style={{
//           width: 300,
//           height: 40,
//           borderWidth: 2,
//           borderColor: 'black',
//           borderRadius: 8,
//           padding: 10,
//           marginBottom: 10,
//           backgroundColor: '#fff',
//         }}
//       />
//       <TextInput
//         placeholder="Enter password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry={true}
//         style={{
//           width: 300,
//           height: 40,
//           borderWidth: 2,
//           borderColor: 'black',
//           borderRadius: 8,
//           padding: 10,
//           marginBottom: 10,
//           backgroundColor: '#fff',
//         }}
//       />
//       <TouchableOpacity style={{marginBottom:15,width:100,height:50,borderRadius:30,backgroundColor:'black',justifyContent:'center',alignItems:'center'}} onPress={() => handleLogin()}><Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Login</Text></TouchableOpacity>
//       <Text onPress={() => props.navigation.navigate('Signup')} style={{ fontWeight: 'bold', color: '#666'}}>Don't have an account? Signup</Text>
//     </View>
//     </ImageBackground>
//   );
// };





// const Signup = (props: any) => {


//   const [name, setName] = useState('')
//   const [age, setAge] = useState('')
//   const [email, setemail] = useState('')
//   const [password, setPassword] = useState('')



//   const [nameError, setNameError] = useState(false)
//   const [ageError, setAgeError] = useState(false)
//   const [emailError, setEmailError] = useState(false)
//   const [passwordError, setPasswordError] = useState(false)






//   const AddData = async () => {

//     if (!name) {
//       setNameError(true)
//     }
//     else {
//       setNameError(false)
//     }



//     if (!age) {
//       setAgeError(true)
//     }
//     else {
//       setAgeError(false)
//     }




//     if (!email!) {
//       setEmailError(true)
//     }
//     else {
//       setEmailError(false)
//     }




//     if (!password!) {
//       setPasswordError(true)
//     }
//     else {
//       setPasswordError(false)
//     }





//     if (!name || !age || !email || !password) {
//       return false
//     }


//     const url = "http://192.168.10.13:3000/users";
//     let result = await fetch(url, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, age, email, password }) })
//     result = await result.json();
//     props.navigation.navigate('Login', console.warn('Account created'))
//   };


//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
//       <Text style={{ fontSize: 40, marginBottom: 40, fontWeight: 'bold', color: '#333' }}>Les Acheteurs</Text>
//       <TextInput
//         placeholder="Enter your name"
//         onChangeText={(text) => setName(text)}
//         value={name}
//         style={{
//           width: 300,
//           height: 40,
//           borderWidth: 2,
//           borderColor: 'black',
//           borderRadius: 8,
//           padding: 10,
//           marginBottom: 10,
//           backgroundColor: '#fff'
//         }}
//       />
//       {
//         nameError ? <Text style={{ color: 'red', marginRight: 90 }}>enter a valid username</Text>

//           : null
//       }

//       <TextInput
//         placeholder="Enter your age"
//         value={age}
//         onChangeText={(text) => setAge(text)}
//         style={{
//           width: 300,
//           height: 40,
//           borderWidth: 2,
//           borderColor: 'black',
//           borderRadius: 8,
//           padding: 10,
//           marginBottom: 10,
//           backgroundColor: '#fff'
//         }}
//       />
//       {
//         ageError ? <Text style={{ color: 'red', marginRight: 90 }}>enter a valid age</Text>

//           : null
//       }



//       <TextInput
//         placeholder="Enter your email"
//         onChangeText={(text) => setemail(text)}
//         value={email}
//         style={{
//           width: 300,
//           height: 40,
//           borderWidth: 2,
//           borderColor: 'black',
//           borderRadius: 8,
//           padding: 10,
//           marginBottom: 10,
//           backgroundColor: '#fff'
//         }}
//       />
//       {
//         emailError ? <Text style={{ color: 'red', marginRight: 90 }}>enter a valid email</Text>

//           : null
//       }


//       <TextInput
//         placeholder="Enter your password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry={true}
//         style={{
//           width: 300,
//           height: 40,
//           borderWidth: 2,
//           borderColor: 'black',
//           borderRadius: 8,
//           padding: 10,
//           marginBottom: 10,
//           backgroundColor: '#fff'
//         }}
//       />
//       {
//         passwordError ? <Text style={{ color: 'red', marginRight: 90 }}>enter a valid password</Text>

//           : null
//       }



//       <Button title="Signup" onPress={() => AddData()} />
//       <Text onPress={() => props.navigation.navigate('Login')}
//         style={{ fontWeight: 'bold', color: '#666', marginTop: 10 }}>Already have an account? Login</Text>

//     </View>
//   );
// };








// const HomePage = (props: any) => {
//   const [search, setSearch] = useState('');

//   const products = [
//     {
//       id: 1,
//       name: 'T Shirt',
//       color: 'Black',
//       price: 7,
//       image: 'https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png',
//       description: 'This T-shirt is made from high-quality cotton fabric, ensuring comfort and durability. It features a classic black color and a crew neck design. Perfect for casual wear and can be easily paired with jeans or shorts.',
//       size: 'M',
//       material: '100% Cotton',
//       brand: 'ABC Apparel'
//     },
//     {
//       id: 2,
//       name: 'Polo Shirt',
//       color: 'White',
//       price: 9,
//       image: 'https://w7.pngwing.com/pngs/512/604/png-transparent-t-shirt-polo-shirt-clothing-top-polo-shirt-white-polo-shirt-white-fashion-active-shirt-thumbnail.png',
//       description: 'This T-shirt is made from high-quality cotton fabric, ensuring comfort and durability. It features a classic black color and a crew neck design. Perfect for casual wear and can be easily paired with jeans or shorts.',
//       size: 'M',
//       material: '100% Cotton',
//       brand: 'ABC Apparel'
//     },
//     {
//       id: 3,
//       name: 'Casual Shirt',
//       color: 'Mix',
//       price: 16,
//       image: 'https://w7.pngwing.com/pngs/264/23/png-transparent-t-shirt-dress-shirt-sleeve-shirt-tshirt-blue-tartan-thumbnail.png',
//       description: 'This T-shirt is made from high-quality cotton fabric, ensuring comfort and durability. It features a classic black color and a crew neck design. Perfect for casual wear and can be easily paired with jeans or shorts.',
//       size: 'M',
//       material: '100% Cotton',
//       brand: 'ABC Apparel'
//     },
//     {
//       id: 4,
//       name: 'Polo Shirt',
//       color: 'Red',
//       price: 15000,
//       image: 'https://w7.pngwing.com/pngs/695/311/png-transparent-t-shirt-hoodie-polo-shirt-tshirt-tshirt-active-shirt-jersey-thumbnail.png',
//       description: 'This T-shirt is made from high-quality cotton fabric, ensuring comfort and durability. It features a classic black color and a crew neck design. Perfect for casual wear and can be easily paired with jeans or shorts.',
//       size: 'M',
//       material: '100% Cotton',
//       brand: 'ABC Apparel'
//     },
//     {
//       id: 5,
//       name: 'Hoodie',
//       color: 'Black',
//       price: 11,
//       image: 'https://w7.pngwing.com/pngs/747/815/png-transparent-hoodie-t-shirt-supreme-bluza-t-shirt-thumbnail.png',
//       description: 'This T-shirt is made from high-quality cotton fabric, ensuring comfort and durability. It features a classic black color and a crew neck design. Perfect for casual wear and can be easily paired with jeans or shorts.',
//       size: 'M',
//       material: '100% Cotton',
//       brand: 'ABC Apparel'
//     },
//   ];

//   const filteredProducts = products.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleProductPress = (product: any) => {
//     props.navigation.navigate('ProductDetails', { product });
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: '#f5f5f5', paddingVertical: 20, paddingHorizontal: 20 }}>
//       <View style={{ alignItems: 'center', marginBottom: 20 }}>
//         <TextInput
//           placeholder="Search"
//           value={search}
//           onChangeText={(text) => setSearch(text)}
//           style={{
//             width: 350,
//             height: 50,
//             borderWidth: 2,
//             borderColor: 'lightgrey',
//             borderRadius: 15,
//             padding: 10,
//             backgroundColor: '#fff',
//           }}
//         />
//       </View>
//       <ScrollView contentContainerStyle={{ marginBottom: 50, borderBottomWidth: 3 }}>
//         {filteredProducts.map((item) => (
//           <TouchableOpacity key={item.id} onPress={() => handleProductPress(item)}>
//             <View style={{ backgroundColor: 'white', borderRadius: 30, borderWidth: 3, borderColor: 'lightgrey', marginBottom: 20, padding: 10 }}>
//               <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
//               <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Color: {item.color}</Text>
//               <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Price: ${item.price}</Text>
//               <Image style={{ width: 200, height: 200, marginTop: 10, marginBottom: 10 }} source={{ uri: item.image }} />
//               <TouchableOpacity  style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: 'black', borderRadius: 50, padding: 10 }}>
//                 <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Add to Cart</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       <TouchableOpacity
//         style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: 'black', borderRadius: 50, padding: 10 }}
//         onPress={() => props.navigation.navigate('Cart')}
//       >
//         <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Go to Cart (0)</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const ProductDetails = (props: any) => {
//   const product = props.route.params.product;

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: 20 }}>
//       <Image style={{ width: 200, height: 200, marginBottom: 20 }} source={{ uri: product.image }} />
//       <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>{product.name}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Color: {product.color}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Price: ${product.price}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Description: {product.description}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Size: {product.size}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Material: {product.material}</Text>
//       <Text style={{ fontSize: 18, marginBottom: 10 }}>Brand: {product.brand}</Text> 
//     </View>
//   );
// };

// const Cart=()=>{
//   return(
//     <View>
//       <Text>cart</Text>
//     </View>
//   )
// }













// const Confirmation = (props: any) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center' }}>
//       <Text>order Confirmation</Text>
//       <Button title="confirm order" onPress={() => props.navigation.navigate("ConfirmNotification")} />
//     </View>

//   );
// };
















// const ConfirmNotification = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//       <Text style={{ fontSize: 50 }}>Order confirmed</Text>
//     </View>

//   );
// };
 // const renderHeader = () => {
  //   return (
  //     <View style={{ flexDirection: 'row' }}>
  //       <TouchableOpacity style={{ paddingLeft: 10, paddingTop: 12 }}>
  //         <Image source={require('./assets/loc.png')} style={{ height: 35, width: 35 }} />
  //       </TouchableOpacity>
  //       <TouchableOpacity style={{ paddingTop: 15, paddingLeft: 85, justifyContent: 'center' }}>
  //         <Text style={{ backgroundColor: 'white', fontSize: 17, borderWidth: 1, borderColor: 'transparent', height: 40, width: 150, borderRadius: 15, textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold' }}>Location</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={{ marginTop: 15, paddingLeft: 80 }}><Image style={{ height: 35, width: 35 }} source={require('./assets/basket.png')} /></TouchableOpacity>
  //     </View>

  //   )
  // }
  // const RenderMainCategories = () => {
  //   return (
  //     <View>
  //       <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Main</Text>
  //       <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Categories</Text>
  //     </View>
  //   )

  // }

  // const Renderitem = (props:any) => {
  // const [select, setSelect] = useState(null)
  // const [Display, setDisplay] = useState('')
  // const get = (index: any) => {
  //   setSelect(index);
  //   setDisplay(category[index].name)
  // };
  // const handledetails=(prod:any)=>{
  //   props.navigation.navigate('Product_Details',{prod})
  // }



  //     <View>
  //       <ScrollView horizontal={true}>
  //         <View style={{ flexDirection: 'row', marginTop: 20 }}>
  //           {category.map((item, index) => (
  //             <TouchableOpacity
  //               onPress={() => get(index)}
  //               key={index}
  //               style={{
  //                 marginLeft: 20,
  //                 marginRight: 20,
  //                 height: 100,
  //                 width: 80,
  //                 backgroundColor: select === index ? 'darkorange' : 'white',
  //                 borderRadius: 25,
  //               }}
  //             >
  //               <View
  //                 style={{
  //                   width: 50,
  //                   height: 55,
  //                   backgroundColor: 'white',
  //                   borderRadius: 15,
  //                   alignContent: 'center',
  //                   alignItems: 'center',
  //                   alignSelf: 'center',
  //                   marginTop: 10,
  //                 }}
  //               >
  //                 <Image
  //                   source={item.icon}
  //                   style={{ height: 35, width: 37, marginTop: 5 }}
  //                 />
  //                 <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>
  //                   {item.name}
  //                 </Text>
  //               </View>
  //             </TouchableOpacity>
  //           ))}
  //         </View>
  //       </ScrollView>

  //       <ScrollView>
  //         <View>
  //           {
  //             Product.map((item) =>
  //               item.p_Type === Display ?

  //                 <TouchableOpacity onPress={(item)=>handledetails(item)}>
  //                   <View style={{ flex: 1, alignItems: 'center', margin: 50, marginTop: 40, marginHorizontal: 10 }} key={item.p_id}>
  //                     <View style={{ position: 'relative' }}>
  //                       <Image style={{ flex: 1, width: 400, height: 200, borderRadius: 35 }} source={item.p_icon} />
  //                       <Text style={{ position: 'absolute',color: 'black', backgroundColor: 'white',height:50,width:130,borderRadius:15,marginTop:198,borderColor:'transparent',fontSize:21,fontWeight:'bold',textAlignVertical:"center",textAlign:'center'}}>15-20 min</Text>
  //                     </View>
  //                     <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', textAlign: 'left', marginRight: 280 }}>
  //                       {item.p_name}
  //                     </Text>
  //                     <View style={{ flexDirection: 'row' }}>
  //                       <Image style={{ tintColor: 'darkorange', width: 21, height: 23, marginLeft: -200 }} source={require('./assets/star.png')} />
  //                       <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>4.8</Text>
  //                       <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 20 }}>-{item.p_Type}</Text>
  //                       <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>-{item.P_price}$</Text>
  //                     </View>
  //                   </View>
  //                 </TouchableOpacity>



  //                 : null
  //             )}
  //         </View>
  //       </ScrollView>
  //     </View>
  //   );
  // };














































import React, { useState ,useEffect} from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, ImageBackground,Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Svg, { Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Product } from "./components/Product";
import {addToCart,removetocart,incrementtocart,decrementtocart} from './components/redux/action';
import {useDispatch,useSelector} from 'react-redux'


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Index" component={Index}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name='Restaurant' component={Restaurant} />
        <Stack.Screen name='OrderDelivery' component={OrderDelivery} />
        <Stack.Screen name="Product_Details" component={Product_Details} options={{headerShown:true,headerTitle:'Details'}} />
        <Stack.Screen name="GTC" component={GTC} options={{headerShown:true,headerTitle:'Cart'}}/>
        <Stack.Screen name="Proceed" component={Proceed} options={{headerShown:true,headerTitle:'Checkout'}}/> 
      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default App;

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarStyle: { borderTopWidth: 0, elevation: 0, backgroundColor: 'transparent' } }}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./assets/spooon.png')}
              style={{ tintColor: focused ? "lightblue" : "black", width: 30, height: 30 }}
            />
          ),

        }}
      />

      <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: ({ focused }) => (
          <Image source={require('./assets/icon.png')}
            style={{ tintColor: focused ? "lightblue" : "black`", width: 30, height: 30 }} />
        )
      }} />


      <Tab.Screen name="Like" component={Like} options={{
        tabBarIcon: ({ focused }) => (
          <Image source={require('./assets/likee.png')}
            style={{ tintColor: focused ? "lightblue" : "black`", height: 35, width: 35 }} />
        ),
      }}
      />

      <Tab.Screen name="User" component={User} options={{
        tabBarIcon: ({ focused }) => (
          <Image source={require('./assets/userr.png')}
            style={{ tintColor: focused ? "lightblue" : "black", width: 30, height: 30 }} />)
      }} />



    </Tab.Navigator>


  );
};

const Index=(props:any)=>{
  return(
    <View style={{backgroundColor:"lightblue",flex:1}}>
      <View style={{alignSelf:'center',justifyContent:'center',flex:1}}>
        <Text style={{fontSize:50,color:'#F5F5F5',fontWeight:'bold'}}>SnackDash</Text>
      </View>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Login')} style={{height:60,width:260,backgroundColor:'white',borderRadius:30,borderColor:'transparent',marginLeft:75,marginBottom:30}}>
        <View style={{flexDirection:'row'}}>
        <Text style={{alignSelf:'center',margin:10,fontSize:28,fontWeight:'bold',color:'black',marginRight:10,marginLeft:24}}>Get started</Text>
        <Image style={{height:50,width:50,borderRadius:50,margin:4.5,marginLeft:25}} source={require('./assets/arrow.png')}/>
        </View>
      </TouchableOpacity>

    </View>
  )
}


const Login=(props:any)=>{

  const [ActiveUser,setActiveUser]=useState(null)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [EmailError,setEmailError]=useState(false)
  const [passwordError,setPasswordError]=useState(false)

  
  const finddata=async()=>{
          if (email.length===0){
            setEmailError(true)
          }
          else{
            setEmailError(false)
          }

          if (password.length===0){
            setPasswordError(true)
          }
          else{
            setPasswordError(false)
          }

          if (!email || !password){
            return false
          }



          const url = "http://192.168.10.13:3000/login";
          let result = await fetch(url, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({email, password }) })
          result = await result.json();
          if (result.name){
            setEmail('')
            setPassword('')
            setActiveUser(result.name)
            console.warn("Logged in as",result.name)
            props.navigation.navigate('Home')
          }
          else
          {
            Alert.alert("invalid credentials")
          }
        }
  return(
    <View style={{flex:1,backgroundColor:'lightblue'}}>
      <View style={{flex:1,justifyContent:'center'}}>
      <View style={{height:410,width:350,backgroundColor:'white',alignSelf:'center',borderRadius:60}}>
        <View style={{alignSelf:'center',justifyContent:'center',margin:60}}>
          <Image style={{height:100,width:100,borderRadius:35,marginLeft:100}} source={require('./assets/user.png')}/>
          <Text style={{fontSize:40,fontWeight:'900',color:'black',marginLeft:95}}>LOGIN</Text>
          <TextInput placeholder="Enter your Email" value={email} onChangeText={(text)=>setEmail(text)}  placeholderTextColor='black' textAlign='center' style={{margin:20,borderWidth:2,height:45,width:280,borderRadius:20,borderColor:'black'}}/>
           {
            EmailError?<Text style={{ color: 'red', marginLeft: 55 ,fontWeight:'900'}}>Email cannot be empty</Text>:null
           }
           <TextInput secureTextEntry={true} placeholder="Enter your Password" value={password} onChangeText={(text)=>setPassword(text)} placeholderTextColor='black' textAlign='center' style={{marginLeft:20,borderWidth:2,height:45,width:280,borderRadius:20,borderColor:'black'}}/>
           {
            passwordError?<Text style={{ color: 'red', marginLeft: 55 ,fontWeight:'900'}}>Email cannot be empty</Text>:null
           }
           <TouchableOpacity onPress={()=>finddata()}><Image style={{height:110,width:131,alignSelf:'center',marginBottom:40}} source={require('./assets/login.jpg')}/></TouchableOpacity>
           <TouchableOpacity onPress={()=>props.navigation.navigate('Signin')} style={{alignSelf:'center'}}><Text style={{fontSize:15,fontWeight:'bold',color:'black',marginBottom:20}}>Dont have an account?Signin</Text></TouchableOpacity>

        </View>
        </View>
      </View>
    </View>
  )
}
const User = (props:any) => {
  const user = props.ActiveUser
  const logout=()=>{
    props.navigation.navigate('Login')
    console.warn('Logged out successfull')
  }
  return (
    <View style={{flex:1,backgroundColor:'lightblue',justifyContent:'center'}}>
      <View style={{height:300,width:350,backgroundColor:'white',borderRadius:60,borderWidth:3,borderColor:'black',alignSelf:"center"}}>
        <Text style={{fontSize:40,alignSelf:"center",fontWeight:'900',color:'black'}}>ACTIVE USER</Text>
        <Image style={{height:90,width:90,borderRadius:30,alignSelf:'center',marginTop:30}} source={require('./assets/user.png')}/>
        <Text style={{color:'blue',alignSelf:"center",margin:10,fontSize:20}}>{user}</Text>
        <TouchableOpacity onPress={()=>{logout()}} style={{height:45,width:100,backgroundColor:"black",alignSelf:'center',borderRadius:5}}><Text style={{fontSize:20,color:"white",fontWeight:'900',alignSelf:"center",marginTop:9}}>LOG OUT</Text></TouchableOpacity>
      </View>

    </View>
  )
}


const Signin=(props:any)=>{
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)






  const AddData = async () => {

    if (!name) {
      setNameError(true)
    }
    else {
      setNameError(false)
    }



    if (!age) {
      setAgeError(true)
    }
    else {
      setAgeError(false)
    }




    if (!email!) {
      setEmailError(true)
    }
    else {
      setEmailError(false)
    }




    if (!password!) {
      setPasswordError(true)
    }
    else {
      setPasswordError(false)
    }





    if (!name || !age || !email || !password) {
      return false
    }


    const url = "http://192.168.10.13:3000/register";
    let result = await fetch(url, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, age, email, password }) })
    result = await result.json();
    props.navigation.navigate('Login', console.warn('Account created'))
  };

  return(
    <View style={{flex:1,backgroundColor:'lightblue'}}>
      <View style={{height:600,width:350,backgroundColor:'white',alignSelf:'center',marginTop:20,borderRadius:60,borderColor:'transparent'}}>
      <Image style={{height:100,width:100,borderRadius:60,alignSelf:'center',marginTop:30}} source={require('./assets/user.png')}/>
      <Text style={{fontSize:40,fontWeight:'900',color:'black',alignSelf:'center',marginTop:10}}>REGISTER</Text>
      <TextInput placeholder="Enter your Name" value={name} onChangeText={(text)=>setName(text)} placeholderTextColor='black' textAlign='center' style={{borderWidth:2,height:45,width:280,borderRadius:20,borderColor:'black',alignSelf:'center',marginTop:10}}/>
      {
        nameError ? <Text style={{ color: 'red', marginLeft:55,fontWeight:'900' }}>Invalid Name</Text>

           : null 
      }      
      <TextInput placeholder="Enter your Age" value={age} onChangeText={(text)=>setAge(text)} placeholderTextColor='black' textAlign='center' style={{borderWidth:2,height:45,width:280,borderRadius:20,borderColor:'black',alignSelf:'center',marginTop:10}}/>
      {
        ageError ? <Text style={{ color: 'red', marginLeft:55,fontWeight:'900' }}>Invalid Age</Text>

           : null 
      }  
      <TextInput placeholder="Enter your Email" value={email} onChangeText={(text)=>setEmail(text)} placeholderTextColor='black' textAlign='center' style={{borderWidth:2,height:45,width:280,borderRadius:20,borderColor:'black',alignSelf:'center',marginTop:10}}/>
      {
        emailError ? <Text style={{ color: 'red', marginLeft: 55,fontWeight:'900' }}>Invalid Email</Text>

           : null 
      }  
      <TextInput  secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)} placeholder="Enter your Password" placeholderTextColor='black' textAlign='center' style={{borderWidth:2,height:45,width:280,borderRadius:20,borderColor:'black',alignSelf:'center',marginTop:10}}/>
      {
        passwordError ? <Text style={{ color: 'red', marginLeft: 55 ,fontWeight:'900'}}>Invalid Password</Text>

           : null 
      }  
      <TouchableOpacity onPress={()=>AddData()} style={{alignSelf:'center',height:40,width:90,backgroundColor:'black',borderRadius:30,marginTop:25}}><Text style={{fontSize:20,color:'white',fontWeight:'900',alignSelf:'center',marginTop:6,borderColor:'transparent'}}>SIGNIN</Text></TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}><Text style={{fontSize:18,fontWeight:'900',color:'black',alignSelf:'center',marginTop:13}} >Already have an account?Login</Text></TouchableOpacity>
       
      
    </View>
  )
}




const Home = (props:any) => {
  const [select, setSelect] = useState(null)
  const [Display, setDisplay] = useState('')
  const get = (index: any) => {
    setSelect(index);
    setDisplay(category[index].name)
  };
  const handledetails=(prod:any)=>{
    props.navigation.navigate('Product_Details',{prod})

  }
  const category = [
    {
      id: 1,
      name: 'Burger',
      icon: require('./assets/burger.png')
    },



    {
      id: 2,
      name: 'Pizza',
      icon: require('./assets/pizza.png')
    },




    {
      id: 3,
      name: 'Snacks',
      icon: require('./assets/snacks.png')
    },


    {
      id: 4,
      name: 'Sushi',
      icon: require('./assets/sushi.png')
    }
  ]


  const Product = [

    {
      p_id: 1,
      p_name: 'Vegetable',
      p_icon: require('./assets/f1.jpg'),
      p_type: 'Burger',
      p_price: 15,
      p_quantity: 1

    },
    {
      p_id: 2,
      p_name: 'Noodle Soap',
      p_icon: require('./assets/f2.jpg'),
      p_type: 'Pizza',
      p_price: 10,
      p_quantity: 1

    },
    {
      p_id: 3,
      p_name: 'Fried Rice',
      p_icon: require('./assets/f3.jpg'),
      p_type: 'Sushi',
      p_price: 14,
      p_quantity: 1

    },
    {
      p_id: 4,
      p_name: 'Manchurian',
      p_icon: require('./assets/f4.jpg'),
      p_type: 'Snacks',
      p_price: 18,
      p_quantity: 1

    },
    {
      p_id: 5,
      p_name: 'Chilli Chicken',
      p_icon: require('./assets/f5.jpg'),
      p_type: 'Burger',
      p_price: 20,
      p_quantity: 1


    },
    {
      p_id: 6,
      p_name: 'Krunch burger',
      p_icon: require('./assets/f6.jpg'),
      p_type: 'Pizza',
      p_price: 21,
      p_quantity: 1

    },
    {
      p_id: 7,
      p_name: 'Zinger burger',
      p_icon: require('./assets/f7.jpg'),
      p_type: 'Sushi',
      p_price: 25,
      p_quantity: 1

    },
    {
      p_id: 8,
      p_name: 'Krunch burger',
      p_icon: require('./assets/f8.jpg'),
      p_Type: 'Snack',
      P_price: 18,
      p_quantity: 1

    },
    {
      p_id: 9,
      p_name: 'Krunch burger',
      p_icon: require('./assets/f9.jpg'),
      p_type: 'Burger',
      p_price: 30,
      p_quantity: 1

    }

  ]

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ paddingLeft: 10, paddingTop: 12 }}>
          <Image source={require('./assets/loc.png')} style={{ height: 35, width: 35 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingTop: 15, paddingLeft: 85, justifyContent: 'center' }}>
          <Text style={{ backgroundColor: 'white', fontSize: 17, borderWidth: 1, borderColor: 'transparent', height: 40, width: 150, borderRadius: 15, textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold' }}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.navigate('GTC')} style={{ marginTop: 15, paddingLeft: 80 }}><Image style={{ height: 35, width: 35 }} source={require('./assets/basket.png')} /></TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: 20 }}>Main</Text>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Categories</Text>
      </View>
      <View>
        <ScrollView horizontal={true}>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            {category.map((item, index) => (
              <TouchableOpacity
                onPress={() => get(index)}
                key={index}
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  height: 100,
                  width: 80,
                  backgroundColor: select === index ? 'pink' : 'white',
                  borderRadius: 25,
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: 55,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    alignContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={item.icon}
                    style={{ height: 35, width: 37, marginTop: 5 }}
                  />
                  <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <ScrollView>
          <View>
            {
              Product.map((item) =>
                item.p_type === Display ?

                  <TouchableOpacity onPress={()=>handledetails(item)}>
                    <View style={{ flex: 1, alignItems: 'center', margin: 50, marginTop: 40, marginHorizontal: 10 }} key={item.p_id}>
                      <View style={{ position: 'relative' }}>
                        <Image style={{ flex: 1, width: 400, height: 200, borderRadius: 35 }} source={item.p_icon} />
                        <Text style={{ position: 'absolute', color: 'black', backgroundColor: 'white', height: 50, width: 130, borderRadius: 15, marginTop: 198, borderColor: 'transparent', fontSize: 21, fontWeight: 'bold', textAlignVertical: "center", textAlign: 'center' }}>15-20 min</Text>
                      </View>
                      <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', textAlign: 'left', marginRight: 280 }}>
                        {item.p_name}
                      </Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Image style={{ tintColor: 'lightblue', width: 21, height: 23, marginLeft: -200 }} source={require('./assets/star.png')} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>4.8</Text>
                        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 20 }}>-{item.p_type}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>-{item.p_price}$</Text>
                      </View>
                    </View>
                  </TouchableOpacity>



                  : null
              )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const Restaurant = () => {
  return (
    <View>
      <Text>Restaurant</Text>
    </View>
  )
}


const OrderDelivery = () => {
  return (
    <View>
      <Text>order delivery</Text>
    </View>
  )
}

const Product_Details = (props: any) => {
  const item = props.route.params.prod
  const dispatch = useDispatch();
  const handleaddtocart=(item:any)=>{
    dispatch(addToCart(item))
  }
    
  return (
    <View>
      <Image style={{height:300,width:420,alignSelf:'center'}} source={item.p_icon}/>
      <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25,color:'black',marginTop:5}}>{item.p_name} _ {item.p_price}.00</Text>
      <Text style={{alignSelf:'center',fontWeight:'400',fontSize:15,color:'black',marginTop:5}}>Burger with crispy chicken, cheese and lettuce</Text>
      <View style={{position:'relative'}}>
      <Image style={{width:25,height:20,alignSelf:'center',margin:5,marginLeft:-50}} source={require('./assets/f.png')}/>
      <Text style={{color:"black",fontWeight:'400',fontSize:13,alignSelf:'center',marginLeft:35,marginVertical:-23.5}}>200.00 cal</Text>
      </View> 
      <TouchableOpacity onPress={()=>handleaddtocart(item)} style={{alignSelf:'flex-end',marginTop:180,marginRight:10,borderColor:'transparent'}}><Image style={{width:170,height:50,alignSelf:'center'}} source={require('./assets/addtocart.png')}/></TouchableOpacity>
    </View>
  )
}
















const Search = (props:any) => {
  const [search,setSearch]=useState('')
  const handledetails=(prod:any)=>{
    props.navigation.navigate('Product_Details',{prod})
  }
  const Product = [

    {
      p_id: 1,
      p_name: 'Vegetable',
      p_icon: require('./assets/f1.jpg'),
      p_type: 'Burger',
      p_price: 15,
      p_quantity: 1

    },
    {
      p_id: 2,
      p_name: 'Noodle Soap',
      p_icon: require('./assets/f2.jpg'),
      p_type: 'Pizza',
      p_price: 10,
      p_quantity: 1

    },
    {
      p_id: 3,
      p_name: 'Fried Rice',
      p_icon: require('./assets/f3.jpg'),
      p_type: 'Sushi',
      p_price: 14,
      p_quantity: 1

    },
    {
      p_id: 4,
      p_name: 'Manchurian',
      p_icon: require('./assets/f4.jpg'),
      p_type: 'Snacks',
      p_price: 18,
      p_quantity: 1

    },
    {
      p_id: 5,
      p_name: 'Chilli Chicken',
      p_icon: require('./assets/f5.jpg'),
      p_type: 'Burger',
      p_price: 20,
      p_quantity: 1


    },
    {
      p_id: 6,
      p_name: 'Krunch burger',
      p_icon: require('./assets/f6.jpg'),
      p_type: 'Pizza',
      p_price: 21,
      p_quantity: 1

    },
    {
      p_id: 7,
      p_name: 'Zinger burger',
      p_icon: require('./assets/f7.jpg'),
      p_type: 'Sushi',
      p_price: 25,
      p_quantity: 1

    },
    {
      p_id: 8,
      p_name: 'Krunch burger',
      p_icon: require('./assets/f8.jpg'),
      p_type: 'Snack',
      p_price: 18,
      p_quantity: 1

    },
    {
      p_id: 9,
      p_name: 'Krunch burger',
      p_icon: require('./assets/f9.jpg'),
      p_type: 'Burger',
      p_price: 30

    }

  ]
  const filteredProducts = Product.filter((item)=>item.p_name.toLowerCase().includes(search.toLowerCase()));
  return (
    <View>
      <View>
      <TextInput value={search} onChangeText={(text) => setSearch(text)} placeholder="Search" placeholderTextColor={'lightblue'} style={{borderWidth: 5,borderColor: 'black',borderRadius: 15,margin: 30,height: 45,width: 350,alignSelf: 'center',textAlign: 'center',fontSize:20,fontWeight:'bold' }} selection={{start:50,end:50}}/>
      <Image style={{width:20,height:20,alignSelf:'flex-end',marginVertical:-62.9,marginBottom:30,marginRight:45}} source={require('./assets/search.png')}/>
      <Text style={{fontSize:30,alignSelf:'center',fontWeight:'bold',color:'black'}}>products</Text>
      </View>
      <ScrollView>
      {
        filteredProducts.map((item,index)=>
        <TouchableOpacity onPress={()=>handledetails(item)}>
        <View style={{ flex: 1, alignItems: 'center', margin: 50, marginTop: 40, marginHorizontal: 10 }} key={index}>
          <View style={{ position: 'relative' }}>
            <Image style={{ flex: 1, width: 400, height: 200, borderRadius: 35 }} source={item.p_icon} />
            <Text style={{ position: 'absolute', color: 'black', backgroundColor: 'white', height: 50, width: 130, borderRadius: 15, marginTop: 198, borderColor: 'transparent', fontSize: 21, fontWeight: 'bold', textAlignVertical: "center", textAlign: 'center' }}>15-20 min</Text>
          </View>
          <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', textAlign: 'left', marginRight: 280 }}>
            {item.p_name}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ tintColor: 'lightblue', width: 21, height: 23, marginLeft: -200 }} source={require('./assets/star.png')} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>4.8</Text>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 20 }}>-{item.p_type}</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>-{item.p_price}$</Text>
          </View>
        </View>
      </TouchableOpacity>
        )
      }
      </ScrollView>
    </View>
  )
}





const GTC = (props:any) => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.reducer)
  console.warn(cartItems)
  const getprice=(totalPrice:any)=>{
    props.navigation.navigate('Proceed', {totalPrice}) 
  }
  const handledeletefromcart=(item:any)=>{
    dispatch(removetocart(item.name))
  }
  const handleAddToCart=(item:any)=>{
    dispatch(addToCart(item))

  }
  const handleIncrementToCart=(item:any)=>{
    dispatch(incrementtocart(item))
  }

 

  useEffect(() => {
    const calculatedTotalPrice = cartItems.reduce((acc, item)=>acc+(item.p_price*item.p_quantity),0)
    setTotalPrice(calculatedTotalPrice);
  }, [cartItems]);



  return (
    <View style={{ flex: 1 }}>
       <Text style={{fontSize: 20, fontWeight: "bold",color:'black',alignSelf:'center',margin:10 }}>Total Price: ${totalPrice}</Text>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          {cartItems.map((item, index) => (
            <View key={index}>
              <View style={{ height: 150, width: 380, backgroundColor: "white", alignSelf: "center", marginTop: 30, borderRadius: 30 }}>
                <Image style={{ width: 120, height: 100, alignSelf: "flex-start", alignContent: "center", marginTop: 24, marginLeft: 18 }} source={item.p_icon} />
                <Text style={{ alignSelf: "center", marginTop: -100, fontSize: 18, fontWeight: "bold", color: "black", marginLeft: 40 }}>{item.p_name}</Text>
                <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold", color: "black", marginVertical: 15 }}>${item.p_price}</Text>
                <View style={{ flexDirection: "row", height: 40, width: 120, backgroundColor: "white", borderColor: "black", borderWidth: 3, borderRadius: 20, alignSelf: "center", marginLeft: 70, alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity onPress={()=>handledeletefromcart(item)}>
                    <Image style={{ width: 25, height: 25, borderRadius: 10 }} source={require('./assets/minus.png')} />
                  </TouchableOpacity>
                  <Text style={{fontSize:20,marginLeft:15,marginRight:15,fontWeight:'900'}}>{item.p_quantity}</Text>
                  <TouchableOpacity onPress={()=>handleIncrementToCart(item)}>
                    <Image style={{ width: 25, height: 25, borderRadius: 10 }} source={require('./assets/plus.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={{ paddingBottom: 15, backgroundColor: 'white', borderColor: 'transparent' }}>
  <TouchableOpacity onPress={()=>getprice(totalPrice)} style={{ alignSelf: "center", alignItems: 'center' }}>
    <View style={{ flexDirection: "row", height: 70, width: 250, backgroundColor: "lightblue", borderRadius: 45, borderWidth: 7, borderColor: "black" }}>
      <Text style={{ fontSize: 30, color: "black", fontWeight: "bold", marginLeft: 45, marginVertical: 5 }}>Checkout</Text>
      <Image style={{ height: 40, width: 40, marginVertical: 5, marginLeft: 5 }} source={require('./assets/placeorder.png')} />
    </View>
  </TouchableOpacity>
</View>

    </View>
  );
};

const Proceed = (props: any) => {
  const totalPrice = props.route.params.totalPrice;
  const [show,setShow]=useState(false)
  const [name,setName]=useState('')
  const sheet = ()=>{
    setShow(true)
  }

  const alldelete = async () => {
      const url = "http://192.168.10.9:3001/Cart";
      const result = await fetch(url, { method: 'delete' });
      const data = await result.json();
  };

  return (
    <View style={{ alignSelf: 'center', marginTop: 200 }}>
      <Text style={{ color: 'black', fontSize: 23, fontWeight: 'bold' }}>
        Total Amount to be paid is: {totalPrice}.00$</Text>
      <TextInput value={name} onChangeText={(text)=>setName(text)} placeholder="Enter your name"/>
      <TextInput placeholder="Enter your email" />
      <TextInput placeholder="Enter your Permanent Address" />
      <TextInput placeholder="Enter your Mobile Number" />
      <TouchableOpacity onPress={()=>alldelete()}>
        <Text onPress={()=>sheet()}>Submit</Text>
      </TouchableOpacity>
      {
        show?
          <View style={{width:300,height:200,backgroundColor:'orange',alignSelf:'center',borderWidth:5,borderRadius:45,marginTop:-250}}>
            <Text style={{alignSelf:'center',textAlign:'center',textAlignVertical:"center",verticalAlign:'middle',padding:30,fontSize:20}}>Dear {name}, Your order will arrive at your doorstep in 30 minutes, Thankyou for ordering</Text>
            <TouchableOpacity><Text>Ok</Text></TouchableOpacity>
          </View>
        
        
        :null
      }
    </View>
  );
};


const Like = () => {
  return (
    <View>
      <Text>Like</Text>
    </View>
  )
}




// import React,{useState} from "react";
// import { TextInput,View,Text,Image,TouchableOpacity } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native'
// import {createNativeStackNavigator} from '@react-navigation/native-stack'






// const Stack = createNativeStackNavigator();
// const page = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Signin">
//         <Stack.Screen name="Signin" component={Signin}/>
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// };
// export default page;














// const Signin=(props:any)=>{
//     const [name, setName] = useState('')
//     const [age, setAge] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
  
  
  
//     const [nameError, setNameError] = useState(false)
//     const [ageError, setAgeError] = useState(false)
//     const [emailError, setEmailError] = useState(false)
//     const [passwordError, setPasswordError] = useState(false)
  
  
  
  
  
  
//     const AddData = async () => {
  
//       if (!name) {
//         setNameError(true)
//       }
//       else {
//         setNameError(false)
//       }
  
  
  
//       if (!age) {
//         setAgeError(true)
//       }
//       else {
//         setAgeError(false)
//       }
  
  
  
  
//       if (!email!) {
//         setEmailError(true)
//       }
//       else {
//         setEmailError(false)
//       }
  
  
  
  
//       if (!password!) {
//         setPasswordError(true)
//       }
//       else {
//         setPasswordError(false)
//       }
  
  
  
  
  
//       if (!name || !age || !email || !password) {
//         return false
//       }
  
  
//       const url = "http://localhost:3000/register";
//       let result = await fetch(url, { method: 'post', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, age, email, password }) })
//       result = await result.json();
//       console.log(result)
//       // props.navigation.navigate('Home', console.warn('Account created'))
//     };
  
//     return(
//       <View style={{flex:1,backgroundColor:'lightblue'}}>
//         <View style={{height:600,width:350,backgroundColor:'white',alignSelf:'center',marginTop:20,borderRadius:60,borderColor:'transparent'}}>
//         <Image style={{height:100,width:100,borderRadius:60,alignSelf:'center',marginTop:30}} source={require('./assets/user.png')}/>
//         <Text style={{fontSize:40,fontWeight:'900',color:'black',alignSelf:'center',marginTop:10}}>REGISTER</Text>
//         <TextInput placeholder="Enter your Name" value={name} onChangeText={(text)=>setName(text)} placeholderTextColor='black' textAlign='center' style={{borderWidth:2,height:45,width:280,borderRadius:20,borderColor:'black',alignSelf:'center',marginTop:10}}/>
//         {
//           nameError ? <Text style={{ color: 'red', marginLeft:55,fontWeight:'900' }}>Invalid Name</Text>
  
//              : null 
//         }      
//         <TextInput placeholder="Enter your Age" value={age} onChangeText={(text)=>setAge(text)} placeholderTextColor='black' textAlign='center' style={{borderWidth:2,height:45,width:280,borderRadius:20,borderColor:'black',alignSelf:'center',marginTop:10}}/>
//         {
//           ageError ? <Text style={{ color: 'red', marginLeft:55,fontWeight:'900' }}>Invalid Age</Text>
  
//              : null 
//         }  
//         <TextInput placeholder="Enter your Email" value={email} onChangeText={(text)=>setEmail(text)} placeholderTextColor='black' textAlign='center' style={{borderWidth:2,height:45,width:280,borderRadius:20,borderColor:'black',alignSelf:'center',marginTop:10}}/>
//         {
//           emailError ? <Text style={{ color: 'red', marginLeft: 55,fontWeight:'900' }}>Invalid Email</Text>
  
//              : null 
//         }  
//         <TextInput  secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)} placeholder="Enter your Password" placeholderTextColor='black' textAlign='center' style={{borderWidth:2,height:45,width:280,borderRadius:20,borderColor:'black',alignSelf:'center',marginTop:10}}/>
//         {
//           passwordError ? <Text style={{ color: 'red', marginLeft: 55 ,fontWeight:'900'}}>Invalid Password</Text>
  
//              : null 
//         }  
//         <TouchableOpacity onPress={()=>AddData()} style={{alignSelf:'center',height:40,width:90,backgroundColor:'black',borderRadius:30,marginTop:25}}><Text style={{fontSize:20,color:'white',fontWeight:'900',alignSelf:'center',marginTop:6,borderColor:'transparent'}}>SIGNIN</Text></TouchableOpacity>
//         </View>
         
        
//       </View>
//     )
//   }
  

// const Home = (props:any)=>{
//   return(
//     <View>
//       <Text style={{fontSize:50}}>Home page </Text>
//     </View>
//   )
// }


// import React,{useState} from "react";
// import { TextInput,View,Button } from 'react-native';
// const enter = ()=>{
//   const [name, setName] = useState('')
//   const [age, setAge] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const adddata=async()=>{
//       const url = "http://192.168.10.10:3000/register";
//       let result = await fetch(url, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, age, email, password }) })
//       result = await result.json();
//       console.warn("data added")
      
//   }
//   return(
//     <View>
//       <TextInput placeholder="name" value={name} onChangeText={(text)=>setName(text)}/>
//       <TextInput placeholder="age" value={age} onChangeText={(text)=>setAge(text)}/>
//       <TextInput placeholder="email" value={email} onChangeText={(text)=>setEmail(text)}/>
//       <TextInput placeholder="password" value={password} onChangeText={(text)=>setPassword(text)}/>
//       <Button title="Submit" onPress={()=>adddata()}/>
//     </View>
//   );
// };
// export default enter;


// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React,{useState} from "react";
// import { TextInput,View,Button, Alert } from 'react-native';
// const enter = ()=>{
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const finddata=async()=>{
//       const url = "http://192.168.10.10:3000/login";
//       let result = await fetch(url, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({email, password }) })
//       result = await result.json();
//       if (result.name){
//         await AsyncStorage.setItem("user", JSON.stringify(result));
//         Alert.alert("logged in")
//       }
//       else
//       {
//         Alert.alert("invalid credentials")
//       }
      
//   }
//   return(
//     <View>
//       <TextInput placeholder="email" value={email} onChangeText={(text)=>setEmail(text)}/>
//       <TextInput placeholder="password" value={password} onChangeText={(text)=>setPassword(text)}/>
//       <Button title="Submit" onPress={()=>finddata()}/>
//     </View>
//   );
// };
// export default enter;











// import React from 'react';
// import {Text,View,Image,Button} from 'react-native';

// export const Product=(props)=>{
//     const item = props.item

//     return(
//         <View>
//             <View style={{alignItems:'center',marginBottom:50,borderBottomWidth:3,borderColor:'black',padding:10}}>
                    
//                     <Text>{item.name}</Text>
//                     <Text>{item.color}</Text>
//                     <Text>{item.price}</Text>
//                     <Image  style={{width:200,height:200}} source={{uri:item.image}}/>
//                     <Button title='ADD TO CART'/>
                    
//                  </View>
//         </View>

//     );
// };
// import React from 'react';
// import {Text,View} from 'react-native';

// export const Header=()=>{
//     return(
//         <View style={{backgroundColor:'yellow'}}>
//             <Text style={{fontSize:30,backgroundColor:'yellow',alignSelf:'flex-end'}}>0</Text>
//         </View>

//     );
// };
































// import React from 'react';
// import {Text,View,Image,Button,ScrollView} from 'react-native';
// import { Header } from './components/Header';
// import { Product } from './components/Product';


// const App=()=>{


//     const products=[
//         {
//             id:1,
//             name:"samsung mobile",
//             color:'white',
//             price:15000,
//             image:"http://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
//         },
//         {   
//             id:2,
//             name:"samsung ipad",
//             color:'white',
//             price:15000,
//             image:"http://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
//         },
//         {
//             id:3,
//             name:"nokia",
//             color:'white',
//             price:15000,
//             image:"http://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
//         }
//     ]



//     return(
//         <View>
//             <Header/>
//             <ScrollView>

//             {

//                 products.map((item)=><Product item={item}/>)
//             }
//             </ScrollView>

//         </View>

//     );
// };
// export default App;