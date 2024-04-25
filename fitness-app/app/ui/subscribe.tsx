import { useState } from "react";

export default function Subscribe() {
    const [email, setEmail] = useState('')
    const [clicked, setClicked] = useState(false)

    return (
        <form 
            action=""
        >
            <input 
            className=""
            type="email"
            required
            placeholder=""
            onChange={}
            />
            <button
            type="submit"
            className=""

            >
                Subscribe
            </button>
        </form>
    );
}