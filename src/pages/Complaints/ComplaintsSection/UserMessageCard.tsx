import React, {useEffect, useState} from "react";
import {Box, Grid, Typography} from "@mui/material";
// @ts-ignore
import userPhoto from "../../../assets/images/peoplePhoto.jpeg";
import {useNavigate} from "react-router-dom";
import OneUserMessage from "./OneUserMessage";
import {
    setOneUserMessageVisibility
} from "../../../redux/store/reducers/complaint/complaint.slice";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../redux/store";

interface IMessage {
    id: number,
    img: string,
    userName: string,
    statusDescription: string,
    time: string
}

const messages = [
    {
        id: 1,
        img: "",
        userName: "Marat",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    },
    {
        id: 2,
        img: "",
        userName: "Asel",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    },
    {
        id: 3,
        img: "",
        userName: "Asel",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    },
    {
        id: 4,
        img: "",
        userName: "Asel",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    },
    {
        id: 5,
        img: "",
        userName: "Asel",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    },
    {
        id: 6,
        img: "",
        userName: "Asel",
        statusDescription: "была в сети 1 час назад",
        time: "12:32"

    }
]

const UserMessageCard = React.memo(() => {

    const isHideOneMessage = useTypedSelector(state => state.complaint.isOneUserMessage)

    const navigate = useNavigate()
    const bottomRef = React.useRef<HTMLDivElement>(null);

    const [messageData, setMessageData] = useState<IMessage>()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setOneUserMessageVisibility(true))
    },[])



    const showMessagePageWithData = (message: IMessage) => {
        setMessageData(message)
        dispatch(setOneUserMessageVisibility(false))

    }

    const scrollToBottom = () => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

    };


    useEffect(() => {
        scrollToBottom()
    }, [])



    return (
        <>
            {
                !isHideOneMessage&&messageData ? <OneUserMessage message={messageData}/> :
                    <Box sx={{
                        backgroundColor: "primary.light",
                        overflowY: 'scroll',
                        scrollBehavior: 'smooth',
                        height: "94%"
                    }}>
                        {messages.map(message => {
                                if (isHideOneMessage) {

                                    return <Grid container key={message.id} sx={{border: "5px solid #fff", cursor:"pointer", '&:hover': {
                                            // border: "1px solid black",


                                        },}}
                                                 onClick={() => showMessagePageWithData(message)}>
                                        <Grid item xs={1.8}><img src={message.img ? message.img : userPhoto}
                                                                 alt="user avatar"
                                                                 style={{
                                                                     width: "60px",
                                                                     height: "60px",
                                                                     border: "10px solid #E4FFF9"
                                                                 }}
                                        /></Grid>
                                        <Grid item xs={9.2} sx={{padding: "10px 0px"}}>
                                            <Typography
                                                sx={{
                                                    fontSize: "20px",
                                                    fontWeight: "800",
                                                    marginTop: "5px"
                                                }}>{message.userName}</Typography>
                                            <Typography sx={{
                                                fontSize: "12px",
                                                fontWeight: "200",
                                                marginTop: "5px",
                                                color: "#B1B1B1"
                                            }}>{message.statusDescription}</Typography>
                                        </Grid>
                                        <Grid item xs={1} sx={{
                                            fontSize: "12px",
                                            fontWeight: "600",
                                            marginTop: "15px",
                                            color: "#999999"
                                        }}>{message.time}</Grid>

                                    </Grid>
                                }


                            }
                        )}
                        <div ref={bottomRef}></div>
                    </Box>
            }


        </>

    )
})

export default UserMessageCard