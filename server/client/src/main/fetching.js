import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';

function Fetching() {
    const [value,setValue] = useState([''])
    const getData =  ()=>{
     fetch('/api/viewsubscribers')
    .then((res)=>
        res.json()
    ).then((result)=>{
        //console.log(result);
        setValue(result)
    })
    //console.warn(value);
}
    useEffect(()=>{
         getData();
       },[])    


    //    fetch('/id',{
    //     method:'DELETE'
    //  }).then((respon)=>{
    //         respon.json()
    //   .then((resp)=>{
    //     console.log(resp)
    //    })
    //      getData();
    // })
//



    return (
    <div className='fetching'>
    <div className='table'>
    <Table striped bordered hover variant="dark">
        <tbody>
            <tr>
            <td className='table-heading'>Name</td>
            <td className='table-heading'>Subscribed Channel</td>
            <td className='table-heading'>Date</td>
            </tr>
            {
              value.map((item,id)=>
                <tr key={id}>
                <td className='item-name'>{item.name}</td>
                <td>{item.subscribedChannel}</td>
                <td>{item.subscribedDate}</td>
                </tr>
                )
            }
        </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Fetching