"use client"
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { Loader2, MessageSquare } from "lucide-react";
import { Messages } from "@prisma/client";
import { useUser } from "@clerk/nextjs";
import { pusherClient } from "@/lib/pusher";
import { Skeleton } from "./ui/skeleton";

export default function Messages({ chatId }: { chatId: string }) {
  const [messages,setData]=useState<Messages[]>()
  const messageEndRef = useRef<HTMLInputElement>(null);
  const[loading,setLoading]=useState(false)
  useEffect(() => {
    var channel=pusherClient.subscribe("my-channel")
    channel.bind("my-event",function(data:any){
      //@ts-ignore
      setData((prev)=>[...prev,data])
    })
   


    return () => {
      pusherClient.unsubscribe("my-channel");
    };
  }, []);

  async function getMessages(){
    try {
      setLoading(true)
      const response =await fetch(`/api/chat/${chatId}/message`)
      const data=await response.json();
      setData(data.message)
      
    } catch (error:any) {
      throw new Error(error.message)
      
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    getMessages();

  },[messages])
  const { user} = useUser();
  if(!user){
    return null;

  }
  const userId=user.id
 

 

  

  
  return (
    <>
    <div className="flex max-h-[clac(100vh-3.5rem-7rem)] border-zinc-200 flex-1 flex-col-reverse gap-4 p-3 overflow-y-auto crollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch  ">
      {messages && messages.length > 0 ? (
        messages.map((message, i) => {
          const isNextMessageSamePerson =
            (messages[i - 1]?.senderId === userId) ===
            (messages[i]?.senderId === userId);
          if (i === messages.length - 1) {
            return (
              <Message
                message={message}
                isNextMessageSamePerson={isNextMessageSamePerson}
                key={message.id}
              />
            );
          } else {
            return (
              <Message
                message={message}
                isNextMessageSamePerson={isNextMessageSamePerson}
                key={message.id}
              />
            );
          }
        })
      ) :  !loading ? (
        <div className='w-full flex flex-col gap-2'>
          <Skeleton className='h-16' />
          <Skeleton className='h-16' />
          <Skeleton className='h-16' />
          <Skeleton className='h-16' />
        </div>
      ) : (
        <div className='flex-1 flex flex-col items-center justify-center gap-2'>
        
          <h3 className='font-semibold text-xl'>
            <Loader2 className="animate-spin text-purple-500 "/>
          </h3>
          <p className='text-zinc-500 text-sm'>
            Breaking the language barier 
          </p>
        </div>
      )}
      
    </div>
    <div ref={messageEndRef}/></>
  );
}
