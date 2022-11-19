import AgoraUIKit from 'agora-react-uikit'
import React from 'react'
import './Agoravc.css'
const AgoraTester = () => {
    const rtcProps = {
        appId: 'd1d02309e215429ba7fd10364969cb8e',
        channel: 'test', // your agora channel
        // token: '95e18139a2f34937ba3dbb362d047cec' // use null or skip if using app in testing mode
      };
    return <div className='vc-agora'>
        <AgoraUIKit rtcProps={rtcProps} />
    </div>
}

export default AgoraTester