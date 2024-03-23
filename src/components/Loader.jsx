import {Html} from '@react-three/drei'


const Loader = () => {

  return (
    <Html>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='w-[60vw] h-[10vw] rounded-full animate-pulse text-gray-100'>
          Loading....
        </div>
      </div>
    </Html>
  )
}

export default Loader
