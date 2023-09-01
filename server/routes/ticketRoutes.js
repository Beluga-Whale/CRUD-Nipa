import express from 'express'
import { getTickets, postTickets, UpdateTickets, TicketsFindById } from '../controllers/ticketController.js'
const router = express.Router()

//Get all tickets
router.get('/', getTickets)

router.get('/:id', TicketsFindById)

//Create new ticket
router.post('/', postTickets)

// Update ticket
router.put('/:id', UpdateTickets)

export default router