import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

getPaises () {
  return this.http.get ('https://restcountries.com/v2/lang/es')
        .pipe(
          map( (resp:any) => {
            return resp.map( (pais:any) =>
              ({
                nombre: pais.name, codigo: pais.alpha3Code //Esto lo encuentro en al consola
              })
            )
          } )
        )

}

}
