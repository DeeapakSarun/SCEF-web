import SCEF_Logo from "./assets/logos/SCEF.svg"
function Header() {
    return (
        <div className="px-10 flex items-center justify-between bg-white h-20">
            <div>
                <img src={SCEF_Logo} alt="SCEF logo" />
            </div>
            <div>

            </div>
            <div>
                <button className=""> Donate </button>
                <button>Partner with us</button>
            </div>
        </div>
    )
}

export default Header