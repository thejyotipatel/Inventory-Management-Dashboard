import { useGetDashboardMetricsQuery } from '@/state/api'
import { TrendingDown, TrendingUp } from 'lucide-react'
import numeral from 'numeral'

const CardPurchaseSummary = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery()
  const purchaseData = data?.purchaseSummary || []
  const lastDataPoint = purchaseData[purchaseData.length - 1] || null

  return (
    <div className='flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl'>
      {isLoading ? (
        <div className='m-5'>Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div>
            <h2 className='text-lg font-semibold mb-2 px-7 pt-5'>
              Purchase Summary
            </h2>
            <hr />
          </div>

          {/* BODY */}
          <div>
            {/* BODY HEADER */}
            <div className='mb-4 mt-7 px-7'>
              <p className='text-xs text-gray-400'>Purchased</p>
              <div className='flex items-center'>
                <p className='text-2xl font-bold'>
                  {lastDataPoint
                    ? numeral(lastDataPoint.totalPurchased).format('$0.00a')
                    : '0'}
                </p>
                {lastDataPoint && (
                  <p
                    className={` text-sm ${
                      lastDataPoint.changePercentage! >= 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    } flex ml-3`}
                  >
                    {lastDataPoint.changePercentage! >= 0 ? (
                      <TrendingUp className='w-5 h-5 mr-1' />
                    ) : (
                      <TrendingDown className='w-5 h-5 mr-1' />
                    )}
                    {Math.abs(lastDataPoint.changePercentage!)}%
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
export default CardPurchaseSummary
