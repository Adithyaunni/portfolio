'use client';

import useCanvasCursor from "@/hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas className='pointer-events-none hidden md:block fixed inset-0' id='canvas' />;
};
export default CanvasCursor;
