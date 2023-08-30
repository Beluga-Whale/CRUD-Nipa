import Ticket from "../model/ticketModel.js"

export const getTickets = async (req, res) => {
    const tickets = await Ticket.find()
    res.status(200).json(tickets)
}
export const postTickets = async (req, res, next) => {
    try {

        const { title, description, contact, status } = req.body
        const ticket = await Ticket.create({
            title,
            description,
            contact,
            status
        })
        res.status(200).json(ticket)
    } catch (err) {
        next(err)
    }
}
export const UpdateTickets = async (req, res, next) => {
    try {
        const ticket = Ticket.findById(req.params.id)
        if (!ticket) {
            res.status(400)
            throw new Error("Ticket not found")

        }
        const updateTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.status(200).json(updateTicket)
    } catch (err) {
        next(err)
    }
}