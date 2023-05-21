import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ManageExpense from "./screens/ManageExpense";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import {NavigationContainer} from "@react-navigation/native";

import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
      <BottomTabs.Navigator screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: GlobalStyles.colors.primary50,
          tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
          tabBarActiveTintColor: GlobalStyles.colors.primary50,
      }}>
          <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} options={{
              tabBarIcon: ({color, size}) => <Ionicons name='hourglass' color={color} size={size}/>,
              tabBarLabel: 'Recent',
              title: 'Recent Expenses',
          }}/>
          <BottomTabs.Screen name="AllExpenses" component={AllExpenses} options={{
              tabBarIcon: ({color, size}) => <Ionicons name='calendar' color={color} size={size}/>,
              tabBarLabel: 'All Expenses',
              title: 'All Expenses',
          }}/>
      </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MyTabs" component={ExpensesOverview} options={{headerShown: false}}/>
                <Stack.Screen name="ManageExpense" component={ManageExpense} />
            </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
