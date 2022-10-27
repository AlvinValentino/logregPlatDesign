import { dataGrids,dataUsers } from "../constants/Data";
import { FaUserCircle } from "react-icons/fa";
import { AiTwotoneHeart,AiFillEye } from "react-icons/ai";

const DataFetching = ({ type }) => {
    if(type === "Creation") {
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

    if(type === "Liked") {
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

    if(type === "Saved") {
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

    if(type === "Followers") {
        return (
            <div className="w-full">
           {dataUsers.map((data,idx) => (
              <div className="w-full flex items-center mt-3" key={idx}>
               <img src="assets/muka1.jpeg" alt="User" className="w-[120px] h-[120px] rounded-full"></img>
               <div className="flex-1 text-gray-500 ml-4">
                 <h2 className="text-2xl  font-semibold">{data.name}</h2>
                 <h4  className="font-medium">{data.email}</h4>
                 <h4>{data.follower}</h4>
               </div>
              </div>
           ))}
          </div>
        )
    }

    if(type === "Following") {
        return (
            <div className="w-full">
            {dataUsers.map((data,idx) => (
               <div className="w-full flex items-center mt-3" key={idx}>
                <img src="assets/muka1.jpeg" alt="User" className="w-[120px] h-[120px] rounded-full"></img>
                <div className="flex-1 text-gray-500 ml-4">
                  <h2 className="text-2xl  font-semibold">{data.name}</h2>
                  <h4  className="font-medium">{data.email}</h4>
                  <h4>{data.follower}</h4>
                </div>
               </div>
            ))}
           </div>
        )
    }


    return (
        <div className="w-full"></div>
    )
}

export default DataFetching