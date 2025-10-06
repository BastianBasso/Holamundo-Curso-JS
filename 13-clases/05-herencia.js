class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }

    save() {}
}

class User extends Entidad{
    constructor(name) {
        super(255); // ojo hay que pasarle las propidades del de arriva (id en este caso)
        this.name = name;
    }
}