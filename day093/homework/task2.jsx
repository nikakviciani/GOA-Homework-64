// `4) შექმენით App კომპონენტი, სადაც state-ში იქნება ტექსტი.
//    შექმენით Input კომპონენტი, რომელსაც props-ით გადასცემთ:
//    - value
//    - onChange ფუნქციას
//    input-ში ჩაწერილი ტექსტი უნდა აისახოს ეკრანზე პარაგრაფში.`
import React, { useState } from 'react';

function Input(props) {
    return <input value={props.value} onChange={props.onChange} />;
    

}