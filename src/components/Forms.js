
import {useForm} from 'react-hook-form'

const Forms=()=>{
      const {register,handleSubmit}=useForm();
      const onSubmit=(data,e)=>{
            const result=JSON.stringify(data)
            console.log(result);
            e.target.reset();
      };
      return(
            <>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                     <label htmlFor="fname">Enter your name:</label>
                     <input type="text" name="name" className="form-control" id="fname"
                      {...register('name')}></input>
               </div>
               <div className="form-group">
                     <label htmlFor="eemail">Email:</label>
                     <input type="email" name="email" className="form-control" id="eemail" {...register('email')}></input>
               </div>
               <div className="form-group mb-4">
                     <label htmlFor="ccomment">Comment:</label>
                     <textarea type="text" name="comment" row="10" className="form-control" id="ccomment" {...register('comment')}></textarea>
               </div>
               <button type="submit" className="btn btn-info">Submit</button>
            </form>
            </>
      );
}
export default Forms;