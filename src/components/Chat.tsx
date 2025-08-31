/* =======================================================
 *
 * Created by anele on 31/08/2025.
 *
 * @anele_ace
 *
 * =======================================================
*/

import { useState } from "react"
import { Message, } from "../interface"
import { FormInputs } from "../typings"
import { AppDatabase } from "../lib/firebase"
import { collection, addDoc } from "firebase/firestore"
import { useForm, SubmitHandler } from "react-hook-form"
import { Textarea, Stack, Button, Card } from "@chakra-ui/react"

const Chat = ({ user }: { user: string }) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormInputs>()

    const onSubmitMessage: SubmitHandler<FormInputs> = async (data) => {
        console.log(data)
        await addDoc(collection(AppDatabase, "messages"), {
            user,
            text: data.messageTxt,
            timestamp: Date.now(),
        })
    }

    return (
        <Stack w={"100%"}>
            <Card.Root width="100%" variant={'elevated'} minHeight={'300px'}>

                <Card.Body gap={"2"}>
                        <Textarea color={"black"} defaultValue=""
                                {...register("messageTxt")} placeholder="Type a message..." >
                        </Textarea>

                    </Card.Body>

                <Card.Footer justifyContent="flex-end">
                    <Button
                        onClick={handleSubmit(onSubmitMessage)}
                    >Send Message</Button>
                </Card.Footer>
            </Card.Root>
        </Stack>
    )
}

export default Chat
