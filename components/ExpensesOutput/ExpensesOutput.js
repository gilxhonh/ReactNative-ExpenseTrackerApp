import React from 'react'
import { StyleSheet, View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-05-16')
  },
  {
    id: 'e2',
    description: 'A pair of shoes',
    amount: 89.99,
    date: new Date('2023-05-15')
  },
  {
    id: 'e3',
    description: 'A pair of shoes',
    amount: 159.99,
    date: new Date('2023-05-14')
  },
  {
    id: 'e4',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-04-10')
  },
  {
    id: 'e5',
    description: 'Shoes',
    amount: 1059.99,
    date: new Date('2023-01-05')
  }
]

function ExpensesOutput ({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700
  }
})
