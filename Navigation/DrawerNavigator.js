import React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Tab = createDrawerNavigator();

const DrawerNavigator = () => {
    return(

        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name="Home" component={TabNavigator}/>
            <DrawerNavigator.Screen name="Profile" component={Profile}/>
        </DrawerNavigator.Navigator>
    );
};

export default DrawerNavigator;