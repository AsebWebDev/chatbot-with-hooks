import React, { useState } from 'react'
import { Comment } from 'semantic-ui-react'

function Item (props) {
        let [item] = useState(props.item)
        return (
            <div>
                <Comment.Group>
                    <Comment>
                        <Comment.Content>
                            <Comment.Author as='a'>{item.qty} x {item.name}</Comment.Author>
                            <Comment.Metadata>
                            <div></div>
                            </Comment.Metadata>
                            <Comment.Text><b>{item.price}€</b></Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Product-ID: {item.product_id}</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            </div>
        )
}

export default Item
