const Header = ({username})=>{
    return <div className="flex justify-between py-5 px-6 border-b">
        <div className="text-2xl font-bold">
            Payments App
        </div>
        <div className="flex justify-center items-center text-lg">
            <div className="mx-3 font-medium">Hello, {username}</div>
            <div className="bg-gray-300 pt-1 size-9 rounded-full text-center text-lg">{username[0]}</div>
        </div>
    </div>
}

export default Header;