import {Component} from "react";
import logo from '../../images/leaf1.png'
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        /*p-2 bg-blue-300
            bg-gradient-to-r
            from-blue-200 to-blue-700to-red-100
            via-pink-500*/
        return (
            <div className=" p-2 bg-[#444544] flex">
                <h1 className="text-2xl text-green-600 font-bold">Organic <i className="text-white">Shop</i> </h1>
                <img className="h-10 w-10 ml-1  pt-1" src={logo} alt=""/>


                <ul className="list-none ml-[700px] text-[20px]  mt-1">
                    <li className="inline-block mr-8 text-[#e6f0e6]">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="inline-block mr-8  text-[#e6f0e6]">
                        <Link to="/">About</Link>

                    </li>
                    <li className="inline-block mr-6 text-[#e6f0e6]">
                        <Link to="/">Contact</Link>

                    </li>
                </ul>
                <button className="bg-amber-400 text-[15px] ml-[200px] mt-1 text-white pl-3 pr-3 w-15 h-7 hover:text-blue-950 hover:bg-white">Sign In</button>
            </div>
        );
    }
}