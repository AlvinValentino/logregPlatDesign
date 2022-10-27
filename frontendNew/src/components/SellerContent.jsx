import { AiFillEye,AiFillHeart,AiFillStar, AiTwotoneHeart } from "react-icons/ai";
import { MdAddPhotoAlternate } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { dataGrids, dataUsers } from "../constants/Data";

const SellerContent = ({ type }) => {
     if(type === "Products") {
return (
  <div className="grid grid-cols-12 gap-4 mt-4">
           {dataGrids.map((data, idx) => (
              <div className="w-full col-span-4" key={idx}>
                <img src={data.image} className="w-full"/>
                <div className="flex items-center py-3 justify-between">
                  <span className="flex items-center text-gray-500">
                  <img src='/assets/muka1.jpeg' className="w-[30px] h-[30px] rounded-2xl text-xl mr-1"/>
                    <p className="font-medium">{data.title}</p>
                  </span>
                  <div className="flex items-center">
                  <span className="flex items-center text-gray-500">
                    <AiFillEye className="text-xl mr-1"/>
                    <p className="font-medium">{data.download}</p>
                  </span>
                  <span className="flex items-center ml-4 text-gray-500">
                    <AiTwotoneHeart className="text-xl mr-1"/>
                    <p className="font-medium">{data.like}</p>
                  </span>
                    </div>
                  </div>
                </div>
            ))}
          </div>
)
     }

    if(type === "Statistics") { 
        return (
            <div className="w-full mt-10">
                <div className="w-full bg-white rounded-md py-3 px-5 flex justify-between items-center">
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.835</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Product Sold</h5>
                        <h4 className="text-lg font-semibold mt-2">4.481</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Product viewed</h5>
                        <h4 className="text-lg font-semibold mt-2">170.2k</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Average orders / day</h5>
                        <h4 className="text-lg font-semibold mt-2">8</h4>
                    </div>
                </div>
                <div className="flex mt-10 items-center justify-between">
                    <h2 className="text-2xl font-bold">Product Performance</h2>
                    <select className="w-[200px] text-sm font-medium outline-none border border-gray-400 rounded-full py-2 px-3">
                        <option>Most Popular?</option>
                    </select>
                </div>
                <div className="mt-10">
                    <div className="flex items-center bg-white rounded-lg justify-between py-3 px-5">
                        <div className="flex items-center">
                            <img src="images/image 86.png" alt="product" className="w-[140px]"/>
                            <h5 className="text-md font-semibold ml-5">Nature Themed E-Commerce Website Template 2022</h5>
                        </div>
                        <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    </div>
                    <div className="mt-8 flex items-center bg-white rounded-lg justify-between py-3 px-5">
                        <div className="flex items-center">
                            <img src="images/image 87 (1).jpg" alt="product" className="w-[140px]"/>
                            <h5 className="text-md font-semibold ml-5">Business company Themed Website Template 2022</h5>
                        </div>
                        <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    </div>
                    <div className="mt-8 flex items-center bg-white rounded-lg justify-between py-3 px-5">
                        <div className="flex items-center">
                            <img src="images/image 87 (2).jpg" alt="product" className="w-[140px]"/>
                            <h5 className="text-md font-semibold ml-5">Fast Food Themed E-Commerce Website Template 2022</h5>
                        </div>
                        <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    </div>
                    <div className="mt-8 flex items-center bg-white rounded-lg justify-between py-3 px-5">
                        <div className="flex items-center">
                            <img src="images/image 87 (3).jpg" alt="product" className="w-[140px]"/>
                            <h5 className="text-md font-semibold ml-5">Bike to work articles Themed Website Template 2021</h5>
                        </div>
                        <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    </div>
                    <div className="mt-8 flex items-center bg-white rounded-lg justify-between py-3 px-5">
                        <div className="flex items-center">
                            <img src="images/image 87 (4).jpg" alt="product" className="w-[140px]"/>
                            <h5 className="text-md font-semibold ml-5">Festival Themed E-Commerce Website Template 2022</h5>
                        </div>
                        <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    </div>
                    <div className="mt-8 flex items-center bg-white rounded-lg justify-between py-3 px-5">
                        <div className="flex items-center">
                            <img src="images/image 87 (5).jpg" alt="product" className="w-[140px]"/>
                            <h5 className="text-md font-semibold ml-5">Business Maker Themed E-Commerce Website Template 2022</h5>
                        </div>
                        <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    <div className="text-center">
                        <h5 className="text-sm text-gray-400">Total Earings</h5>
                        <h4 className="text-lg font-semibold mt-2">$40.00</h4>
                    </div>
                    </div>
                    
                </div>
            </div>
            
        )
        
    }
    if(type === "Ratings") { 
      return (
        <div className="flex items-center gap-x-5 bg-white rounded-full mt-14 h-5 w-5">
          
    <button  className={`flex items-center px-12 text-gray-500 text-white text-sm px-9 h-3 bg-orange-500 rounded-full font-medium py-4`}>All</button>
    
    <button  className={`flex items-center px-12 text-black-500 text-orange text-sm px-9 h-3 bg-white rounded-full font-medium py-4`}>1<AiFillStar/></button>
    <button  className={`flex items-center px-12 text-black-500 text-orange text-sm px-9 h-3 bg-white rounded-full font-medium py-4`}>2<AiFillStar/></button>
    <button  className={`flex items-center px-12 text-black-500 text-orange text-sm px-9 h-3 bg-white rounded-full font-medium py-4`}>3<AiFillStar/></button>
    <button  className={`flex items-center px-12 text-black-500 text-orange text-sm px-9 h-3 bg-white rounded-full font-medium py-4`}>4<AiFillStar/></button>
    <button  className={`flex items-center px-12 text-black-500 text-orange text-sm px-9 h-3 bg-white rounded-full font-medium py-4`}>5<AiFillStar/></button>

  </div>

      )
    }
  <div className="flex items-center gap-x-5 bg-white rounded-full mt-14 h-5 w-5">

  </div>
}

export default SellerContent;