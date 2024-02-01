import {Component} from "react";

export class MainContext extends Component {
    render() {
        return (
            <div className="pt-28 pb-28 bg-amber-50 mx-auto">
                <h1 className="text-2xl text-center text-blue-950">This is main content</h1>
                {/*scren size ekne  bagyk width eka higth ek screen size h-Screen*/}
             {/*   <div className="!cursor-pointer
                 pl-2  h-20 w-20
                  text-center
                  bg-green-600 p-2
                   text-amber-50 rotate-45 shadow-xl
                   hover:shadow-blue-600
                   min-h-full max-h-screen
                   mx-auto">
                    Height & Width
                </div>*/}
            </div>
        );
    }
}