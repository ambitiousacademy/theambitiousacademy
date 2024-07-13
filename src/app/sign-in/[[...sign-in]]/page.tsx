import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return<div className="p-28 flex items-center justify-center flex-col gap-10"> <SignIn /> </div> ;
}