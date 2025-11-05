import Spline from '@splinetool/react-spline';

function Body() {
  return (
   <>
 
     <div className='h-screen bg-gray-800 flex justify-center  items-center'>
     
        <div className='text-white'> hi</div>
        <div className='h-60 w-100  '>
      
            <div className='h-95 w-100  '> <Spline scene="https://prod.spline.design/2j1N5OgfO78Hl7B1/scene.splinecode" /></div>
        </div>
        {/* <div className=''> <Spline scene="https://prod.spline.design/k8GvEcLVuMi47Dm3/scene.splinecode" /></div> */}
     </div>
   </>
  );
}

export default Body

