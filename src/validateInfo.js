import valid from 'card-validator'

export default function validate(values) {
let errors = {} 
let creditCard = valid.number(values.number)

creditCard.expirationDate = valid.expirationDate(values.expiration)
creditCard.cardholderName = valid.cardholderName(values.name)
creditCard.cvv = valid.cvv(values.ccvc) 
creditCard.country = valid.countryofOrigin(values.country)


errors.show = true;
errors.variant ='danger'; 
errors.message = 'An unknown error has occurred. Please try again later.';
errors.cname = false
errors.cnumber = false
errors.cexp = false 
errors.ccvc = false  
errors.ccountry = false

// Card CVC 
if (values.cvc === null || !values.cvc.trim()){
    errors.message = 'Credit card CVC is not complete'
} else if (creditCard.cvv.isValid){ 
    errors.ccvc = true
} else {  
    errors.message = 'Credit card CVC is invalid' 
}

console.log(creditCard.cvv.isValid)

// Card Expiration 
if (values.expiration === null || !values.trim()){
    errors.message = 'Credit card expiration date is not complete'
} else if (creditCard.expirationDate.isValid){ 
    errors.cexp = true
} else {  
    errors.message = 'Credit card CVC is invalid' 
}

// Card Number 
if (values.number === null || values.number.trim()){
    errors.message = 'Credit card number is not complete' 
} else if (creditCard.isValid){ 
    errors.cnumber = true
} else {  
    errors.message = 'Credit card number is invalid' 
} 

// Cardholder Name 
if (values.name === null || values.name.trim()){ 
    errors.message = 'Cardholder name is not complete'
} else if (creditCard.name.isValid){ 
    errors.cname = true
} else {  
    errors.message = 'Credit card name is invalid' 
}

// Card Country of Origin  
if (values.country === null || values.country.trim()){
    errors.message = 'Credit card country of origin is not complete'
} else if (creditCard.cvv.isValid){ 
    errors.ccountry = true
} else {  
    errors.message = 'Credit card is from a banned country'
}

if (errors.cname && errors.cnumber && errors.ccvc && errors.cexp && errors.ccountry) {
    errors.variant = "success"
    errors.message = "Credit Card is valid"
}
return errors 

}
