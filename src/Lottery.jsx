import React from 'react'
import Ticket from './Ticket'
import { useState } from 'react';
import { genTicket } from './Helper';
import Button from './Button'

function Lottery({ n, win }) {
    let [ticket, setTicket] = useState([0,0,0]);

    function getTicket() {
        setTicket(genTicket(n));
    }

    let winer = win(ticket);

    return (
        <>
            <h3>Lottery Game</h3>
            <p style={{ color: "green" }}>{winer && "Congratulation you win!"}</p>
            <Ticket ticket={ticket} />
            <Button action={getTicket} />
        </>
    )
}

export default Lottery
