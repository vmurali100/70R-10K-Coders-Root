import { CalendarClass } from "./CalendarClassComp";
import { Element } from "./ElementClassComp";
import { OneClassComp } from "./OneClassComp";
import { SoliderClassComp } from "./SoliderClassComp";

export function Personal() {
    return <div>
        <h2>Hello from Personal Component</h2>
        <hr />

        {/* <h3>Solider Details :-</h3>
        <SoliderClassComp/>
        <hr /> */}
        {/* <CalendarClass/> */}
        {/* <OneClassComp/> */}
        <Element/>
    </div>
}