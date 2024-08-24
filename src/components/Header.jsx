import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react"
import { Link, useSearchParams } from "react-router-dom"
import { Button } from "./ui/button"
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react"
import { useEffect, useState } from "react"

const Header = () => {
  // for login modal on/off
  const [showSignIn, setShowSignIn] = useState(false);

  // for set up login in this route "http://localhost:5173/?sign-in=true"
  const [search, setSearch] = useSearchParams();
  useEffect(()=>{
    if(search.get("sign-in")){
      setShowSignIn(true);
    }
  },[search])


  // For modal show off when clicked outside of the overlay
  const handleOverlayClick = (e)=>{
    // e.target clicked element   &&    e.currentTarget out of div / overlay
    if(e.target === e.currentTarget){
      setShowSignIn(false);
      setSearch({});
    }
  }

  return (
    <>
        <nav className="py-4 flex justify-between items-center"> 
            <Link>
                <img src="../../public/logo.png" className="h-20" />
            </Link>
        <div className="flex gap-8">
          <SignedOut>
            {/* <SignInButton /> */}
          <Button onClick={()=>{setShowSignIn(true)}} variant="ouline">Login</Button>
          </SignedOut>
          <SignedIn>
            {/* add a condition here */}
            <Link to='/post-jobs'>
              <Button  variant="destructive"  className="rounded-full">
                <PenBox size={20} className="mr-2"/>
                Post a Job
              </Button>
            </Link>
            <UserButton appearance={{
              elements:{
                avatarBox: "w-10 h-10"
              }
            }}>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15}/>}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15}/>}
                  href="/saved-jobs"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
        </nav>
        {
          showSignIn && (
            <div 
              onClick={handleOverlayClick}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <SignIn
                signUpForceRedirectUrl="/onboarding"
                fallbackRedirectUrl="/onboarding"
              />
            </div>
          )
        }
    </>
  )
}

export default Header