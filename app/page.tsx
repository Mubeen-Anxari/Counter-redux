
"use client"
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import { decrement, increment } from "./components/counterSlice";

export default function Home() {
  const counter =useAppSelector(state=>state.counter)
 const dispatch= useAppDispatch()
  return (
    <div className=" flex gap-2 justify-center mt-10 items-center">
      <button className=" bg-blue-900 p-2  w-[60px] rounded-lg text-white mx-1" onClick={()=>dispatch(decrement())}>Minus</button>
      {counter?.count}
      <button className=" bg-blue-900 p-2  w-[60px] rounded-lg text-white mx-1" onClick={()=>dispatch(increment())}>Plus</button>

    </div>
  );
}
