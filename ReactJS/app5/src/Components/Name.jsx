import { NameClassComp, StudentsClassComp } from "./NameClassComp";
import { NameOneClass } from "./NameOneClassComp";
import { NameTwo } from "./NameTwoClassComp";

export function Name() {
    return <div>
        <h2>Hello from Class Component app5</h2>
        {/* <NameClassComp/> */}
        {/* <NameOneClass/> */}
        <NameTwo/>
    </div>
}