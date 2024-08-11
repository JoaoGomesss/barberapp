import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog"
import { DialogHeader } from "./ui/dialog"
import { signIn } from "next-auth/react"
import Image from "next/image"
import { Button } from "./ui/button"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça o login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta Google
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          src="/google.svg"
          width={18}
          height={18}
          alt="Fazer login com o Google"
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
