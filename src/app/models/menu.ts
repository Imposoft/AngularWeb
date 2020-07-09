import {Section} from './section';

export interface Menu {
  menuText: string; // Contiene la frase
  sections: Array<Section>;
  name: string; // Identificador la frase aleatoria
  description: string; // URL que contiene el ID y permite recuperar la frase
  id: string; // URL que contiene el ID y permite recuperar la frase
}
