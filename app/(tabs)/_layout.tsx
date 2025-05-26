import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'


const TabIcon = ({ focused, title, icon }: { focused: boolean; title: string; icon: any }) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image
          source={icon}
          tintColor="#151312"
          className="size-5"
        />
        <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
      </ImageBackground>
    );
  }
  return (
    <View className='size-full justify-center items-center mt-4 rounded-full'>
        <Image
            source={icon}
            tintColor="#A8B5DB"
            className="size-5"
        />
    </View>
  );
};

const _Layout = () => {
  return (

    <Tabs>
        <Tabs.Screen 
            name="index"
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({focused}: {focused: boolean}) => (
                    <TabIcon
                        focused={focused}
                        title="Home"
                        icon={icons.home}
                    />
                )
            }}
        />
        <Tabs.Screen 
            name="search"
            options={{
                title: "Search",
                headerShown: false,
                tabBarIcon: ({focused}: {focused: boolean}) => (
                    <TabIcon
                        focused={focused}
                        title="Search"
                        icon={icons.search}
                    />
                )
            }}
         />
        <Tabs.Screen 
            name="saved"
            options={{
                title: "Saved",
                headerShown: false,
                tabBarIcon: ({focused}: {focused: boolean}) => (
                    <TabIcon
                        focused={focused}
                        title="Saved"
                        icon={icons.save}
                    />
                )
            }}
         />
        <Tabs.Screen 
            name="profile"
            options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({focused}: {focused: boolean}) => (
                    <TabIcon
                        focused={focused}
                        title="Profile"
                        icon={icons.person}
                    />
                )
            }}
         />
    </Tabs>
  )
}

export default _Layout
