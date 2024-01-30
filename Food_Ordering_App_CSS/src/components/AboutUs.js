import User from "./User";
import UserClass from "./UserClass";

const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
            <User name={"Praveen Chandana Function"} location={"Hyderabad"} />
            <UserClass name={"Praveen Chandana Class"} location={"Ramachandrapuram"} />
        </div>
    );
};

export default AboutUs;