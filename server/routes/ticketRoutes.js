import express from 'express'
import { getTickets, postTickets, UpdateTickets } from '../controllers/ticketController.js'
const router = express.Router()

//Get all tickets
router.get('/', getTickets)

//Create new ticket
router.post('/', postTickets)

// Update ticket
router.put('/:id', UpdateTickets)

export default router