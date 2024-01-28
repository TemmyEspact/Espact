import { useState, useEffect, lazy, Suspense } from "react";
import getNativeCookie from "@espact/components/Hooks/getNativeCookie";

const Acquisition = lazy(() => import("./pages/Acquisition/routes"));

export default function BaseRoutes() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Acquisition />
      </Suspense>
    </>
  );
}
