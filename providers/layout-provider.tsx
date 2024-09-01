"use client";
import { GetCurrentUserFromMongoDB } from "@/app/handlers/users";
import Loader from "@/app/components/loader";
import { KasirRalanMenu, adminMenu, userMenu } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import { AppUser } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [menuToShow = userMenu, setMenuToShow] = React.useState<any>(userMenu);
  const [menuKasirRalan = KasirRalanMenu, setMenuKasirRalan] = React.useState<any>(KasirRalanMenu);
  const [currentUserData = null, setCurrentUserData] =
    React.useState<AppUser | null>(null);
  const [loading = false, setLoading] = React.useState<boolean>(false);
  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up"].includes(pathname.split("/")[1]);
  const isAdminRoute = pathname.split("/")[1] === "admin";
  const [isClient, setIsClient] = React.useState(false)

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
            {/* TODO : Need to move this into env. Currently this is for change App Name. */}
            SIM HEC V2
          </h1>

          <div className="bg-white py-2 px-5 rounded-sm flex items-center gap-5">
            <UserButton signInUrl="/sign-in" />
          </div>
        </div>
      </div>
    );
  };

  const getContent = () => {
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



  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        setLoading(true);
        const response: any = await GetCurrentUserFromMongoDB();
        if (response.error) { throw new Error(response.error.message) }
        else {
          setCurrentUserData(response.data);
          if (response.data.isAdmin) {
            setMenuToShow(adminMenu);
          }
        }
      } catch (error: any) {
        console.log(error)
        // error here due to not connect to hec db
        // router.push("/sign-in")
        // router.refresh()
      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();
    setIsClient(true)
  }, []);

  return (
    <div>
      {getHeader()}
      {getContent()}
    </div>
  );
}

export default LayoutProvider;
