import { useState, useEffect } from "react"
import axios from 'axios'

const Products = ({  }) => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.post('http://localhost:8000/api/show')
        .then((response) => {
            const { data } = response.data
            // setDatas(data)
            console.log(data)
        })
        
    }, [])

    return (
        <div>
        {datas?.map((data,idx) => {
            return (
                // <div className="flex flex-row justify-between" key={idx}>
                <div className="flex flex-row my-3 relative space-x-28" key={idx}>
                    <div>   
                        <img src={data?.product_file} alt="" className="w-[400px] h-[253px] rounded-lg"/>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row">
                                <img src="/assets/muka1.jpeg" alt="" className="w-[30px] h-[30px] rounded-2xl mt-1"/>
                                <p className="ml-2 mr-10 mt-2 font-semibold text-gray-700 text-[14px]">{data?.username}</p>
                            </div>
                            <div className="flex flex-row ml-24">
                                <svg xmlns= "http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[26px] h-[19px] text-gray-500 mt-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="ml-1 mr-2 font-medium text-gray-700 text-[14px] mt-2">3k</p>
                            </div>
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[23px] h-[23px] text-gray-500 mt-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <p className="ml-1 mr-2 font-medium text-gray-700 text-[14px] mt-2">2k</p>
                            </div>
                        </div>
                    </div>
                </div>
                // </div>
            )
        })}
        </div>
    )
}

export default Products