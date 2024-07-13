import { useState, useEffect, useRef } from 'react'
import './App.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { BsBrightnessHighFill } from "react-icons/bs";
import Council1 from './components/Council1';
import Council2 from './components/Council2';
import Council3 from './components/Council3';
import Council4 from './components/Council4';
import UNSC from './assets/UNSC.jpg'
import UNHRC from './assets/UNHRC.jpg'
import ESC from './assets/ESC.jpg'
import DISC from './assets/DISC.jpg'
import LOGO from './assets/LOGO.png'

function App() {
  const [show1, setshow1] = useState(true)
  const [show2, setshow2] = useState(true)
  const [show3, setshow3] = useState(true)
  const [show4, setshow4] = useState(true)
  const [s, sets] = useState(true)
  const [s1, sets1] = useState(false)
  const [s2, sets2] = useState(false)
  const [s3, sets3] = useState(false)
  const [dark, setdark] = useState(true)
  const a = useRef()
  const b = useRef()

  useEffect(() => {
    b.current.style.color="white"
  },[])
  

  const handleMouse1 = () => {
    setshow1(!show1)
  }
  const handleMouse2 = () => {
    setshow2(!show2)
  }
  const handleMouse3 = () => {
    setshow3(!show3)
  }
  const handleMouse4 = () => {
    setshow4(!show4)
  }

  return (
    <>

      <nav className='flex justify-around items-center'>
        <img className='a w-[110px] h-[110px] cursor-pointer' src={LOGO} alt="" />
        <ul ref={a} className='text-lg text-white flex items-center justify-around w-[70%] '>
          <li onClick={() => {
            sets(true)
          }
          } className='cursor-pointer hover:text-red-800 hover:text-xl'>Home</li>
          <li onClick={() => {
            sets(false)
            sets1(true)
            sets2(false)
            sets3(false)
          }} className='cursor-pointer hover:text-red-800 hover:text-xl'>UNS Council</li>
          <li onClick={() => {
            sets(false)
            sets2(true)
            sets3(false)
            sets1(false)
          }} className='cursor-pointer hover:text-red-800 hover:text-xl'>UNHR Council</li>
          <li onClick={() => {
            sets(false)
            sets3(true)
            sets1(false)
            sets2(false)
          }} className='cursor-pointer hover:text-red-800 hover:text-xl'>ES Council</li>
          <li onClick={() => {
            sets(false)
            sets3(false)
          }} className='cursor-pointer hover:text-red-800 hover:text-xl'>DIS Committee</li>
          {dark?<li onClick={() => {
            setdark(false)
            document.body.style.backgroundColor="#e2dfef"
            a.current.style.color="black"
            b.current.style.color="black"
          }
          } className='cursor-pointer text-3xl'><CiDark /></li>:
          <li onClick={() => {
            document.body.style.backgroundColor="#040813"
            a.current.style.color="white"
            b.current.style.color="white"
            setdark(true)
          }
          } className='cursor-pointer text-3xl'><BsBrightnessHighFill /></li>}
        </ul>
      </nav>
      {s ? <main>
        <div className='flex text-[#d9b577] justify-around items-center p-[80px]'>
          <img className='w-[320px] h-[320px]' src={LOGO} alt="" />
          <div className='flex flex-col gap-5'>
            <p className='font-[700] text-[96px]'>G-MUN IITKGP</p>
            <i className='font-[700] text-[36px]'>Be the Change You Wish To See in the World</i>
          </div>
        </div>
        <div className='text-[#d9b577] p-[75px]'>
          <p className='text-center font-[400] text-[48px] pb-14'>Committees</p>

          <div className='flex flex-wrap gap-12 cards'>
            {show1 ? <img onMouseEnter={handleMouse1} className='w-[650px] m-auto h-[370px]' src={UNSC} alt="" /> : <div onMouseLeave={handleMouse1} className='flex text-[#040813] bg-[#e8cd86] flex-col justify-center gap-2 items-center w-[650px] h-[370px] text-center p-14 '>
              <p className='font-[700] text-[20px]'>
                UNSC (The United Nations Security Council) is the most powerful organ of the United Nations. It is charged with maintaining peace and security between nations. The Security Council has the power to make decisions that member governments must carry out under the United Nations Charter. The decisions of the Council are known as UN Security Council Resolutions.
              </p>
              <p className='font-[700] text-[20px]'>For detailed info please click on the icon below</p>
              <div onClick={() => {
                sets(false)
                sets1(true)
                sets2(false)
                sets3(false)
                setshow1(true)
              }
              } className=' cursor-pointer hover:text-red-900'><FaExternalLinkAlt /></div>
            </div>}

            {show2 ? <img onMouseEnter={handleMouse2} className='w-[650px] m-auto h-[370px]' src={UNHRC} alt="" /> : <div onMouseLeave={handleMouse2} className='text-[#040813] bg-[#e8cd86] flex-col justify-center gap-2 items-center w-[650px] h-[370px] text-center p-14 flex'>
              <p className='font-[700] text-[20px]'>
                UNHRC (The United Nations Human Right Council) withholds the responsibility to ensure and strengthen the promotion and protection of human rights on a global scale, as well as to address cases of human rights infringements and make recommendations upon them. It was established in 2006 with 47 member states.
              </p>
              <p className='font-[700] text-[20px]'>For detailed info please click on the icon below</p>
              <div onClick={() => {
                sets(false)
                sets2(true)
                sets3(false)
                sets1(false)
                setshow2(true)
              }
              } className='cursor-pointer hover:text-red-900'><FaExternalLinkAlt /></div>
            </div>
            }
            {show3 ? <img onMouseEnter={handleMouse3} className='w-[650px] m-auto h-[370px]' src={ESC} alt="" />
              : <div onMouseLeave={handleMouse3} className='text-[#040813] bg-[#e8cd86] flex-col justify-center gap-2 items-center w-[650px] h-[370px] text-center p-14 flex'>
                <p className='font-[700] text-[20px]'>
                  ECOSOC (The United Nations Economic and Social Council) is dedicated to establishing global frameworks that promote a higher standard of living. Being established by the United Nations Charter in 1945 and consisting of 54 member states, ECOSOC is one of the six principal organs of the United Nations. The committee is responsible for finding solutions to various international economic, social, and environmental issues. Its role in encouraging the protection of human rights and fundamental freedoms was also remarkable.
                </p>
                <p className='font-[700] text-[20px]'>For detailed info please click on the icon below</p>
                <div onClick={() => {
                  sets(false)
                  sets3(true)
                  sets1(false)
                  sets2(false)
                  setshow3(true)
                }
                } className='cursor-pointer hover:text-red-900'><FaExternalLinkAlt /></div>
              </div>
            }
            {show4 ?
              <img onMouseEnter={handleMouse4} className='w-[650px] m-auto h-[370px]' src={DISC} alt="" /> :
              <div onMouseLeave={handleMouse4} className='text-[#040813] bg-[#e8cd86] flex-col justify-center gap-2 items-center w-[650px] h-[370px] text-center p-14 flex'>
                <p className='font-[700] text-[20px]'>
                  DISEC (The United Nations Disarmament and International Security Committee) was created as the first of the Main Committees in the General Assembly when the charter of the United Nations was signed in 1945. The purpose of the committee in the General Assembly is to establish ‘general principles of cooperation in the maintenance of international peace and security, including the principles governing disarmament and the regulation of armaments, and also to give “recommendations with regard to such principles to the Members or to the Security Council.”

                </p>
                <p className='font-[700] text-[20px]'>For detailed info please click on the icon below</p>
                <div onClick={() => {
                  sets(false)
                  sets3(false)
                  setshow4(true)
                }
                } className='cursor-pointer hover:text-red-900'><FaExternalLinkAlt /></div>
                
              </div>
              
            }
          </div>
        </div>
        <div className='border border-white w-full'></div>
      </main> : s1 ? <Council1 /> : s2 ? <Council2 /> : s3 ? <Council3 /> : <Council4 />
      }
      <footer ref={b} className='flex justify-center items-center gap-24 py-8 '>
        <p className='text-[#d9b577] font-[400] text-[48px]'>Social Media Links :</p>
        <a target='_blank' className='text-4xl' href="https://www.facebook.com/people/Global-MUN-IIT-Kharagpur/100088188648912/?mibextid=ZbWKwL"><FaFacebookF /></a>
        <a target='_blank' className=' text-4xl' href="https://www.instagram.com/gmun.iitkgp/"><FaInstagram /></a>
        <a target='_blank' className=' text-4xl' href="https://x.com/name"><FaTwitter /></a>
      </footer>
    </>
  )
}

export default App
