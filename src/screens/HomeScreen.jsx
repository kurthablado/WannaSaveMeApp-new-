// Home Screen of Application

import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountBalance from './AccountBalance';
import TransactionsScreen from './TransactionsScreen';
import { mainStyles } from '../assets/styles/styles';
import TransactionDisplay from '../components/transaction-display';
import BudgetButton from '../components/monthly-budget';
import AccountBalanceButton from '../components/account-balance';


export default function HomeScreen() {

    return(
        <SafeAreaView>
            <View>
                <BudgetButton />
            </View>

            <View>
                <AccountBalanceButton />
                <Text>Expenses</Text>
            </View>

            <View>
                <TransactionDisplay />
            </View>
        </SafeAreaView>
    );
}