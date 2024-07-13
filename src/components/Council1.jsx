import React from 'react'
import Aryan from './Aryan.jpg'
import Vardhan from './Vardhan.jpg'
import Madhavi from './Madhavi.jpg'

const Council1 = () => {
    return (
        <div>
            <p className='text-5xl font-[900] text-[#d9b577] text-center p-10 border-b-[1px]'>United Nations Security Council</p>
            <div className='flex items-center p-5 justify-between text-5xl font-[400] text-[#d9b577]'>
                <p className='relative left-[330px]'>Executive Board</p>
                <p className='relative right-[130px]'>Secretriat</p>
            </div>
            <div className='flex items-center justify-around pb-5'>
                <img className='w-[400px] h-[400px]' src={Aryan} alt="" /><img className='w-[400px] h-[400px]' src={Vardhan} alt="" />
                <img className='w-[400px] h-[400px]' src={Madhavi} alt="" />
            </div>
            <div className='flex flex-col items-center gap-5 text-[#d9b577] '>
                <p className='text-5xl font-[400]'>Agenda</p>
                <i className='text-[28px] font-[400]'> Addressing the proliferation of armed militias in destabalized countries </i>
                <p className='text-[40px] font-[500]'>What & How</p>
                <p className='text-[16px] font-[400] w-[85%] pb-5'>The United Nations Security Council (UNSC) is a committee at Model United Nations (MUN) conferences that simulates the real-life UNSC, which is one of the six main organs of the United Nations (UN). The UNSC is responsible for maintaining international peace and security, and it has the authority to take a wide range of actions, including imposing economic sanctions, authorizing the use of force, and establishing peacekeeping missions. At a MUN conference, the UNSC committee is made up of delegations from different countries, and each delegation represents a different member of the real-life UNSC. The delegations work together to address issues related to international peace and security, and they use the rules and procedures of the real-life UNSC as a guide. One of the main tasks of the UNSC committee at a MUN conference is to discuss and debate current global issues and come up with solutions to address them. This can involve researching and writing resolutions, negotiating with other delegations, and presenting and defending their positions.</p>
                <div className='border border-white w-full'></div>
            </div>
        </div>
    )
}

export default Council1
