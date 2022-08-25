import { Dharahaas } from "./Dharahaas";
import { DharahaasClass } from "./DharahaasclassComp";
import { Dhruvram } from "./Dhruvaram";
import { DhruvaramClass } from "./DhruvaramclassComp";
import { Prateep } from "./Prateep";
import { PrateepClass } from "./PrateepClassComp";
import { Triveni } from "./Triveni";
import { TriveniClass } from "./TriveniClassComp";
import { VimalaClass } from "./VimalaClassComp";

export function Vimala(){
    return <div>
        <h2>Hello from vimala component  from project1 </h2>
       {/*<Prateep/>
        <Dharahaas/>
        <Dhruvram/>
<Triveni/>*/}
<VimalaClass/>
<PrateepClass/>
<DharahaasClass/>
<DhruvaramClass/>
<TriveniClass/>
</div>
}