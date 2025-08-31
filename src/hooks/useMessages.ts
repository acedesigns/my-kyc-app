/* =======================================================
 *
 * Created by anele on 01/09/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import { Message } from "../interface"
import { useEffect, useState } from "react"
import { AppDatabase } from "../lib/firebase"
import { collection, onSnapshot, DocumentData, QuerySnapshot, orderBy, query } from "firebase/firestore"

export function useMessages() {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const q = query(collection(AppDatabase, "messages"), orderBy("timestamp", "asc"));

        const unsub = onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
            const msgs: Message[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Message[];
            setMessages(msgs);
        });

        return () => unsub();
    }, []);

    return { messages };
}