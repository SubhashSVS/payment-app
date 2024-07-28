const Header = ({username})=>{
    return <div className="flex justify-between py-5 px-6 border-b bg-gray-800">
        <div className="text-2xl font-bold text-white">
            Payments App
        </div>
        <div className="flex justify-center items-center text-white">
            <div className="mx-3 font-medium">Hello, {username}</div>
            <div className="bg-white pt-1 size-9 rounded-full text-center text-lg text-black font-bold">{username[0].toUpperCase()} </div>
        </div>
    </div>
}

export default Header;


  