import { Link } from "react-router-dom"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <>
        <nav className="py-4 flex justify-between items-center"> 
            <Link>
                <img src="../../public/logo.png" className="h-20" />
            </Link>

            <Button variant="ouline">Login</Button>
        </nav>
    </>
  )
}

export default Header