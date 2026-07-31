export class Almacen {
  constructor(
    public readonly id: number,
    public readonly nombre: string,
    public readonly descripcion?: string,
    public readonly ubicacion?: string,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
    public readonly deletedAt?: Date,
  ) {}
}
