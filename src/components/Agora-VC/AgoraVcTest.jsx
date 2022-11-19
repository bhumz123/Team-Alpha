import React, { useState } from 'react'
import AgoraUIKit from 'agora-react-uikit'
import './Agoravc.css'
const AgoraVcTest = () => {
    const rtcProps = { appId: 'd1d02309e215429ba7fd10364969cb8e', channel: 'test' }
    return <div className='vc-agora'>
        <AgoraUIKit rtcProps={rtcProps} />
    </div>
};

export default AgoraVcTest;