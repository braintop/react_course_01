import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Ticket from "./components/Ticket";

function App() {
    //part 1 - declare vars, let , state
    const user = {
        firstname: "Oren", //s
        lastname: "Zvi",
        city: "Tel aviv",
        addrees: "orange",
        phone: "123456",
    };
    const tickets = [
        { name: "oren", destination: "🇺🇸", seat: "14A", gender: "Mr" },
        { name: "orna", destination: "🇩🇪", seat: "10B", gender: "Mrs" },
        { name: "dana", destination: "🇮🇱", seat: "9B", gender: "Mrs" },
        { name: "david", destination: "🇹🇩", seat: "3B", gender: "Mrs" },
        { name: "shosha", destination: "🇹🇷", seat: "2B", gender: "Mrs" },
        { name: "orna", destination: "🇺🇸", seat: "14B", gender: "Mrs" },
    ];

    const { firstname, lastname } = user;
    console.log(firstname);
    //part 2 - functions effects
    function fullName() {
        return user.firstname + " " + user.lastname;
    }
    // css on file :margin-left: 10px;
    //camelCase
    const myPassengers = tickets.map((t) => {
        return (
            <div className="myTicket">
                <Ticket ticket={t} />
            </div>
        );
    });
    const myPassengers2 = tickets.map((t) => {
        return (
            <div style={{ marginLeft: "40px", marginBottom: "20px" }}>
                <Ticket ticket={t} />
            </div>
        );
    });

    //reyrun one line
    const myPassengers3 = tickets.map((t) => <Ticket ticket={t} />);
    //return more than one line
    const myPassengers4 = tickets.map((t) => {
        return (
            <div>
                <h2>We lovw zvi</h2>
                <p>example</p>
                <Ticket ticket={t} />
            </div>
        );
    });

    //part 3 - jsx
    return (
        <div className="container">
            {/* <Nav firstname={user.firstname} lastname={user.lastname} /> */}
            {/* <Nav user={user} /> */}

            <h1>Good morning</h1>
            <p>Hello {fullName()}</p>
            <h2>Tickets</h2>
            {/* <Ticket ticket={tickets[0]} />
            <Ticket ticket={tickets[1]} /> */}
            {myPassengers}
        </div>
    );
}

export default App;
