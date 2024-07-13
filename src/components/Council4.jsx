import React from 'react'
import adarsh from './adarsh.jpg'
import bhavika from './bhavika.jpg'
import chirag from './chirag.jpg'
const Council4 = () => {
  return (
    <div>
      <p className='text-5xl font-[900] text-[#d9b577] text-center p-10 border-b-[1px]'>Disarmament and International Security</p>
            <div className='flex items-center p-5 justify-between text-5xl font-[400] text-[#d9b577]'>
                <p className='relative left-[330px]'>Executive Board</p>
                <p className='relative right-[130px]'>Secretriat</p>
            </div>
            <div className='flex items-center justify-around pb-5'>
                <img className='w-[400px] h-[400px]' src={adarsh} alt="" /><img className='w-[400px] h-[400px]' src={bhavika} alt="" />
                <img className='w-[400px] h-[400px]' src={chirag} alt="" />
            </div>
            <div className='flex flex-col items-center gap-5 text-[#d9b577] '>
                <p className='text-5xl font-[400]'>Agenda</p>
                <i className='text-[28px] font-[400]'> Revising the treaty on prohibition of nuclear weapons with special emphasis on the review committee </i>
                <p className='text-[40px] font-[500]'>What & How</p>
                <p className='text-[16px] font-[400] w-[85%] pb-5'>The United Nations Disarmament and International Security Committee (DISEC) is one of the six main committees of the United Nations General Assembly, and is responsible for promoting international peace and security through disarmament and non-proliferation efforts. The DISEC is made up of all member states of the United Nations, and meets regularly throughout the year to discuss issues related to disarmament, arms control, and international security.At the Model United Nations (MUN), the DISEC Committee is a simulated version of the real DISEC, in which participants take on the role of delegates from different countries and work to address various issues related to disarmament and international security. In the DISEC Committee at MUN, delegates have the opportunity to discuss, debate, and negotiate solutions to pressing issues such as nuclear proliferation, arms trade, and regional conflicts. One of the main functions of the DISEC Committee at MUN is to consider and adopt resolutions that address disarmament and international security issues around the world. Delegates must work together to draft resolutions that reflect the positions of their respective countries and that are acceptable to a wide range of delegations. In addition to adopting resolutions, the DISEC Committee at MUN may also engage in discussions with guest speakers, such as experts in international relations or security, in order to learn more about the challenges and opportunities facing the international community.</p>
                <div className='border border-white w-full'></div>
            </div>
    </div>
  )
}

export default Council4
