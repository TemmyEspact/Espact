import React, { useState, useEffect, useCallback } from "react";

let draggingCount = 0;
type Params = {
  labelRef: any;
  inputRef: any;
  handleChanges: (arg0: File) => void;
  onDrop?: (arg0: File) => void;
};

/**
 *
 * @param data - labelRef, inputRef, handleChanges, onDrop
 * @returns boolean - the state.
 *
 * @internal
 */
export default function useDragging({ labelRef, inputRef, handleChanges, onDrop }: Params): boolean {
  const [dragging, setDragging] = useState(false);
  const handleClick = useCallback(() => {
    inputRef.current.click();
  }, [inputRef]);

  const handleDragIn = useCallback(ev => {
    ev.preventDefault();
    ev.stopPropagation();
    draggingCount++;
    if (ev.dataTransfer.items && ev.dataTransfer.items.length !== 0) {
      setDragging(true);
    }
  }, []);
  const handleDragOut = useCallback(ev => {
    ev.preventDefault();
    ev.stopPropagation();
    draggingCount--;
    if (draggingCount > 0) return;
    setDragging(false);
  }, []);
  const handleDrag = useCallback(ev => {
    ev.preventDefault();
    ev.stopPropagation();
  }, []);
  const handleDrop = useCallback(
    ev => {
      ev.preventDefault();
      ev.stopPropagation();
      setDragging(false);
      draggingCount = 0;
      if (ev.dataTransfer.files && ev.dataTransfer.files.length > 0) {
        const file = ev.dataTransfer.files[0];
        handleChanges(file);
        const success = handleChanges(file);
        if (onDrop && success) onDrop(file);
        ev.dataTransfer.clearData();
      }
    },
    [handleChanges]
  );
  useEffect(() => {
    const ele = labelRef.current;
    ele.addEventListener("click", handleClick);
    ele.addEventListener("dragenter", handleDragIn);
    ele.addEventListener("dragleave", handleDragOut);
    ele.addEventListener("dragover", handleDrag);
    ele.addEventListener("drop", handleDrop);
    return () => {
      ele.removeEventListener("click", handleClick);
      ele.removeEventListener("dragenter", handleDragIn);
      ele.removeEventListener("dragleave", handleDragOut);
      ele.removeEventListener("dragover", handleDrag);
      ele.removeEventListener("drop", handleDrop);
    };
  }, [handleClick, handleDragIn, handleDragOut, handleDrag, handleDrop, labelRef]);

  return dragging;
}
