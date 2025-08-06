import { CartCounter } from "@/app/components/shopping-cart/components/CartCounter";

export const metadata = {
  title: 'Shopping Cart Counter',
  description: 'Local state management example using React hooks'
};

export default function CounterPage() {

  //Aqui podriamos tener una conexion a base de datos.
  // y el valor podria ser generado desde la BS
 

  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <span>Productos en el carrito</span>
      <CartCounter value={20}/>
    </div>
  );
}