export class Product {
    constructor(_id = "", pro_name = "", pro_type = "", unitprice = null) {
        this._id = _id,
            this.pro_name = pro_name,
            this.pro_type = pro_type,
            this.unitprice = unitprice

    }

    _id: string;
    pro_name: string;
    pro_type: string;
    unitprice: number;


}