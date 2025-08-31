/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import { useState, useEffect } from "react"
import { AppDatabase } from "../lib/firebase"
import { ref, push, onValue } from "firebase/database"

const Chat = ({ user }) => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        const messagesRef = ref( AppDatabase, "messages");
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setMessages(Object.values(data));
            }
        });
    }, []);

    const sendMessage = () => {
        const messagesRef = ref(AppDatabase, "messages");
        push(messagesRef, { user, text, timestamp: Date.now() });
        setText("");
    };

    return (
        <div>
            <div style={{ height: "300px", overflowY: "auto" }}>
                {messages.map((msg, i) => (
                    <p key={i}><b>{msg.user}</b>: {msg.text}</p>
                ))}
            </div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default Chat;