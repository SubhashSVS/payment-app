const SubmitButton = ({title, onClick})=>{
    return <div className="mt-4">
        <button onClick={onClick} className="bg-black text-white font-semibold p-3 rounded-lg w-full">{title}</button>
    </div>
}

export default SubmitButton;