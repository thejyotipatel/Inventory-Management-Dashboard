'use client'

import { useGetUsersQuery } from '@/state/api'
import Header from '@/app/(components)/Header'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'userId', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 170 },
  { field: 'email', headerName: 'Email', width: 200 },
]
const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery()

  if (isLoading) {
    return <div className='m-5'>Loading...</div>
  }

  if (isError || !users) {
    return <div className='m-5'>Error to fetch users</div>
  }
  return (
    <div className='flex flex-col'>
      <Header name='Users' />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className='bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700'
      />
    </div>
  )
}
export default Users
