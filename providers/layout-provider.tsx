"use client";
import Loader from "@/app/components/loader";
import { UserButton } from "@clerk/nextjs";
import { AppUser } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  // const { data: appUser, error, isLoading } = useSuspenseQuery(useAppUserOptions)
  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>{error.message}</p>;

  const router = useRouter();
  const [currentUserData = null, setCurrentUserData] =
    React.useState<AppUser | null>(null);
  const [loading = false, setLoading] = React.useState<boolean>(false);
  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up", 'antrianPoli', 'antrianAll', 'antrianAdmisi', 'antrianVisus'].includes(pathname.split("/")[1]);
  const isAdminRoute = pathname.split("/")[1] === "admin";

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
    if (isAdminRoute)
      return (
        <div className="py-20 lg:px-20 px-5 text-center text-gray-600 text-sm">
          You are not authorized to view this page
        </div>
      );
    return <div className="py-5 lg:px-20 px-5">{children}</div>;
  };

  return (
    <div>
      {getHeader()}
      {getContent()}
    </div>
  );
}

export default LayoutProvider;
