import { useRouter } from 'next/router'
import React from 'react';
import Bootstrap from '../../components/Bootstrap';

const UIconfig = {
  bootstrap: Bootstrap,
};

export function getStaticProps({ params }) {

    if ( UIconfig[params.ui] == undefined ) {
        return { notFound: true }    
    }

    return {
         props: { ...params }
    }
}

export function getStaticPaths() {
  return {
    // enables blocking mode for the fallback behavior
    // fallback: 'blocking'    
    fallback: true,
    paths: []
  }
}

export default function Uipage({ props })  {
    const router = useRouter()
    console.log(router);
    if(router.isFallback) {
        return <h1>Loading...</h1>
    }   
    const { ui } = router.query
    
    return React.createElement(UIconfig[`${ui}`])
}