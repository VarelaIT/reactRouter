
import { BaseInput, SelectInput, TextAreaInput } from "./FormInput";

export default function SearchForm(){
    const selectOptions = [
        {title: "", value: "" },
        {title: "Clothing", value: 1},
        {title: "Food", value: 2},
    ]

    const selectOptions2 = [
        {title: "", value: "" },
        {title: "True", value: true},
        {title: "False", value: false},
    ]
    
    
    
    return (
        <form className="form-autoMatchDebug">
            <div>
                <label>
                    Product Type :
                    <SelectInput name="type" options={selectOptions}/>
                </label>
                <label>
                    Source Transaction Ids:
                    <BaseInput name="STI" type="text"  placeholder=""/>
                </label>
                <label>
                    Target Transaction Ids:
                    <BaseInput name="TTI" type="text"  placeholder=""/>
                </label>
                <label>
                    Recon Match Ids:
                    <BaseInput name="RMI" type="text" placeholder=""/>
                </label>
                </div>
                <div>
                <label>
                    Recon Rule :
                    <SelectInput name="reconRul" options={selectOptions2}/>
                </label>
            </div>
            <div>
                <div>
                    <BaseInput type="submit" value="Debug"/>  
                </div>
                <div>
                    <BaseInput type="reset" value="Clear"/>
                </div>
            
            </div>
            <div>
                <label>
                    MatchedResult :
                    <TextAreaInput name="result" maxlength="50"/>
                </label>
            </div>
        </form>
    )
}