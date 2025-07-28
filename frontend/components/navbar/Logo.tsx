import { MdDeliveryDining } from "react-icons/md";

const Logo = () => {
  return (
    <div className="flex gap-2">
        <MdDeliveryDining className="size-8" />
        <h2 className="text-2xl font-bold">Livrer-<span className="text-red-700 font-bold">O</span></h2>
    </div>
  )
}

export default Logo