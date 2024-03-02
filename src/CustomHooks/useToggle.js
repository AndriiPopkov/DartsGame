import { useState } from "react";

function useToggle(initValue = false){

    const [value, setValue]= useState(initValue)

    const toggle = () => {
        setValue(!value)
    }

    return [value, toggle]
}



export default useToggle