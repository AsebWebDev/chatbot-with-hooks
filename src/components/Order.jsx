import React, { useState, useEffect } from 'react'
import { Card, Icon, Dimmer, Loader} from 'semantic-ui-react'
import parser from 'xml2json-light';
import axios from 'axios'
import Item from './Item'
import ShippingStatus from './ShippingStatus';

function Order (props) {
    let [shippingData, setShippingData] = useState(null);
    let [order] = useState(props.order)

    useEffect(() => {
        if(order.status === "shipped") {
            axios.post('https://demo7609961.mockable.io/dhl/status/?'+order.dhl_tracking_id, { 
            }).then(result => {
                let json = parser.xml2json(result.data);
                setShippingData(json)
            }).catch(err => {
                console.log(err)
            })
        }
    });

    return (
        <div className="order">
            <Card>
                <Card.Content header={"Order-ID: " + order.order_id + " - " + order.status.toUpperCase()} />
                <Card.Content extra>
                    <p className="align-left"><Icon name='cart' />Ordered: {order.date}</p>
                </Card.Content>
                <Card.Content description={order.items.map(item => <Item key={item.product_id} item={item}/>)} />
                <Card.Content extra>
                    <p className="tracking"><Icon name='truck' />{"DHL-Tracking-ID: " + order.dhl_tracking_id}</p>
                    <p className="tracking"><b>{order.status.toUpperCase()}</b></p>
                    {(shippingData)
                    ? <ShippingStatus status={shippingData.shipmentStatus}/>
                    : (order.status === "shipped")
                        ?   <Dimmer active>
                                <Loader inverted>Loading</Loader>
                            </Dimmer>
                        :   <p>Not shipped yet</p>
                    }
                </Card.Content>
            </Card>
        </div>
    )
}

export default Order
