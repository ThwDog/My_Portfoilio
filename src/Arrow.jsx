import "./Arrow.css"
import React, { useEffect, useState } from 'react';

function Arrow(){
    return(
        <button class="stp" title="scroll-up-btn" onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
            <i class="arrow-up"></i>
        </button>
    );
}

export default Arrow;