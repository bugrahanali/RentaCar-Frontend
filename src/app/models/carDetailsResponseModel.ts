import { CarDetails } from "./carDetails";
import { ResponseModel } from "./responseModel";

 export interface CarDetailsResponseModel extends ResponseModel {
     data:CarDetails[];
     

 }