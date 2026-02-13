import React, { useState } from 'react'

const btnStyle={
      width: "80px", 
      height:"36px",
      padding:"5px 10px",
      border:"0.5px solid #ccc",
      textAlign:"center"
  }

function Valentine1() {
  const [isNoVisible,setIsNoVisible]=useState(true); 
  const [isNoFirst,setIsNoFirst]=useState(false); 
  const [msgIndex, setMsgIndex] = useState(-1);
  // const [message,setMessage]=useState('');

  const messages=["Oops… try again sweetheart 💖",
  "Sorry babe… I’m your only option now 😉"];

    const handleNoClick=(()=>{
      setMsgIndex(prev=>(prev < messages.length - 1 ? prev + 1 : prev));

      if(isNoVisible && !isNoFirst){
        setIsNoFirst(true)//move before yes
      }
      else{
        setIsNoVisible(false)//vanish completely
      }
    })
  
  return (
    <>
      <div style={{backgroundColor:"#fff0f3",
        display: "flex",flexDirection: "column",alignItems: "center",
        justifyContent: "center",height: "300px",border: "1px solid #ddd",
        borderRadius: "12px",width: "520px",margin: "50px auto",textAlign: "center"}}>

        <h1 style={{margin:"5px 0px"}}><i>Lithuuu ❤️,</i></h1>
        <h2 style={{margin:"0"}}><i>Will you be my Valentine?😜</i></h2>
        <h5 style={{margin:"2px 0 0 0"}}><i>(Warning: “No” isn’t an option… the system won’t accept it)</i></h5>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px"}}>
        {isNoVisible && isNoFirst && (<button onClick={()=>{handleNoClick()}}
                 style={{...btnStyle,backgroundColor:"#8bca84"}}>No😢</button>)}

          <button onClick={()=>{
            alert('Yayyy! Thank you, babeee ❤️ I made a tiny surprise for you — not something I bought, but something filled with my love 💕 Come home soon 😊')}} 
            style={{...btnStyle,backgroundColor:"#FF7F7F"}}>Yes😍</button>
            
            {isNoVisible && !isNoFirst && (
            <button
              onClick={()=>handleNoClick()}
              style={{...btnStyle,backgroundColor:"#8bca84"}}
              >
              No😢
            </button>
        )}        
         {msgIndex>=0 && (
          <p style={{color:"red", marginTop:"15px"}}>
            {messages[msgIndex]}
          </p>)}
        </div>
      </div>
    </>
  )
}

export default Valentine1