import { Brand } from "./brand";
import { ResponseModul } from "./responseModel";

 export interface BrandResponseModel extends ResponseModul{
     data:Brand[]
 }