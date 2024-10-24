export interface Usuario {
    
        id: number; // Asegúrate de tener el id si lo necesitas
        username: string;
        password: string;
        role: 'admin' | 'basic' | 'premium'; // Enum para roles
      
}