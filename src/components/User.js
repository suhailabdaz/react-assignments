
const User=(props)=>{
    const {name,email}=props
   return(
    <div className="content-center items-center">
    <div className="bg-slate-600 mx-5 my-5 items-center w-64">
        <h1 className="font-extrabold">{name}</h1>
        <h2>{email}</h2>
    </div>
    </div>
   )
}

export default User