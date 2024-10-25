export interface Usuario {

        id: number;
        username: string;
        password: string;
        role: 'admin' | 'basic' | 'premium'; // Enum para roles

}
