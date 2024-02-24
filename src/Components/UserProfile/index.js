import "./index.css";
const UserProfile=(props)=>{
    const {userDetails}=props
    const { imgUrl, name, role}=userDetails
    return (
            <li className="card-container">
            <img src={imgUrl} alt="Profile" className="avatar" />
            <div>
            <h1 className="name-container">{name}</h1>
            <p className="role-container">{role}</p>
            </div>
            </li>
    )
}

export default UserProfile;