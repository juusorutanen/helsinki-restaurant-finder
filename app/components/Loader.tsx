'use client';

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return ( 
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"2000px",marginTop:"100px"}}
    >
      <PuffLoader
        size={200}
        color="orange"
      />
    </div>
   );
}
 
export default Loader;