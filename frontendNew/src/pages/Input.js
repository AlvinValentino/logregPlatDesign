import React, { useState, useEffect } from 'react'
import decode from 'jwt-decode'
import axios from 'axios'
import FileBase64 from 'react-file-base64'

const users = JSON.parse(localStorage.getItem('token'))
const userGoogle = JSON.parse(localStorage.getItem('userGoogle'))

function Input() {
    const [token, setToken] = useState(users ? users : userGoogle)
    const user = decode(localStorage.getItem('token'))

    const [dataImages, setDataImages] = useState()
    
    const [formData, setFormData] = useState({
        id_seller: user.data.id,
        name: user.data.username,
        product_name: "",
        product_file: "",
        category: "",
        description: "",
        nett_price: "",
    })

    const uploadImage = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setDataImages(base64)
    }
    
    useEffect(() => {
        if(!token) {
            window.location.href = '/'
        }
    }, [token])

    const HandleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)

            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (err) => {
                reject(err)
            }
        })
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        
        await axios.post('http://localhost:8000/api/input', formData)
        .then(() => {
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    return (
        <div>
            <input type="hidden" value={formData.id_seller} />
            <input type="hidden" value={formData.name} />
            <input type="text" onChange={(e) => HandleChange(e)} value={formData.product_name} name="product_name" placeholder="product_name" />
            <FileBase64 onDone={({base64}) => setFormData({...formData, product_file: base64})} />
            <input type="text" onChange={(e) => HandleChange(e)} value={formData.category} name="category" placeholder="category" />
            <input type="text" onChange={(e) => HandleChange(e)} value={formData.description} name="description" placeholder="description" />
            <input type="text" onChange={(e) => HandleChange(e)} value={formData.nett_price} name="nett_price" placeholder="nett_price" />
            <button type="submit" onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default Input