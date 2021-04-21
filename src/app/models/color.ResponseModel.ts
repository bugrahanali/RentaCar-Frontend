import { Color } from "./color";
import { ResponseModul } from "./responseModel";

export interface ColorResponseModel extends ResponseModul{
    data:Color[];
}