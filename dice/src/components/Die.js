import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import {randomNumber} from '../lib'

export default function Die(props) {
    
    let [roll,setRoll] = useState(0)
    
    function rollDie () {
        setRoll(randomNumber(1,props.sides))
    }

    React.useEffect(rollDie,[])
    
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{`${props.sides}-Sided Die`}</Card.Title>
                    <Card.Text>{`${roll}`}</Card.Text>
                    <Button onClick={rollDie} variant="outline-dark">Roll</Button>
                </Card.Body>
            </Card>
        </div>
    )
}