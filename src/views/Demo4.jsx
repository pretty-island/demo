import React, { Component } from "react";

class Demo4 extends React.Component {
    render() {
        return <div>
            <div className="outer">
                <div className="inner"
                    onClick={() => {
                        console.log('inner 冒泡');
                    }}
                    onClickCapture={()=>{
                        console.log('inner 捕获');
                    }}
                ></div>
            </div>
        </div>
    }
}