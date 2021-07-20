import {NameSpace} from '../root-reducer';

export const getChoosedGenre = (state) => state[NameSpace.VIEW].choosedGenre;
export const getShowedFilmsNumber = (state) => state[NameSpace.VIEW].showedFilmsNumber;
