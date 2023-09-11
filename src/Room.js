import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams, useNavigate } from 'react-router-dom';

const Room = () => {
    const {roomID} = useParams();
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }
    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = 815585155;
        const serverSecret = "f4e7ce9a4dcdf78b849a2092419de58a";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), 'Vimal');
        // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy link',
            url: `http://localhost:3000/room/${roomID}`
            //  window.location.protocol + '//' + 
            //  window.location.host + window.location.pathname +
            //   '?roomID=' +
            //   roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        showRoomTimer: true
      });
    }
  return (
   <div>
     <div ref={myMeeting}></div>
     <div>
        <button className='btn1' onClick={handleBack}>Back</button>
        </div>
   </div>
  )
}

export default Room
