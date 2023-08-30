import Ticket from "../model/ticketModel.js"

export const getTickets = async (req, res) => {
    const tickets = await Ticket.find()
    res.status(200).json(tickets)
}
export const postTickets = async (req, res) => {

    const { title, description, contact, status } = req.body
    const ticket = await Ticket.create({
        title,
        description,
        contact,
        status
    })
    res.status(200).json(ticket)
}
export const UpdateTickets = async (req, res) => {
    res.status(200).json({
        message: `Update ticket ${req.params.id}`
    })
}