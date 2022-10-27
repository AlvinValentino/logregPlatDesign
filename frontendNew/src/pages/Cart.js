import axios from "axios";
import React, { useState, useEffect } from "react";
import decode from 'jwt-decode'

function Cart() {
    const [datas, setDatas] = useState([])

    const userData = decode(localStorage.getItem('token')).data

    const [formData, setFormData] = useState({
        id_user: userData.id,
        id: "",
    })

    const fetchData = async () => {
        await axios.post('http://localhost:8000/api/showProduct', formData)
        .then((response) => {
            const { data } = response.data
            setDatas(data)
        })
    }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    const destroyHandler = async (e) => {
        setFormData({...formData, id: e.target.value})

        await axios.post('http://localhost:8000/api/destroyProduct', formData)
        .then(() => {
            window.location.reload()
        })
    }

    const clearHandler = async (e) => {
        await axios.post('http://localhost:8000/api/clearProduct', formData)
        .then((response) => {
            console.log(response)
        })
    }

    return (
        <div>
            <input type="hidden" name="id_user" value={formData.id_user} />
            {datas?.map((data,idx) => {
                return (
                    <div key={idx} className="flex flex-row">
                        <h5 className="px-2">{data?.product_name}</h5>
                        <h5 className="px-2">{data?.nett_price}</h5>
                        <button type="submit" value={data?.id} onClick={destroyHandler}>Delete</button>
                    </div>
                )
            })}
            <button type="submit" onClick={clearHandler}>Clear</button>
        </div>
    )
}

export default Cart