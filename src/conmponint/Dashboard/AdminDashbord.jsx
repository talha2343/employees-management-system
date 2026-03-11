import Header from '../chailds/Header'
import CreateTask from "../chailds/CreateTask";
import AllTask from '../chailds/AllTask';

const AdminDashbord = (props) => {
    return (
        <div className='min-h-screen w-full py-20 bg-gray-950 flex flex-col text-white  items-center justify-evenly'>
            <div className='bg-gray-900 w-4/5 rounded-2xl p-5' >
                <Header changeUser={props.changeUser} />
                <CreateTask />
            </div>
                <AllTask />
        </div>
    )
}

export default AdminDashbord
