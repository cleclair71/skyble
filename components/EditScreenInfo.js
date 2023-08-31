import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

export default function EditScreenInfo({ onCitySelect }) {
  const [searchText, setSearchText] = useState('');
  const [searchHistory, setSearchHistory] = useState([]); 

  const addSearchToHistory = async (search) => {
    const newHistory = [...searchHistory, search];
    setSearchHistory(newHistory);
    await AsyncStorage.setItem('@search_history', JSON.stringify(newHistory));

    if(onCitySelect && typeof onCitySelect === 'function') {
      onCitySelect(search);
    }
  }

  const removeSearchFromHistory = async (index) => {
    const newHistory = [...searchHistory];
    newHistory.splice(index, 1);
    setSearchHistory(newHistory);
    await AsyncStorage.setItem('@search_history', JSON.stringify(newHistory));
  }

  const clearSearchHistory = async () => {
    setSearchHistory([]);
    await AsyncStorage.removeItem('@search_history');
  }

  useEffect(() => {
    const fetchRecentSearches = async () => {
      const storedSearches = await AsyncStorage.getItem('@search_history');
      if (storedSearches) {
        setSearchHistory(JSON.parse(storedSearches));
      }
    }
    fetchRecentSearches();
  }, []);

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <MaterialIcons name="search" size={24} color="gray" />
        <TextInput 
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={() => addSearchToHistory(searchText)}
          placeholder="Search City"
          style={styles.searchInput}
        />
        <TouchableOpacity onPress={clearSearchHistory}>
          <Text>Clear</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subHeader}>Recent Searches</Text>

<FlatList
  data={searchHistory}
  keyExtractor={(item, index) => `${index}`}
  renderItem={({ item, index }) => (
    <View style={styles.historyItem}>
      <MaterialIcons name="location-on" size={24} color="lightgray" />
      <Text style={styles.historyText}>{item}</Text>
      <TouchableOpacity onPress={() => removeSearchFromHistory(index)}>
        <AntDesign name="closecircle" size={24} color="lightgray" />
      </TouchableOpacity>
    </View>
  )}

  ItemSeparatorComponent={() => <View style={styles.separator} />}
  />
</View>
);
}

// Add new styles (keep existing ones)
const styles = StyleSheet.create({
  searchContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    height: '80%',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 16,
    color: 'gray',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    height: 40,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: "lightgrey",
    marginLeft: 16,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: 'white',
    
  },
  historyText: {
    flex: 1,
    marginLeft: 10,
    color: "lightgrey",
    padding: 5,
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
  },
});
