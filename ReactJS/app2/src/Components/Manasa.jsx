import Krishna from "./Krishna";
import { KrishnaClass } from "./KrishnaClassComp";
import { ManasaClass } from "./ManasaClassComp";
import { StudentsClassComp } from "./StudentsClassComp";


export function Manasa() {
    return <div>
        <h2>Hello from Manasa</h2>
        {/* <Krishna />
        <ManasaClass/>
        <KrishnaClass/> */}
        <StudentsClassComp/>
    </div>
}