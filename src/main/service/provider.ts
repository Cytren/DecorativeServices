
export interface ServiceProvider<T extends object> {
    provide (): T;
}
