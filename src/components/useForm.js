import { useState } from "react"
import validateInfo from './validateInfo' 

const useForm = () => { 
    const [values, setValues] = useState ({ 
        name: '',   
        number:'',
        expiration: '',
        cvc: '',
        country:'',
        focus: '',  
    })  
  const[country, setCountry] = useState("")
    const Banned_Countries = ["Afghanistan","Venezuela","Belarus","Libya","Albania",]

    const [errors, setErrors] = useState()

    const handleFocus = e => { 
         setValues({ 
            ...values, 
            focus: e.target.name
    }) 
}

    const handleChange =e => { 
          const {name, value} =e.target 
          setValues({ 
            ...values, 
            [name]: value
    })  
}

    const handleSubmit = e => { 
        e.preventDefault()
        setErrors(validateInfo(values))   
    } 

    return { handleChange, handleFocus, handleSubmit, values,errors} 
}

export default useForm