import React from 'react'
import { useState } from 'react';

function Maincompo({comp}) {
    var container;
    if(comp=="1"){
        container=<h1>i am first</h1>
    }
   else if(comp=="2"){
        container=<h1>i am second</h1>
    }
    else if(comp=="3"){
        container=<h1>i am third</h1>
    }
    else{
        container=<h1>not fond</h1>
    }
  return container;
  export default Maincompo;