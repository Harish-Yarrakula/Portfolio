import React from 'react'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import insta from '../assets/instagram.svg'

const Socialhandle = () => {
  return (
    <>
    <div className="social">
        <div className="row-cols-1">
            <div className="row">
                <div className="col">
                    <a href="https://www.linkedin.com/in/kusumaharish-yarrakula-8182b8306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><img src={linkedin} alt="linkedin" /></a>
                    <a href="https://github.com/Harish-Yarrakula" target='_blank'><img src={github} alt="github" /></a>
                    <a href="https://www.instagram.com/sunny_yadav_84_/profilecard/?igsh=endqeDd3dHdzanBj" target='_blank'><img src={insta} alt="instagram" /></a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Socialhandle