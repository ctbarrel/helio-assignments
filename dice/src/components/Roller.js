import React, { useState } from 'react'
import './Roller.css'

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import { makeDie } from '../lib'
import Die from './Die'

export default function Roller(props) {

    let [dice, setDice] = useState([])
    let [sides, setSides] = useState()

    function addDieOnClickHandler(event) {
        event.preventDefault()

        let copyDice = [...dice]
        copyDice.push(makeDie(sides))
        setDice(copyDice)
    }

    function sidesOnChangeHandler(event) {
        event.preventDefault()

        setSides(event.target.value)
    }

    return (

        <div>
            <h1>Dice Roller</h1>
            <h2>Add a New Die</h2>
            <InputGroup className="mb-3 makeDieField">
                <FormControl
                    placeholder="# of Sides"
                    aria-label="# of Sides"
                    aria-describedby="basic-addon2"
                    type="number"
                    onChange={sidesOnChangeHandler}
                    value={sides}
                />
                <InputGroup.Append>
                    <Button variant="outline-dark" onClick={addDieOnClickHandler}>Add</Button>
                </InputGroup.Append>
            </InputGroup>
            <br></br>
            {
                dice.map((die, index) => {
                    return (
                        <Die key={index} sides={die.sides}></Die>
                    )
                })
            }
        </div>
    )
}