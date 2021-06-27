
import { NavLink } from "react-router-dom";
const Common=(props)=>{
      return(
            <>
           <section id="header">
              <div className="container-fluid nav_bg">
                    <div className="row">
                       <div className="col-10 mx-auto">
                       <div className="row">
                             <div className="col-md-6 ">
                                <div className="flex-container">
                                   <h1>{props.title}<strong className="brand-name">{props.name}</strong></h1>
                                   <h2>
                                         {props.content}
                                   </h2>
                                   <div>
                                         <NavLink to={props.visit} className="btn btn-success">Contact Now</NavLink>
                                   </div>
                                   </div>
                             </div>
                             <div className="col-md-6">
                                <div className="flex-container">
                                   <img className="rounded-circle" src="https://i2.wp.com/techconnecto.com/wp-content/uploads/2017/04/animated-background-gif.gif?resize=521%2C384&ssl=1" alt=""></img>
                              </div>
                             </div>
                        </div>
                       </div>
                    </div>
              </div>
           </section>

            </>
      );
}
export default Common;
