import userData from "./userData";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {

  const editUser = (event: any) => {

  }
  const deleteUser = (event: any) => {

  }

  return (
    <div className='flex flex-col item-center justify-center  mx-auto mt-20'>
      <h1 className='text-center text-3xl p-4'>
        User Management List
      </h1>
    <table className="table-auto border-separate border-spacing-2 border border-slate-500 hover:border-spacing-2 px-2 py-2">
  <thead>
    <tr>
    <th>Sr. No.</th>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile No.</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {
        userData.map((data: any, id: any) => {
          return (
            <tr key={id} className='text-center'>
              <td>{data.id}</td>
            <td>{data.first_name} {data.last_name} </td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>
              <CreateIcon />
              <DeleteIcon />
            </td>
          </tr>
          );

        })
      }
    
  </tbody>
</table>
     
    </div>
  )
}
