
export default function Header() {
    return <div className="m-[50px]">
        <div className="flex">
            <img src="icon.svg" className="h-[50px]" />
            <span className="font-logo ml-2 text-4xl mr-auto">Dexifier</span>
            <a href="#" className="font-label mt-5 mr-8 text-xl">support</a>
            <a href="#" className="font-label mt-5 mr-8 text-xl">guides</a>
            <a href="#" className="font-label mt-5 mr-8 text-xl">docs</a>
            <a href="#" className="font-label mt-5 text-xl">about us</a>
        </div>
        <span className="font-label ml-14 -mt-1 text-xs block">home of alpha</span>
    </div>
}