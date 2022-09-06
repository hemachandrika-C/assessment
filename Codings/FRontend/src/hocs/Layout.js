import React,{ useEffect} from 'react'
import Navbar from '../Component/Navbar';
import {connect} from 'react-redux';
import { checkAuthenicated , load_user } from '../actions/auth'
import Home from '../Containers/Home';

function Layout({checkAuthenicated,load_user}) {
    console.log(checkAuthenicated())
    console.log(load_user())
  
    useEffect(()=>{
        // checkAuthenicated();
         checkAuthenicated();
         load_user();

    },[]);




    return (
        <div>
            <Navbar />
            <Home />
            {/* {props.children} */}
        </div>
    )
}

export default connect(null,{ checkAuthenicated ,load_user })(Layout)