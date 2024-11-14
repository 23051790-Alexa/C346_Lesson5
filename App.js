//Exercise1
// import React from 'react';
// import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
//
// const datasource = [
//   { key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' },
//   { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' },
//   { key: 'i' }, { key: 'j' }, { key: 'k' }, { key: 'l' },
//   { key: 'm' }, { key: 'n' }, { key: 'o' }, { key: 'p' },
//   { key: 'q' }, { key: 'r' }, { key: 's' }, { key: 't' },
// ];
//
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyles}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// export default function App() {
//   return (
//       <View>
//         <FlatList
//             data={datasource}
//             renderItem={renderItem}
//         />
//       </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//   },
//   opacityStyle: {
//     borderWidth: 1,
//   },
//   textStyles:{
//     fontSize: 15,margin: 10,textAlign: 'left',
//   },
// });

//Exercise2
// import React from 'react';
// import { View, SectionList, Text, TouchableOpacity, StyleSheet } from 'react-native';
//
// const datasource =  [
//   {
//     data: [
//       { key: 'a' },
//       { key: 'e' },
//       { key: 'i' },
//       { key: 'o' },
//       { key: 'u' },
//     ],
//     title: "Vowels",
//   },
//   {
//     data: [
//       { key: 'b' },
//       { key: 'c' },
//       { key: 'd' },
//       { key: 'f' },
//       { key: 'g' },
//       { key: 'h' },
//       { key: 'j' },
//       { key: 'k' },
//       { key: 'l' },
//       { key: 'm' },
//       { key: 'n' },
//       { key: 'p' },
//       { key: 'q' },
//       { key: 'r' },
//       { key: 's' },
//     ],
//     title: "Consonants",
//   },
// ];
//
// const renderItem = ({ item }) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// const renderSection = ({ section }) => {
//   return (
//       <View style={section.title === "Vowels" ? styles.vowelsHeader : styles.consonantsHeader}>
//         <Text style={styles.headerText}>{section.title}</Text>
//       </View>
//   );
// };
//
// export default function App() {
//   return (
//       <View style={styles.container}>
//         <SectionList
//             sections={datasource}
//             renderItem={renderItem}
//             renderSectionHeader={renderSection}
//         />
//       </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   opacityStyle: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     backgroundColor: '#fff',
//     margin: 1,
//   },
//   textStyle: {
//     fontSize: 15,
//     textAlign: 'left',
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     paddingVertical: 5,
//   },
//   vowelsHeader: {
//     backgroundColor: '#e24a4a',
//     padding: 5,
//   },
//   consonantsHeader: {
//     backgroundColor: '#42ac5f',
//     padding: 5,
//   },
// });

//Exercise3
import React from 'react';
import { View, SectionList, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';

const datasource = [
  {
    title: "Grass",
    color: '#a0d186',
    icon: '🍃',
    data: [
      {
        key: 'Bulbasaur',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_166-2x.png',
      },
      {
        key: 'Leafeon',
        imageUrl: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BWP/BWP_EN_BW87.png',
      },
    ],
  },
  {
    title: "Psychic",
    color: '#c580bc',
    icon: '👁',
    data: [
      {
        key: 'Mimikyu',
        imageUrl: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SVP/SVP_EN_4.png',
      },
      {
        key: 'Mew',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_151-2x.png',
      },
    ],
  },
];

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.pokemonName}>{item.key}</Text>
      <Image source={{ uri: item.imageUrl }} style={styles.pokemonImage} />
    </TouchableOpacity>
);

const renderSectionHeader = ({ section }) => (
    <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
      <Text style={styles.sectionHeaderText}>{section.icon} {section.title}</Text>
    </View>
);

export default function App() {
  return (
      <View style={styles.container}>
        <Button title="Add Pokemon" onPress={() => { /*bwappp */ }} />
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    backgroundColor: '#f8f8f8',
  },
  sectionHeader: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    color: '#333',
  },
  pokemonImage: {
    width: 150,
    height: 200,
    borderRadius: 5,
  },
});
