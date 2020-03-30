import React, { Component } from 'react'
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from './connect'
import HomeIndex from "./homeIndex"
import DownNav from "./downNav"
import Medium from "./medium"
import {HomeContainer} from "./styled"
@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    render() {
        // console.log("this,home render")
        // console.log(this.props.match.params.id,"this.props.match.params.id,home")
        let { activity,category } = this.props;
        // console.log(activity,"activity home")
            if( !this.props.match.params.id){
                return (
                    <HomeContainer>
                        <div>
                  <DownNav category={category}></DownNav>
                 <HomeIndex></HomeIndex></div>
                    </HomeContainer>
                    
                )
            }else{
                return (
                    <HomeContainer>
                        <div>
                  <DownNav  category={category}></DownNav>
                  <Medium></Medium>
                 </div>
                    </HomeContainer>
                  
                )
            }
    }
    componentDidMount() {
        this.props.handleGetHomeBanner()
        if(!this.props.articleList.length){
            this.props.handleCareChooseIndex()

        }
    }
}
export default Home