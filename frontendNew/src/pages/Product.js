import axios from "axios";
import React, { useState, useEffect } from "react";
import decode from 'jwt-decode'

export default function Product() {
    const [datas, setDatas] = useState([])
    const user = decode(localStorage.getItem('token'))

    const [formData, setFormData] = useState({
        id_product: "",
        name: user.data.username,
        id_user: user.data.id,
        product_name: "",
        nett_price: ""
    })

    const fetchData = async () => {
        await axios.post('http://localhost:8000/api/show')
        .then((response) => {
            const { data } = response.data
            setDatas(data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const productHandler = async (e) => {
        setFormData({...formData, id_product: e.target.value})

        await axios.post('http://localhost:8000/api/addProduct', formData)
        .then((response) => {
            console.log(response)
        })
    }

    return (
        <>
            <div>
                {datas?.map((data, idx) => {
                    return (
                        <div key={idx}>
                            <div className="flex flex-row">
                                <img src={data?.product_file} className="w-20 h-20" alt="" />
                                <p className="px-5">{data?.product_name}</p>
                                <p className="px-5">{data?.nett_price}</p>
                            </div>
                            <button type="submit" value={data?.id} onClick={productHandler}>Add To Cart</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}