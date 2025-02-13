import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  CubeIcon,
  LogoutIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

//path={"/auth/signin"}
let defaultUserInfo = {
  firstName: "",
  lastName: "",
  emailVerified: false,
  phoneNumber: "",
  preferredNotification: "1",
  countryCode: "+94",
  addressList: [],
  mobileVerified: false,
  email: "",
};

function AccountIcon({ Icon }) {
  const [ShowUser, setShowUser] = useState(false);
  const [Cart, setCart] = useState(null);
  const { data: session, status } = useSession();
  const [userInfo, setuserInfo] = useState(defaultUserInfo);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/user/info", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + session.token.token,
          },
        })
          .then(
            async (res) => await res.json()
            // res.json()
          )
          .then((data) => {
            // console.log("User data", data);
            setuserInfo(data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    if (session != null) {
      fetchData();
    }
  }, [session]);

  function handleClick() {
    if (session == null) {
      router.push("/auth/signin");
    } else {
      setShowUser(!ShowUser);
    }
  }

  function handleMyAccountClick() {
    router.push("/userprofile");
  }
  function handleMyOrderClick() {
    router.push("/userprofile/orders");
  }
  function handleSignoutClick() {
    signOut();
    router.push("#");
  }

  return (
    <div className="relative">
      <div className="relative" onClick={handleClick}>
        <Icon className="h-6 mx-4 cursor-pointer text-primary" />
      </div>
      {ShowUser && (
        <div className="absolute z-50 w-[200px]  bg-white border border-t-4 border-t-primary  right-0 top-7   py-1">
          <div
            className="fixed inset-0 w-screen h-screen bg-white/5 -z-10"
            onClick={() => setShowUser(false)}
          ></div>
          <div className="flex items-center justify-between">
            <p className="font-['WorkSons'] text-primary text-base font-bold pl-3 pt-2">
              {userInfo?.firstName}
            </p>
            <div onClick={() => setShowUser(false)}>
              <XIcon className="w-5 h-5 mr-2 cursor-pointer"></XIcon>
            </div>
          </div>
          <div className="w-full">
            <div
              className="flex items-center justify-start w-full px-4 py-2 cursor-pointer bg-secondary/40 hover:bg-primary group"
              onClick={handleMyAccountClick}
            >
              <UserIcon className="w-5 h-5 cursor-pointer group-hover:text-white" />
              <p className="font-['WorkSons'] text-primary text-base font-medium ml-3 group-hover:text-white">
                My Account
              </p>
            </div>
            <div
              className="flex items-center justify-start w-full px-4 py-2 cursor-pointer bg-secondary/40 hover:bg-primary group"
              onClick={handleMyOrderClick}
            >
              <CubeIcon className="w-5 h-5 cursor-pointer group-hover:text-white" />
              <p className="font-['WorkSons'] text-primary text-base font-medium ml-3 group-hover:text-white">
                My Orders
              </p>
            </div>
            <div
              className="flex items-center justify-start w-full px-4 py-2 cursor-pointer bg-secondary/40 hover:bg-primary group"
              onClick={handleSignoutClick}
            >
              <LogoutIcon className="w-5 h-5 cursor-pointer group-hover:text-white" />
              <p className="font-['WorkSons'] text-primary text-base font-medium ml-3 group-hover:text-white">
                Sign Out
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountIcon;
