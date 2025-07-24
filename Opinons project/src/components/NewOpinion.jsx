
import { useActionState } from "react";
export function NewOpinion() {

  function shareOpinion(prevState,formData){
    let error=[]
    const userName=formData.get('userName');
    const title=formData.get('title')
    const body=formData.get('body')

    //validation
    if(!userName.trim()){
      error.push("Please Enter Valid User NAme.")
    }
    if(title.trim().length<5){
      error.push('TTitle must atleast be five characters long')
    }
    if(body.trim().length<10 || body.trim().length>300){
      error.push("Opinion must be between 5 and 300 characters long")
    }
    if(error.length>0){
      return {error,enteredValues:{userName,title,body}}
    }
    return {error:null}
  }
const [formState,formAction,pending]=useActionState(shareOpinion,{error:null})
   
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValues?.title}/>
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>
        {formState.error&& (<ul className="errors">
          {formState.error.map((error)=>
            <li key={error}>{error}</li>
          )}
        </ul>)}
        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
