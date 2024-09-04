
export default function({employee}){
    const {name, email} = employee;
    return(
        <div className="box">
            <h4>Name: {name}</h4>
            <p>email: {email}</p>
        </div>
    )
}