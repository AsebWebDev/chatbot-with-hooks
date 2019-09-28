import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import Order from './Order'

function DataPresentation (props) {
    let [data, setData] = useState(props.data)
    let firstname = data.customer.firstname;
    let lastname = data.customer.lastname;
    let email = data.customer.email;
    let orders = data.orders;

    useEffect(() => {
        setData(props.data);
    }, [props.data]);

    return (
        <div>
            <div className="top-info">
                <Card color="red">
                    <Card.Content>
                        <Card.Header content={firstname + ' ' + lastname} />
                        <Card.Meta content={email} />
                        <Card.Description content={'There are currently ' + orders.length + ' orders for you.'} />
                    </Card.Content>
                </Card>
            </div>
        
            <br></br>
            
            {(orders.length > 0) 
            ?   <div>
                    <div className="orders">
                        {orders.map(order => <Order key={order.order_id} order={order}/>)}
                    </div>
                </div>
            :   <div>There are currently no orders for you, {firstname} {lastname}.</div>
            }
        </div>
    )
}

export default DataPresentation