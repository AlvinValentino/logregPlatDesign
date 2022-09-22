const AlertError = ({  alert,setAlert }) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">{alert.title}</strong>
            <span className="block sm:inline ml-1">{alert.message}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <button onClick={()=>setAlert({isOpen:false})} className="text-red-700 absolute mr-4 right-0 fill-current h-6 w-6 font-bold text-sm">X</button>
            </span>
        </div>
    )
}

export default AlertError;