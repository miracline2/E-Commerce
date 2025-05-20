import { Component } from 'react'
import { HomePage } from '../../data/product'
import { motion, AnimatePresence } from 'framer-motion'

export default class Welcome extends Component {
  state = {
    currentImage: '',
    previousIndex: -1,
  }

  imageArray = [
    HomePage[0].Image1,
    HomePage[0].Image2,
    HomePage[0].Image3,
    HomePage[0].Image4,
    HomePage[0].Image5,
  ]
  intervalId: number | undefined

  componentDidMount() {
    this.shuffleImage()
    this.intervalId = setInterval(this.shuffleImage, 2000) 
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  shuffleImage = () => {
    let newIndex = Math.floor(Math.random() * this.imageArray.length)
    while (newIndex === this.state.previousIndex) {
      newIndex = Math.floor(Math.random() * this.imageArray.length)
    }

    this.setState({
      currentImage: this.imageArray[newIndex],
      previousIndex: newIndex,
    })
  }

  render() {
    const { description } = HomePage[0]
    const { currentImage } = this.state

    return (
      <div className="w-full md:h-screen flex flex-col md:flex-row items-center justify-between  mt-[5em] md:mt-[3.5%] p-2 md:p-6">
        <div className='flex justify-center items-center'>

        <p className="text-sm md:text-2xl text-gray-800 text-center md:ml-30 mb-6 max-w-4xl">
          {description}
        </p>
        </div>

        <div className=" flex ">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt="fashion"
               initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
              className=" w-[300px] h-[300px]  md:w-[600px] md:h-[600px] object-cover rounded-xl shadow-md"
            />
          </AnimatePresence>
        </div>
      </div>
    )
  }
}
