import { Car } from "./car";
import { ResponseModul } from "./responseModel";

 export interface CarResponseModul extends ResponseModul {
     data:Car[];
     

 }