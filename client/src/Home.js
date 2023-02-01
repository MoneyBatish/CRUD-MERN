import Data from "./Components/Data";
import Fields from "./Components/Fields";
function Home({users,setUsers}){
    return(
        <div style={{
            display:'flex',
            justifyContent:'center'
        }}>
            <Fields users={users} setUsers={setUsers}/>
            <Data users={users} setUsers={setUsers}/>
        </div>
        
    )
}

export default Home;