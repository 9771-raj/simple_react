import Sdata from "./Sdata";
const Datashow=(val)=>{
      return(
            <>
            <div className="col-md-4 my-2">
              <div className="card">
                  <img className="card-img-top" src={val.src} alt=""></img>
                  <div className="card-body text-center">
                        <div className="card-title">
                              {val.title}
                        </div>
                        <div className="card-text">
                              {val.content}
                        </div>
                        <div className="btn btn-info">Watch Now</div>
                  </div>
              </div>
            </div>
            </>
      );
}
export default Datashow;