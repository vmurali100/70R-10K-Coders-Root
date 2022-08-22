import ProductoneClass from "./ProductoneClassComp";
import ProductClass from "./ProductsClassComp";

export  default function Keerthi(){// one  component can return one html
    return<div> 
        <h2>Hello from Keerthi Component</h2>
        
        {/* <ProductClass/> */}
        <ProductoneClass/>
        
    </div>
}