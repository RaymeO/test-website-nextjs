import { useEffect, useState } from 'react'
import Image from 'next/image';

export default function IndexPage(){
  const [inputValue,setInputValue] = useState('')
  const [list, setList] = useState([])

  useEffect(()=>{
    console.log('after page show')
  },[])

  const loadlist = () => {
    fetch('https://api.zenon.si/post')
      .then(response => response.json())
      .then(data => setList(data))
  }

  const tweet = () => {
    if(inputValue !== ''){
      setInputValue('')
      fetch('https://api.zenon.si/post',{
        method:'POST',
        headers:{"Content-Type":"application/json",},
        body: JSON.stringify({ name:'อะไรก็ได้',content:inputValue, }),
      })
      .then(()=>loadlist())
    }
  }
  return (
    <div className="min-h-full bg-gray-100 flex flex-col items-center ">
      {/* <Image src="/images/logo.jpg" width={200} height={200} alt='cat'/> */}
      <div className="w-1/2 flex flex-col items-end">
        <div className="w-full mt-32 bg-white p-6 rounded-lg shadow">
          
          <textarea rows={8} className="outline-none w-full resize-none" value={inputValue} onChange={(event)=>{
            const value = event.target.value;
            setInputValue(value)
          }} ></textarea>
        </div>
        
          <button 
            className="mt-6 bg-gray-800 text-white font-bold px-8 py-4 rounded-lg shadow-lg "
            onClick={tweet}
          >
            Tweet
          </button>
          <button 
            className='bg-gray-400 text-white rounded-lg p-4'
            onClick={loadlist}
          >
            Refresh
          </button>
        
        <div className='w-1/2 mt-8'>
          { list.map((data,index) => {
            return (
              <div key={index} className='mt-4 bg-white rounded-lg shadow-lg p-4'>
                <h1 className='text-xl font-bold'>{data.name}</h1>
                <div className='mt-2 text-gray-600'>
                  {data.content}  
                </div>
              </div>
            )
          }) }
          
        </div>
      </div>
    </div>
  )
}