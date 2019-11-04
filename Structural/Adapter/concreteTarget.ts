import { Target } from './interface/target';

export class ConcreteTarget implements Target {

    public request(): string {
        return 'Target: The default target\'s behavior.';
    }

}