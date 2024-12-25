import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button"
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="w-full border-2 p-2 flex justify-between">
            <div className="">
                <h1 className="text-xl font-semibold">TodoApp</h1>
            </div>

            <div className="flex gap-2">
                {session?.user ? (
                    <>
                        <form
                            action={async () => {
                                "use server"
                                await signOut()
                            }}
                        >
                            <Button type="submit">SignOut</Button>
                        </form>
                        <Avatar>
                            <AvatarImage src={session.user.image!} />
                            <AvatarFallback>{session.user.name}</AvatarFallback>
                        </Avatar>
                    </>
                ) : (
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google")
                        }}
                    >
                        <Button type="submit">SignIn with Google</Button>
                    </form>
                )}
            </div>
        </header>
    )
}

export default Navbar