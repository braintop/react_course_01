import "./Ticket.css";
export default function Ticket(props) {
    return (
        <div className="container">
            <h1>Ticket Details</h1>
            <div className="details">
                <p>Name:{props.name}</p>
                <p>Destination:{props.destination}</p>
                <p>Gender:{props.gender}</p>
                <p>seat:{props.seat}</p>
            </div>
        </div>
    );
}
