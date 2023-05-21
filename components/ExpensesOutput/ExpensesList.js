import {FlatList, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

function renderExpenseItem( itemData ) {
    return (
        <View>
            <View>
                <Text>{itemData.item.description}</Text>
                <Text>{itemData.item.date.toLocaleString()}</Text>
            </View>

            <Text>{itemData.item.amount}</Text>
        </View>
    );

}

function ExpensesList({expenses}) {


    return (
        <>
            <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>
        </>

    );
}


export default ExpensesList;
