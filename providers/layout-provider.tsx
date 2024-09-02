"use client";
import { appUserOptions } from '@/app/reactQuery/appUser';
import { useSuspenseQuery } from '@tanstack/react-query';
import Loader from "@/app/components/loader";
import { KasirRalanMenu, userMenu } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import { AppUser } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import useAppUser from '@/app/reactQuery/useAppUser';
import AppUserList from '@/app/reactQuery/AppUserList';

function LayoutProvider({ children }: { children: React.ReactNode }) {
  // console.log('3')
  const router = useRouter();
  const { data: appUser, error, isLoading } = useSuspenseQuery(appUserOptions)
  // const { data: appUser, error, isLoading } = useAppUser()
  // console.log(appUser)
  const [menuToShow = userMenu, setMenuToShow] = React.useState<any>(userMenu);
  const [menuKasirRalan = KasirRalanMenu, setMenuKasirRalan] = React.useState<any>(KasirRalanMenu);
  const [currentUserData = null, setCurrentUserData] =
    React.useState<AppUser | null>(null);
  const [loading = false, setLoading] = React.useState<boolean>(false);
  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up"].includes(pathname.split("/")[1]);
  const isAdminRoute = pathname.split("/")[1] === "admin";
  const [isClient, setIsClient] = React.useState(false)

  // console.log(data)
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;


  const getHeader = () => {
    if (isPublicRoute) return null;
    return (
      <div className="lg:px-20 px-5">
        <div className="bg-primary p-3 flex justify-between items-center rounded-b">
          <h1
            className="text-2xl text-white font-bold cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            SIM HEC V2 {appUser?.username}
          </h1>
          <div className="bg-white py-2 px-5 rounded-sm flex items-center gap-5">
            <UserButton signInUrl="/sign-in" />
          </div>
        </div>
      </div>
    );
  };

  const getContent = () => {
    // console.log('2')
    // console.log(appUser)
    console.log(appUser?.username)
    if (isPublicRoute) return children;
    if (loading) return <Loader />;
    if (isAdminRoute && !currentUserData?.isAdmin)
      return (
        <div className="py-20 lg:px-20 px-5 text-center text-gray-600 text-sm">
          You are not authorized to view this page
        </div>
      );
    return <div className="py-5 lg:px-20 px-5">{children}</div>;
  };



  // useEffect(() => {
  //   console.log('1')
  //   console.log(appUser)
  //   // setCurrentUserData(appUser);

  //   // const getCurrentUser = async () => {
  //   //   try {
  //   //     setLoading(true);
  //   //     const response: any = await GetCurrentUserFromMongoDB();
  //   //     if (response.error) { throw new Error(response.error.message) }
  //   //     else {
  //   //       setCurrentUserData(response.data);
  //   //       if (response.data.isAdmin) {
  //   //         setMenuToShow(adminMenu);
  //   //       }
  //   //     }
  //   //   } catch (error: any) {
  //   //     console.log(error)
  //   //     // error here due to not connect to hec db
  //   //     // router.push("/sign-in")
  //   //     // router.refresh()
  //   //   } finally {
  //   //     setLoading(false);
  //   //   }
  //   // };

  //   // getCurrentUser();
  //   // setIsClient(true)
  // }, []);

  return (
    <div>
      {getHeader()}
      {getContent()}


    </div>
  );
}

export default LayoutProvider;
