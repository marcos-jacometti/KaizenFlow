import React from "react";
import { Search } from "./styles";
import { FaSearch } from "react-icons/fa";

export default function SearchFeature({placeholder, value, onChange}){
    return(
        <Search>
            <FaSearch />
            <input 
                type="text" 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Search>
    );
}