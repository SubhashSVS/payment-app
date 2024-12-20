const SubmitButton = ({title, onClick, disabled})=>{
    return <div className="mt-4">
        <button onClick={onClick} className="bg-black text-white font-semibold p-3 rounded-lg w-full" disabled={disabled} >{title}</button>
    </div>
}

export default SubmitButton;