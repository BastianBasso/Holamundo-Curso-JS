class Restaurants {
    #_timetable;// Convención: "_" indica propiedad "privada"
    constructor(name) {
        this.name = name;
        //this._timetable = ''; // Convención: "_" indica propiedad "privada"
    }

    // Getter: permite leer la propiedad como si fuera un atributo normal
    get timetable() {
        return this.#_timetable;
    }

    // Setter: permite asignar la propiedad y controlar el valor recibido
    set timetable(value) {
        // Aquí podrías validar el formafto, por ejemplo
        let date = new Date(value);
        let time = date.getTime();
        if (Number.isNaN(time)){
            throw new Error('Fecha inválida');
        }

        this.#_timetable = date;
    }
}

const r = new Restaurants('BBQ');
r.timetable = '1 march 1978'; // Usa el setter
console.log(r.timetable);     // Usa el getter