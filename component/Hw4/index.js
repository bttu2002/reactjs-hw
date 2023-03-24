import { Input } from "antd";
import { useState } from "react";

const Hw4 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "firstName") {
            setFirstName(value);
        }
        else if (name === "lastName") {
            setLastName(value);
        }
    };


    return (
        <div>
            <label>

                <Input placeholder="First Name" name="firstName" onChange={onChange} />
            </label>
            <label>

                <Input placeholder="Last Name" name="lastName" onChange={onChange} />
            </label>
            {`==> Full Name: ${firstName} ${lastName}`}
        </div>
    );
}
export default Hw4;