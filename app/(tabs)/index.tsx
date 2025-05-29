import MovieCard from "@/components/MovieCard";
import Searchbar from "@/components/Searchbar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";



export default function Index() {
  const router = useRouter();


  const { 
    data: movies, 
    loading: moviesLoading,
    error: movieError 
  } = useFetch(() => fetchMovies({ 

    query: "" 

  }));


  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        
      />
      <ScrollView 
        className="flex-1 z-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
       >
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto"
          />


          {moviesLoading ? (
            <ActivityIndicator 
              size="large"
              color="#0000ff"
              className="mt-10 self-center"
            />
          ) :  movieError ? (
            <Text className="text-red-500 text-center mt-5">
              Error fetching movies: {movieError.message}
            </Text>

          ) : (

          <View className="flex-1 mt-5">
            <Searchbar
              onPress={() => router.push("/search")}
              placeholder="Search for movies, series, and more..."
              />

            <>
              <Text className="text-white text-lg font-bold mt-5 mb-3">
                Latest Movies 
              </Text>

              <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}

                renderItem={({ item }) => (
                 <MovieCard
                    {...item}
                    onPress={() => router.push(`/movie/${item.id}`)}
                  
                 />
                )}
                showsVerticalScrollIndicator={false}

              />
            </>
        </View>
          )}
       
      </ScrollView>
    </View>
  );
}
