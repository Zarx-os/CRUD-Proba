import Header from "./componets/Header";
import ReactDOM from "react-dom";
import { useState } from "react";

function Index(){

        return(
            <>

            {}
            <div className="index"></div>
            <div className="head"><Header/></div>
            </>
        );
}
const inicio=<Index/>;

ReactDOM.render(<Index/>,document.getElementById("root"));