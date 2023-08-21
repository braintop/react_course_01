import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Ticket from "./components/Ticket";
import Ticketv2 from "./components/Ticketv2";

const Tickets = [
    {
        name: "jhon", //
        destination: "🇷🇪",
        gender: "Mr",
        seat: "14A",
    },
    {
        name: "David",
        destination: "🇱🇰",
        gender: "Mr",
        seat: "14C",
    },
    {
        name: "Oran",
        destination: "🇱🇰",
        gender: "Mr",
        seat: "14B",
    },
];

function App() {
    //part 1 - vars , let , states ,
    const details = {
        firstname: "Oren",
        lastname: "brich",
        btns: 10,
    };

    //part 2 - function , effect
    function fullname() {
        return details.firstname + " " + details.lastname;
    }
    const myFullName = fullname();
    function NumberRangeChecker(num) {
        //● מתחת לגיל 50
        //50-100 ●  בין 50 ל 100
        //● מעל 100
        if (num > 0 && num <= 50) {
            return "מתחת לגיל 50";
        } else if (num > 50 && num <= 100) {
            return "בין 50 ל 100 ";
        } else if (num > 100) {
            return "מעל 100";
        }
        return "גיל לא מתאים";
    }
    console.log(Tickets[0]);
    //part 3 jsx
    return (
        <div>
            <Nav text="home" width="100" x="200" />

            <Ticketv2
                ticket={Tickets[0]} //{name: "jhon", destination: "🇷🇪", gender: "Mr",seat: "14A", }

                // name={Tickets[1].name}
                // destination={Tickets[1].destination}
                // gender={Tickets[1].gender}
                // seat={Tickets[1].seat}
            />
            <Ticket name="jhon" destination="🇺🇸" gender="Mr" seat="14A" />
            <Ticket destination="🇮🇱" gender="Mrs" seat="14B" />

            <h1>Hello world</h1>
            <p>My firstname is {details.firstname}</p>
            <p>My fullname is {fullname()}</p>
            <p>My fullname is {myFullName}</p>
            <p>{NumberRangeChecker(101)}</p>
        </div>
    );
}

export default App;
