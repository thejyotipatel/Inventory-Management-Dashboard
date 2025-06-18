'use client'
import React from 'react'
import CardPopularProducts from './CardPopularProducts'
import CardPurchaseSummary from './CardPurchaseSummary'
import CardSalesSummary from './CardSalesSummary'
import CardExpenseSummary from './CardExpenseSummary'
import StatCard from './StatCard'
import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />

      <StatCard
        title='Customer & Expenses'
        primaryIcon={<Package className='text-blue-600 w-6 h-6' />}
        dateRange='22 - 29 October 2023'
        details={[
          {
            title: 'Customer Growth',
            amount: '128.45',
            changePercentage: 134,
            IconComponent: TrendingUp,
          },
          {
            title: 'Expenses',
            amount: '18.05',
            changePercentage: -34,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title='Dues & Pending Orders'
        primaryIcon={<CheckCircle className='text-blue-600 w-6 h-6' />}
        dateRange='22 - 29 October 2023'
        details={[
          {
            title: 'Dues',
            amount: '238.00',
            changePercentage: 124,
            IconComponent: TrendingUp,
          },
          {
            title: 'Pending Orders',
            amount: '155',
            changePercentage: -87,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title='Sales & Discount'
        primaryIcon={<Tag className='text-blue-600 w-6 h-6' />}
        dateRange='22 - 29 October 2023'
        details={[
          {
            title: 'Sales',
            amount: '1008.40',
            changePercentage: 14,
            IconComponent: TrendingUp,
          },
          {
            title: 'Discount',
            amount: '208.05',
            changePercentage: -24,
            IconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  )
}

export default Dashboard
