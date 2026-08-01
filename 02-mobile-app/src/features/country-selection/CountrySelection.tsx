import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  SafeAreaView,
} from 'react-native';
import { COUNTRIES, getTrendingCountries, getCountriesByRegion, getAllRegions } from '../../config/countries';

interface Country {
  code: string;
  name: string;
  flag: string;
  currency: string;
  language: string;
  timezone: string;
  trending: boolean;
  region: string;
}

interface CountrySelectionProps {
  visible: boolean;
  onClose: () => void;
  onSelectCountry: (country: Country) => void;
  selectedCountry?: Country;
}

export default function CountrySelection({
  visible,
  onClose,
  onSelectCountry,
  selectedCountry,
}: CountrySelectionProps) {
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState<'trending' | 'all' | 'region'>('trending');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>(COUNTRIES);

  const trendingCountries = getTrendingCountries();
  const regions = getAllRegions();

  useEffect(() => {
    let filtered = COUNTRIES;

    if (searchText) {
      filtered = filtered.filter(
        (country) =>
          country.name.toLowerCase().includes(searchText.toLowerCase()) ||
          country.code.toLowerCase().includes(searchText.toLowerCase())
      );
    } else if (selectedTab === 'trending') {
      filtered = trendingCountries;
    } else if (selectedTab === 'region' && selectedRegion) {
      filtered = getCountriesByRegion(selectedRegion);
    }

    setFilteredCountries(filtered);
  }, [searchText, selectedTab, selectedRegion]);

  const renderCountry = ({ item }: { item: Country }) => (
    <TouchableOpacity
      style={[
        styles.countryItem,
        selectedCountry?.code === item.code && styles.selectedCountryItem,
      ]}
      onPress={() => {
        onSelectCountry(item);
        onClose();
      }}
    >
      <Text style={styles.flag}>{item.flag}</Text>
      <View style={styles.countryInfo}>
        <Text style={styles.countryName}>{item.name}</Text>
        <Text style={styles.countryCode}>{item.code.toUpperCase()}</Text>
      </View>
      {item.trending && (
        <View style={styles.trendingBadge}>
          <Text style={styles.trendingText}>🔥</Text>
        </View>
      )}
      {selectedCountry?.code === item.code && (
        <View style={styles.checkmark}>
          <Text style={styles.checkmarkText}>✓</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const renderRegionButton = (region: string) => (
    <TouchableOpacity
      key={region}
      style={[
        styles.regionButton,
        selectedRegion === region && styles.selectedRegionButton,
      ]}
      onPress={() => setSelectedRegion(region)}
    >
      <Text
        style={[
          styles.regionButtonText,
          selectedRegion === region && styles.selectedRegionButtonText,
        ]}
      >
        {region}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Select Country</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search countries..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'trending' && styles.selectedTab]}
            onPress={() => {
              setSelectedTab('trending');
              setSelectedRegion('');
            }}
          >
            <Text
              style={[styles.tabText, selectedTab === 'trending' && styles.selectedTabText]}
            >
              🔥 Trending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'all' && styles.selectedTab]}
            onPress={() => {
              setSelectedTab('all');
              setSelectedRegion('');
            }}
          >
            <Text style={[styles.tabText, selectedTab === 'all' && styles.selectedTabText]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'region' && styles.selectedTab]}
            onPress={() => {
              setSelectedTab('region');
            }}
          >
            <Text style={[styles.tabText, selectedTab === 'region' && styles.selectedTabText]}>
              By Region
            </Text>
          </TouchableOpacity>
        </View>

        {/* Region Selection */}
        {selectedTab === 'region' && (
          <View style={styles.regionContainer}>
            <FlatList
              horizontal
              data={regions}
              renderItem={({ item }) => renderRegionButton(item)}
              keyExtractor={(item) => item}
              showsHorizontalScrollIndicator={false}
              style={styles.regionList}
            />
          </View>
        )}

        {/* Country List */}
        <FlatList
          data={filteredCountries}
          renderItem={renderCountry}
          keyExtractor={(item) => item.code}
          style={styles.countryList}
          contentContainerStyle={styles.countryListContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No countries found</Text>
            </View>
          }
        />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#6b7280',
  },
  searchContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  searchInput: {
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedTab: {
    borderBottomColor: '#3b82f6',
  },
  tabText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  selectedTabText: {
    color: '#3b82f6',
    fontWeight: '600',
  },
  regionContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  regionList: {
    flexDirection: 'row',
  },
  regionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    marginRight: 8,
  },
  selectedRegionButton: {
    backgroundColor: '#3b82f6',
  },
  regionButtonText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  selectedRegionButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  countryList: {
    flex: 1,
  },
  countryListContent: {
    padding: 8,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  selectedCountryItem: {
    backgroundColor: '#eff6ff',
    borderColor: '#3b82f6',
  },
  flag: {
    fontSize: 32,
    marginRight: 12,
  },
  countryInfo: {
    flex: 1,
  },
  countryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  countryCode: {
    fontSize: 12,
    color: '#6b7280',
  },
  trendingBadge: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  trendingText: {
    fontSize: 12,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#6b7280',
  },
});
