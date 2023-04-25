/* 
创建类组件
    创建一个构造函数（类），要求必须继承React.Component/PureComponent这个类
        我们习惯于使用ES6中的class创建类
*/
import React from "react";
import PropTypes from 'prop-types';

class Vote extends React.Component {
    /* 属性规则校验 */
    static defaultProps = {
        num: 0
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
        num: PropTypes.number
    };
    /* 初始化状态 */
    state = {
        supNum: 10,
        oppNum: 5
    };
    // constructor(props){
    //     super(props);
    //     console.log(this.props);
    // }
    oppHandle=()=>{
        let {oppNum}=this.state;
        this.setState({
            oppNum:oppNum+1
        },()=>{console.log("人数加1");});
    }

    render() {
        // 解构赋值：let {title}=this.props   相当于let title = this.props.title
        let { title } = this.props,
            { supNum, oppNum } = this.state;
        return <div className="vote-box">
            <div className="header">
                <h2 className="title">{title}</h2>
                <span>{supNum + oppNum}人</span>
            </div>
            <div className="main">
                <p>支持人数：{supNum}</p>
                <p>反对人数：{oppNum}</p>
            </div>
            <div className="footer">
                <button onClick={()=>{
                    this.setState({
                        supNum:supNum+1
                    });
                }}>支持</button>
                <button onClick={this.oppHandle}>反对</button>
            </div>
        </div>

    }


}
export default Vote;