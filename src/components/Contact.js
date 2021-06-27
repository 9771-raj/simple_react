
import Forms from "./Forms";
const Contact=()=>{
      return(
            <>
            <div className="container">
                  <div className="row">
                        <div className="col-md-6">
                              <div className="flex-container">
                                    <h1 className="text-success">Gaurav Raj</h1>
                                    <div>A real friend is one those who walks along when rest of the world walks out....</div>
                              </div>
                        </div>
                        <div className="col-md-6">
                              <div className="flex-container">
                                    <Forms />
                              </div>
                        </div>
                  </div>
            </div>
            </>
      );
}
export default Contact;