// Account Balance Screen

import React, { useState } from "react";
import { Button, Image, SafeAreaView, FlatList, Text, View } from "react-native";
import { mainStyles } from "../assets/styles/styles";
import TransactionsForm from "../components/transaction-form";
import { StyleSheet } from "react-native";

const transactionData = [];

export default function AccountBalanceScreen() {
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState(transactionData);

    const handleAddExpense = (expenseName, expenseAmount, expenseDate) => {
        const amount = parseFloat(expenseAmount);
        if (isNaN(amount)) {
            console.error("Invalid Amount:", expenseAmount);
            return;
        }

        const newTransaction = {
            id: transactions.length + 1,
            name: expenseName,
            amount: amount,
            date: expenseDate,
        };
        submitTransaction(newTransaction);
    };
    
    // Add new transaction to the list
    const submitTransaction = (newTransaction) => {
        // Copies the existing transactions list and adds on new transactions
        setTransactions([...transactions, newTransaction]);
        setBalance(prevBalance => prevBalance + newTransaction.amount); // this will update the balance
    };

    return (
        <SafeAreaView style={mainStyles.container}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <Text style={mainStyles.heading}>Current Balance</Text>
                        <Text style={styles.balance}>${balance.toFixed(2)}</Text>
                    
                        {/* Component to add a new transaction */}
                        <View>
                            <TransactionsForm handleNewTransaction={handleAddExpense} />
                        </View>
                    </>
                }

                //List of Transactions
                data={transactions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={mainStyles.transaction}>
                        <Text>{item.name}</Text>
                        <Text>${item.amount.toFixed(2)}</Text>
                        <Text>{item.date}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text>No transactions yet.</Text>}
                contentContainerStyle={styles.flatListContainer}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    balance: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});