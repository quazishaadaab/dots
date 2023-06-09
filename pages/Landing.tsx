import Image from 'next/image'
import React from 'react'


import room from "../public/room.png"
import dot from "../public/dot.png"
import Slider from '../components/Slider'
import { Button, Grid } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import Login from './login/Login'

function Landing() {


    let hello ; 

    return (


    //     <div className=" h-[70%] w-[40%] ml-[55%] mt-16 pt-5 ">


    // </div>


        <div className='h-full w-full '>
<div className=" h-[15%] w-full p-3 rounded-3x flex relative ml-20">

{/* header */}

<Image
      src="/dots.png"
      alt="Picture of the author"
      width={150}
      height={250}
      className=''
      objectFit='contain'
    />

<div className="mt-4 ml-3 "><Text  size={20}>features</Text></div>
<div className="mt-4 ml-3"><Text  size={20}>pricing</Text></div>
<div className="mt-4 ml-3"><Text  size={20}>demo</Text></div>

 {/* landing page */}

<div className="ml-[80%] mt-5  absolute "> 


<Button shadow size="lg" color="gradient" auto onClick={()=>{location.href = "/login/Login";}}>
          Get Started
        </Button></div>

</div>

           <div className="bg-gray-100 flex w-full h-[85%] pt-32  gap-x-8 ">





            <div className="h-64  w-[50%] ml-8 mt-30 ml-32">
                    <h1 className='text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-[700] mb-8 tracking-tighter  '> People analytics on demand</h1>

                    {/* <div className="text-lg text-left font-[200]">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

                </div> */}
                                 <div className="text-2xl  text-left font-[200]">A people analytics tool that measures peer skills, makes capabilities transparent, and ranks strengths/weaknessses.</div>

                </div> 


                <div className='h-[80%] w-[70%]  mt-30 ml-8 mr-8 '>
                    <Image src={room} layout='responsive' objectFit='contain' className='rounded-3xl' />

                </div>
               

            </div>




            <div className=" bg-gray-200 flex w-full h-full pl-16  ">


                <div className="h-64 w-[50%]    ml-8 mt-32 ">
                    <div className='text-5xl text-black font-[700] mb-8 tracking-tighter'>Post live "dots" to measure team member skills and attributes</div>

                    <div className="text-xl font-[200] text-gray-700   tracking-tight">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

                </div>




                <div className='h-full w-[50%]  rounded-3xl p-16 pt-24'>
                    <img src="dot.png" className='rounded-3xl'></img>
                </div>


            </div>



            <div className="flex w-full h-full pr-8 bg-gray-100">


               




                <div className='h-full w-[50%]  rounded-3xl px-3 pt-48'>
                    <img src="widget.png" className='rounded-3xl'></img>
                </div>


                <div className="h-64 w-[50%]  mt-32">
                    <div className='text-black font-[700] text-5xl  tracking-tighter  mb-8 px-10'>All dots get averaged and showcased in your dashboard for you and your team members to see.</div>

                    <div className="text-xl font-[200] text-gray-700   tracking-tight px-8 ">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

                </div>

            </div>



            <div className=" bg-gray-200 flex w-full pl-32 h-full pl-16">

            <div className="h-64 w-[50%]    ml-8 mt-32">
                    <div className='text-5xl  tracking-tighter w-full text-black font-[700] mb-8 '>Leverage features that let you visualize your ratings/dots through radar charts. View your total dots collected </div>

                    <div className="text-xl font-[200] text-gray-700   tracking-tight">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

            </div>



                <div className=' mt-32 ml-32 h-auto w-[50%] '>
                <Slider/>

                </div>



            </div>



            <div className=" flex w-full h-full px-28">

          
                <div className='h-[40%] w-[40%] mt-32 ml-5  '>
                      <img src='dashboard.png' className=' rounded-tr-3xl rounded-tl-3xl'></img>
                     <img src='friends.png' className='rounded-b-3xl'></img>
                </div>


                <div className="h-64 w-[50%]    ml-8 mt-32 ">
                    <div className='text-5xl  tracking-tighter text-black font-[700] mb-8  '>All analytics about you and your team are showcased in a feature rich,modern, and responsive dashboard </div>

                    <div className="text-xl font-[200] text-gray-700   tracking-tight">The DotCollector is the best people analytics tool designed for teams to get a clear,transparent measure of their peer's skills and abilities.
                        The DotCollector does this by leveraging a 2-D grid where teams place "dots" on an attribute/skill. The dots place a numerical value from 1-10 on a particular skill of the member.
                        These dots are then processed by algorithims to give the best picture of a candidates/team members skills/attributes.</div>

                </div>

               

            </div>

        </div>



    )
}

export default Landing


