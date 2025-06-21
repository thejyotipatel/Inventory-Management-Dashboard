'use client'
import React, { useMemo, useState } from 'react'
import Header from '@/app/(components)/Header'
import {
  ExpenseByCategorySummary,
  useGetExpensesByCategoryQuery,
} from '@/state/api'
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

type AggregatedDataItem = {
  name: string
  color?: string
  amount: number
}

type AggregatedData = {
  [category: string]: AggregatedDataItem
}

const Expenses = () => {
  const {
    data: expensesData,
    isError,
    isLoading,
  } = useGetExpensesByCategoryQuery()
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  // Memoize the expenses data to avoid unnecessary re-renders
  const expenses = useMemo(() => expensesData ?? [], [expensesData])
  // Function to parse date strings to a standard format
  const parseDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
  }
  // Memoize the aggregated data to optimize performance
  const aggregatedData: AggregatedDataItem[] = useMemo(() => {
    // Filter and aggregate expenses based on selected category and date range
    const filtered: AggregatedData = expenses
      .filter((data: ExpenseByCategorySummary) => {
        // Check if the expense matches the selected category and date range
        const matchesCategory =
          selectedCategory === 'All' || data.category === selectedCategory
        // Parse the date and check if it falls within the selected date range
        const dataDate = parseDate(data.date)
        // Check if the expense date is within the selected date range
        const matchesDate =
          !startDate ||
          !endDate ||
          (dataDate >= startDate && dataDate <= endDate)
        // Return true if both category and date match
        return matchesCategory && matchesDate
      }) // Reduce the filtered expenses to aggregate amounts by category
      .reduce((acc: AggregatedData, data: ExpenseByCategorySummary) => {
        const amount = parseInt(data.amount)
        // If the category does not exist in the accumulator, create it
        if (!acc[data.category]) {
          acc[data.category] = { name: data.category, amount: 0 }
          // Assign a random color to the category
          acc[data.category].color = `#${Math.floor(
            Math.random() * 16777215
          ).toString(16)}` // Generate a random color for the category
          // Increment the amount for the category
          acc[data.category].amount += amount
        }
        // Return the accumulator with aggregated amounts
        return acc
      }, {})
    // Convert the aggregated data object to an array of AggregatedDataItem
    return Object.values(filtered)
    // Return the aggregated data as an array
  }, [expenses, selectedCategory, startDate, endDate])

  const classNames = {
    label: 'block text-sm font-medium text-gray-700',
    selectInput:
      'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md',
  }

  if (isLoading) {
    return <div className='m-5'>Loading...</div>
  }

  if (isError || !expenses) {
    return <div className='m-5'>Error to fetch expenses</div>
  }
  return (
    <div>
      {/* HEADER */}
      <div className='mb-5'>
        <Header name='Expenses' />
        <p className='text-sm text-gray-500'>
          A visual representation of expenses over time.
        </p>
      </div>

      {/* FILTERS */}
      <div className='flex flex-col md:flex-row justify-between gap-4'>
        <div className='w-full md:w-1/3 bg-white shadow rounded-lg p-6'>
          <h3 className='text-lg font-semibold mb-4'>
            Filter by Category and Date
          </h3>
          <div className='space-y-4'>
            {/* CATEGORY */}
            <div>
              <label htmlFor='category' className={classNames.label}>
                Category
              </label>
              <select
                id='category'
                name='category'
                className={classNames.selectInput}
                defaultValue='All'
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option>All</option>
                <option>Office</option>
                <option>Professional</option>
                <option>Salaries</option>
              </select>
            </div>
            {/* START DATE */}
            {/* START DATE */}
            <div>
              <label htmlFor='start-date' className={classNames.label}>
                Start Date
              </label>
              <input
                type='date'
                id='start-date'
                name='start-date'
                className={classNames.selectInput}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            {/* END DATE */}
            <div>
              <label htmlFor='end-date' className={classNames.label}>
                End Date
              </label>
              <input
                type='date'
                id='end-date'
                name='end-date'
                className={classNames.selectInput}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* PIE CHART */}
        <div className='flex-grow bg-white shadow rounded-lg p-4 md:p-6'>
          <ResponsiveContainer width='100%' height={400}>
            <PieChart>
              <Pie
                data={aggregatedData}
                cx='50%'
                cy='50%'
                label
                outerRadius={150}
                fill='#8884d8'
                dataKey='amount'
                onMouseEnter={(_, index) => setActiveIndex(index)}
              >
                {/* Render each slice of the pie chart with a Cell component */}
                {aggregatedData.map(
                  (entry: AggregatedDataItem, index: number) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        // Highlight the active slice with a specific color
                        index === activeIndex ? 'rgb(29, 78, 216)' : entry.color
                      }
                    />
                  )
                )}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
export default Expenses
