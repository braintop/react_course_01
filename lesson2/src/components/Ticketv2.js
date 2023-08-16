import "./Ticketv2.css";
export default function Ticketv2({ ticket }) {
    const { name, destination, gender, seat } = ticket;
    return (
        <div className="container">
            <h1>Ticket v2 Details</h1>
            <div className="details">
                <p>Name:{name}</p>
                <p>Destination:{destination}</p>
                <p>Gender:{gender}</p>
                <p>seat:{seat}</p>
            </div>
        </div>
    );
}
