export class Prototype {
    public primitive: any;
    public component: object;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        return clone;
    }
}