import Sdata from "./Sdata";
import Datashow from "./Datashow";
const Services=()=>{
      return(
            <>
           <div className="my-5 text-center"><h1><i>Our Services</i></h1></div>
           <div className="container my-3 text-center">
                 <div className="row mb-4">
                          {
                              Sdata.map((val,ind)=>{
                                    return <Datashow key={val.id} src={val.src} title={val.title} content={val.content}></Datashow>
                              })
                          } 
                 </div>
           </div>
            </>
      );
}
export default Services;