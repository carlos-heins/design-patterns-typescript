import { DataBaseClassic } from "./db/database-classic";
import {dataBaseClassic as dataBaseClassicFromModuleA} from './module_a';


const dataBaseClassic = DataBaseClassic.getInstance();

dataBaseClassic.add({name: "Roberto", age: 42})
dataBaseClassic.add({name: "Joana", age: 23})
dataBaseClassic.add({name: "Luiza", age: 24})

dataBaseClassic.show();

console.log(dataBaseClassicFromModuleA === dataBaseClassic);

// ainda tem uma forma de fazer isso com mais cara de javascript