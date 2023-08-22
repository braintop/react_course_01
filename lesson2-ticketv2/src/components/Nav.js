export default function Nav({ user }) {
    const { firstname, lastname } = user;

    return (
        <div>
            {/* <p>num1:{props.firstname}</p>
            <p>num1:{props.lastname}</p>
            <p>I am nav</p> */}
            {firstname}
            {lastname}
        </div>
    );
}
