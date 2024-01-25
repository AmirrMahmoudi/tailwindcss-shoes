import { BiDollar } from "react-icons/bi";
import { CiTrash } from "react-icons/ci";

import Select from "./Select";
import { SIZES, QTY } from "../constant";
const CartItem = ({ item: { product, qty, size } }) => {
  return (
    <div className="cursor-pointer space-y-2 bg-gray-100 p-2 hover:bg-[#DAFFA2]">
      <div className="flex space-x-2">
        {/* Image */}
        <img className="h-24" src={product.src} />
        <div className="space-y-2">
          {/* Title @ Description */}
          <div className="font-bold">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        {/* Price */}
        <div className="flex font-bold">
          {product.price}
          <span className="mt-[3px]">
            <BiDollar />
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold">SIZE</div>
            <Select
              defaultValue={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select
              defaultValuet={qty}
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
            />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
