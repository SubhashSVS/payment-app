const InputBox = ({title,placeholder,star, onInput})=>{
    return <div className="mt-3">
        <div className="text-lg font-medium">
            {title}
            <span className="text-red-500 text-sm">{star == "yes" ? " *" : ""}</span>
        </div>
        <input onChange={onInput} type="text" placeholder={placeholder} className="mt-2 text-neutral-700 placeholder-gray-500 border-2 rounded-md border-gray-200 p-2 w-full" />
    </div>
}

export default InputBox;