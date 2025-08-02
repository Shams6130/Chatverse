import React, { useEffect, useRef } from "react";
import Smessage from "./Smessage";
import Loading from "../../components/Loading.jsx";
import useGetMessage from "../../context/useGetMessage.js";
import useGetSocketMessage from "../../context/useGetSocketMessage.js";
// import notificationSound from "../../assets/not.wav"; // apne mp3 ka path


function Message() {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage(); 
   const lastMsgRef = useRef();
  

  useEffect(() => {
    
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);

  return (
    <div className="min-h-[calc(92vh-8vh)] max-h-[calc(92vh-8vh)] overflow-y-auto scrollbar-hide">
      
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
            <Smessage message={message} />
          </div>
        ))
      )}

      {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[20%]">
            Say! Hi to start the conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Message;
