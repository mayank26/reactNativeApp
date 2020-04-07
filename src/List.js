// import React, {useState} from "react";
// import {Text, StyleSheet, ScrollView} from "react-native";


// export default function List() {
//     const [people, setPeople] = useState([
//         { name: "Mayank", key: 1},
//         { name: "Anil", key: 2 },
//         { name: "Atul", key: 3 },
//         { name: "Poonam", key: 4},
//         { name: "Richa", key: 5}
//     ]);

//     return(
//         <View styles={this.container}>
//         {
//             <ScrollView>
//             people.map((value) => ()
//                 return (
//                     <View key={value.key}>
//                     <Text style={styles.text}>{value.name}</Text>
//                     </View>
//                 )
//             )
//             </ScrollView>
//         }
//         </View>
//     )

// } 


// const styles = StyleSheet.create({
//     container :  {
//       flex: 1,
//       backgroundColor: "orange",
//       alignItems: "center",
//       justifyContent: "center"
//     },
//     imageSize: {
//       width: 500,
//       height: 500
//     },
//     text: {
//         color: "red",
//         fontSize: 22
//     }

//   });