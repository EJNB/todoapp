import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtrosValidos = 'completados';

export function filtroReducer(state = estadoInicial, action: fromFiltro.actions): fromFiltro.filtrosValidos {
  switch (action.type) {
    case fromFiltro.SET_FILTRO:
      return action.filtro;

    default:
      return state;
  }
}
