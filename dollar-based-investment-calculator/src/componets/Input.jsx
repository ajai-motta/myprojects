
export default function Input({investment,onChanges}){

    return(
        <section id="user-input">

            <div className="input-group">

            <p>
            <label>Intital Investment</label>
            <input type="number"
            required
            value={investment.initialInvestment}
            onChange={(event)=>onChanges('initialInvestment',event.target.value)}
            />
            </p>

             <p>
            <label>Anual Investment</label>
            <input type="number"  
            required
            value={investment.annualInvestment}
             onChange={(event)=>onChanges('annualInvestment',event.target.value)}
             />
            </p>

            </div>

             <div className="input-group">
            <p>
            <label>Expected Return</label>
            <input type="number"  
            required
            value={investment.expectedReturn} 
            onChange={(event)=>onChanges('expectedReturn',event.target.value)}/>
            </p>
             <p>
            <label>Duration</label>
            <input type="number"  
            required
            value={investment.duration} 
            onChange={(event)=>onChanges('duration',event.target.value)}/>
            </p>
            </div>
        </section>
        
    )
}