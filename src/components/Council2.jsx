import React from 'react'
import sabranga from './sabranga.jpg'
import Avyakt from './Avyakt.jpg'
import subhayan from './subhayan.jpg'
const Council2 = () => {
  return (
    <div>
      <p className='text-5xl font-[900] text-[#d9b577] text-center p-10 border-b-[1px]'>United Nations Human Rights Council</p>
            <div className='flex items-center p-5 justify-between text-5xl font-[400] text-[#d9b577]'>
                <p className='relative left-[330px]'>Executive Board</p>
                <p className='relative right-[130px]'>Secretriat</p>
            </div>
            <div className='flex items-center justify-around pb-5'>
                <img className='w-[400px] h-[400px]' src={sabranga} alt="" /><img className='w-[400px] h-[400px]' src={Avyakt} alt="" />
                <img className='w-[400px] h-[400px]' src={subhayan} alt="" />
            </div>
            <div className='flex flex-col items-center gap-5 text-[#d9b577] '>
                <p className='text-5xl font-[400]'>Agenda</p>
                <i className='text-[28px] font-[400]'>Deliberation on the rights of individuals of the LGBTQIA + Community with special emphasis on Islamic States </i>
                <p className='text-[40px] font-[500]'>What & How</p>
                <p className='text-[16px] font-[400] w-[85%] pb-5'>The United Nations Human Rights Council (UNHRC) is a body within the United Nations General Assembly that is responsible for promoting and protecting human rights around the world. The UNHRC is made up of 47 member states, which are elected by the General Assembly for a three-year term. The UNHRC is headquartered in Geneva, Switzerland, and meets three times a year for regular sessions, with additional special sessions as needed.At the Model United Nations (MUN), the UNHRC Committee is a simulated version of the real UNHRC, in which participants take on the role of delegates from different countries and work to address various human rights issues. In the UNHRC Committee at MUN, delegates have the opportunity to discuss, debate, and negotiate solutions to pressing human rights challenges facing the international community.One of the main functions of the UNHRC Committee at MUN is to consider and adopt resolutions that address human rights issues around the world. Delegates must work together to draft resolutions that reflect the positions of their respective countries and that are acceptable to a wide range of delegations. In addition to adopting resolutions, the UNHRC Committee at MUN may also engage in discussions with guest speakers, such as human rights experts or representatives from NGOs, in order to learn more about human rights challenges and possible solutions.</p>
                <div className='border border-white w-full'></div>
            </div>
    </div>
  )
}

export default Council2
