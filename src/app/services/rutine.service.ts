import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  private apiUrl = 'http://localhost:3000/rutinas'; // Ruta para las rutinas en el JSON Server

  constructor(private http: HttpClient) {}

  // Obtener todas las rutinas
  getRutinas(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Obtener una rutina por su ID
  getRutinaById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva rutina
  createRutina(rutina: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, rutina);
  }

  // Editar una rutina existente
  updateRutina(id: number, rutina: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, rutina);
  }

  // Eliminar una rutina por su ID
  deleteRutina(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}