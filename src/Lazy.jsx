import React from 'react';
const Lazyeg=React.lazy(()=>import('./Lazyeg'));
function Lazy(){
    return(
        <>
        <React.Suspense fallback={<div>Loading...</div>}>
        <Lazyeg/>
        </React.Suspense>

        </>
    );
}
export default Lazy;