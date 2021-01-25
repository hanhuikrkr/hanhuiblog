import React from 'react';
import { Spin } from 'antd';

const PageLoading: React.FC<{
  tip?: string;
}> = ({ tip }) => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large"/>
    <br></br>
    <div style={{textAlign:"center"}}>
    <span style={{color:"#ff9c8c"}}>
        Welcome to{"  "}
    </span>
    <span style={{color:"#1F5E80"}}>
    H/&gt;
    </span>
    </div>
   
  
  </div>
);

export default PageLoading;
