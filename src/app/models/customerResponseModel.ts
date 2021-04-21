import { Customer } from "./customer";
import { ResponseModul } from "./responseModel";

export interface CustomerResponseModel extends ResponseModul{
    data:Customer[];
}