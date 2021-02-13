import React from 'react'

const Cars=({cars})=>{
    
    return(
        <table className="responsive-table">
        <thead>
          <tr>
              <th>Make Car</th>
              <th>User Id</th>
          </tr>
        </thead>
        <tbody>
            {cars.map((car , index)=>(
                    <tr key={index}>
                    <td>{car.make}</td>
                    <td>{car.UserID}</td>
                    </tr>
            ))}
        </tbody>
      </table>
    )
   
}


export default Cars