import { DataBaseClassic } from "./db/database-classic";

const dataBaseClassic = DataBaseClassic.getInstance();

dataBaseClassic.add({name: "Carlos", age: 22})
dataBaseClassic.add({name: "Hayra", age: 22})
dataBaseClassic.add({name: "TéTé", age: 6})

dataBaseClassic.show();

dataBaseClassic.remove(1);
dataBaseClassic.show();

export {dataBaseClassic};