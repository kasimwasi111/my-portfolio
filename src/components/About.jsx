import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur libero dignissimos magnam nostrum dicta at dolore accusamus aliquid sed, totam cumque excepturi placeat recusandae iure exercitationem delectus voluptate fuga beatae hic officiis non iusto assumenda minima. Non, laudantium nostrum impedit sit nemo tenetur dicta libero consectetur maxime magnam perspiciatis excepturi!
            </p>
            <br/>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto necessitatibus adipisci rerum dolor deserunt cumque enim a temporibus incidunt! Maiores, voluptate quidem aliquam delectus cum dignissimos quo consequuntur quaerat.
            </p>
        </div>
    </div>
  )
}

export default About