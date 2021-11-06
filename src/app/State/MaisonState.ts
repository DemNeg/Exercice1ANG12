export enum AffichageStateENum{
  LOADING,
  LOADED,
  ERROR
}

export interface MaisonDataState <T>{
  affichStateEnum? : AffichageStateENum,
  data? : T,
  errorM?:string,
  pages:Array<number>
}


export enum MaisonQueryEventTypes{
  GET_ALL_MAISON="[Maison] To Get All maison",
  SEARCH_MAISON="[Maison] To Search maison",
  ON_PAGE_MAISON="[Maison] To Search maison",
  NEW_MAISON="[Maison] New maison"
}

export enum MaisonCommandEventTypes{
  MAISON_ADDED="[Maison]  maison added",
  MAISON_UPDATED="[Maison] maison updated",
  EDIT_MAISON="[Maison] Edit maison",
  DELETE_MAISON="[Maison] delete maison",
}

export interface MainsonQueryEvent{
  type:MaisonQueryEventTypes,
  payload?:any
}

export interface MainsonCommandEvent{
  type:MaisonCommandEventTypes,
  payload?:any
}
