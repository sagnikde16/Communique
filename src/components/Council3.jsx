import React from 'react'
import Abhinav from './Abhinav.jpg'
import Shouvonik from './Shouvonik.jpg'
import agniva from './agniva.jpg'
const Council3 = () => {
  return (
    <div>
      <p className='text-5xl font-[900] text-[#d9b577] text-center p-10 border-b-[1px]'>Economic and Social Council</p>
            <div className='flex items-center p-5 justify-between text-5xl font-[400] text-[#d9b577]'>
                <p className='relative left-[330px]'>Executive Board</p>
                <p className='relative right-[130px]'>Secretriat</p>
            </div>
            <div className='flex items-center justify-around pb-5'>
                <img className='w-[400px] h-[400px]' src={Abhinav} alt="" /><img className='w-[400px] h-[400px]' src={Shouvonik} alt="" />
                <img className='w-[400px] h-[400px]' src={agniva} alt="" />
            </div>
            <div className='flex flex-col items-center gap-5 text-[#d9b577] '>
                <p className='text-5xl font-[400]'>Agenda</p>
                <i className='text-[28px] font-[400]'>Building Sustainable and Resilient Infrastructure to achieve sustainable developement goals </i>
                <p className='text-[40px] font-[500]'>What & How</p>
                <p className='text-[16px] font-[400] w-[85%] pb-5'>The United Nations Economic and Social Council (ECOSOC) is one of the six main organs of the United Nations, and is responsible for promoting international economic and social cooperation and development. It is made up of 54 member states, which are elected by the General Assembly for a three-year term. The ECOSOC meets annually in July for a four-week session, and also holds special sessions as needed.At the Model United Nations (MUN), the ECOSOC Committee is a simulated version of the real ECOSOC, in which participants take on the role of delegates from different countries and work to address various economic and social issues facing the international community. In the ECOSOC Committee at MUN, delegates have the opportunity to discuss, debate, and negotiate solutions to pressing issues such as poverty, inequality, and sustainable development.One of the main functions of the ECOSOC Committee at MUN is to consider and adopt resolutions that address economic and social issues around the world. Delegates must work together to draft resolutions that reflect the positions of their respective countries and that are acceptable to a wide range of delegations. In addition to adopting resolutions, the ECOSOC Committee at MUN may also engage in discussions with guest speakers, such as experts in economics or development, in order to learn more about the challenges and opportunities facing the international community.</p>
                <div className='border border-white w-full'></div>
            </div>
    </div>
  )
}

export default Council3
