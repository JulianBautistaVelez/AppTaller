export class Usuario {
    usuarioId:String;
    nombre:String;
    email:String;
    token?:String;
    public constructor(init?: Partial<Usuario>){
        Object.assign(this , init);
    }
}
