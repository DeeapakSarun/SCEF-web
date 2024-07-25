import prs from "./assets/logos/PRS1.png"
import ron from "./assets/logos/RON1 1.png"
import ron2 from "./assets/logos/RON 2.png"
import get from "./assets/logos/GETS 1.png"
import get2 from "./assets/logos/GET2 1.png"
import cv from "./assets/logos/CV+HR 1.png"
import group from "./assets/logos/Group 238151.png"

function Footer() {
    return (
        <div className="flex grow-0 bg-blue-950 h-40 items-center">

            <div className="flex grow justify-around p-5">
                <h1 className="text-white text-3xl ">Our Partners</h1>
                <div className="flex grow flex-wrap justify-around border-l-[2px] ml-5 pl-5">
                    <img src={ron} alt="" className="max-w-[100px] max-h-[50px] h-auto w-auto" />
                    <img src={prs} alt="" className="max-w-[100px] max-h-[50px] h-auto w-auto" />
                    <img src={ron2} alt="" className="max-w-[100px] max-h-[50px] h-auto w-auto" />
                    <img src={get} alt="" className="max-w-[100px] max-h-[50px] h-auto w-auto" />
                    <img src={get2} alt="" className="max-w-[100px] max-h-[50px] h-auto w-auto" />
                    <img src={cv} alt="" className="max-w-[100px] max-h-[50px] h-auto w-auto" />
                    <img src={group} alt="" className="max-w-[100px] max-h-[50px] h-auto w-auto" />
                </div>
            </div>


        </div>
    )
}

export default Footer