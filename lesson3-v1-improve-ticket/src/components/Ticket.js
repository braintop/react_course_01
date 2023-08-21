import "./Ticket.css";
export default function Ticket({ ticket }) {
    if (!ticket) {
        return <div>no ticket ⧲</div>;
    }
    const { name, destination, gender, seat } = ticket;
    return (
        <div className="ticketContainer">
            <h1 className="title">Ticket details </h1>
            <div className="filedsContainer">
                <p className="field">name:{name}</p>
                <p className="field">destination:{destination}</p>
                <p className="field">gender:{gender}</p>
                <p className="field">seat:{seat}</p>
            </div>
        </div>
    );
}
export function Ticket2(ticket) {
    return (
        <div>
            <p>hello ticket</p>
            <p>name3:{ticket.ticket.name}</p>
            <p>name2:{ticket.gender}</p>
        </div>
    );
}
export function Ticket3(ticket) {
    // ticket is props
    return (
        <div>
            <p>name3:{ticket.ticket.name}</p>
            <p>name3:{ticket.destination}</p>
            <p>name3:{ticket.gender}</p>
        </div>
    );
}
