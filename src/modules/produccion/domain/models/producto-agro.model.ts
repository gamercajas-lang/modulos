export class ProductoAgro {
  constructor(
    public readonly id: number,
    public readonly nombre: string,
    public readonly unidadBase: string,
    public readonly descripcion?: string,
    public readonly imagen?: string,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
    public readonly deletedAt?: Date,
  ) {}
}
