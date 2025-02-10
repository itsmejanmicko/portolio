import UserRouter from "./router/UserRouter"




export default function App() {
   const userRouter = UserRouter();
  return (
    <div>
      {userRouter}
    </div>
  )
}
