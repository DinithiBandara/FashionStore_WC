import React, {Component} from 'react';
import Wishitem from "./Wishitem";

class WishList extends Component {
    render() {
        return (
            < div className="Container mt-5">
                <div className="card mb-5 ">
                <h1>WishList</h1>

                    <h3>Username : {window.atob(localStorage.getItem("token-username") )}</h3>

                </div>

                <div>
                    <Wishitem/>
                    <Wishitem/>
                    <Wishitem/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default WishList;
