import { CarDTOs } from "./carDTOs";
import { ResponseModul } from "./responseModel";

 export interface CarDTOsResponseModul extends ResponseModul {
     data:CarDTOs[];
     

 }