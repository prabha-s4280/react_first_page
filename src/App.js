import UserProfile from "./Components/UserProfile"
import "./App.css"

const userDetailsList=[
  {
    id:1,
    imgUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    name:"Person 1",
    role:"Developer"
  },
  {
    id:2,
    imgUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    name:"Person 2",
    role:"Tester"
  },
  {
    id:3,
    imgUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    name:"Person 3",
    role:" Software Developer",
  },
  {
    id:4,
    imgUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    name:"Person 4",
    role:"Hiring Executive",
  }
]

const App=()=>(
  <div>
    <h1 className="title">Users</h1>
    {userDetailsList.map((item)=>(
      <UserProfile userDetails={item} />
    ))}
  </div>
)
export default App;