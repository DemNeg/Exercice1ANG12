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
