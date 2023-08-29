'use client';

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return ( 
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}
    >
      <PuffLoader
        size={200}
        color="orange"
      />
    </div>
   );
}
 
export default Loader;