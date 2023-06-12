/* eslint-disable react/prop-types */
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../HOC'

const ServiceCard = (props) => {
  const { title, icon, index } = props

  return (
    <Tilt 
    options={{
      max: 45,
      scale: 1,
      speed: 450
    }} 
      className="xs:w-[250px] w-full"
    >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Labore, magni consequatur recusandae possimus, alias suscipit error soluta vel provident similique dolor, consequuntur dolores voluptatem?
        Earum non perspiciatis delectus voluptas quos?
        Magni, saepe fugiat architecto deleniti labore consectetur.
        Quisquam, ea error accusantium provident dolorum exercitationem iure delectus commodi?
        Quis reprehenderit harum nesciunt accusantium corrupti.
        Consectetur ipsam maxime delectus tenetur cupiditate quibusdam?
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, idx) => (
          <ServiceCard key={service.title} index={idx} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");