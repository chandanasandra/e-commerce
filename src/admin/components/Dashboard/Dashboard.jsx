import OrderTable from '../Order/OrderTable';
import {orders} from '../../../data/orders';
const Dashboard = () => {
  return (
    <>
    <div>
      <h2 className='px-4 text-lg text-gray-600 font-medium text-center uppercase'>Orders</h2>
    </div>
    <OrderTable orders={orders}/>
    </>
  )
}

export default Dashboard;