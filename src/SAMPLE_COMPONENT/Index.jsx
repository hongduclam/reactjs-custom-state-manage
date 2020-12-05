import React from 'react'
import {StoreProvider} from "./store/StoreContext";
import DocumentList from "./DocumentList";
import DocumentEditDialog from "./DocumentEditDialog";

export default function SAMPLE_COMPONENT() {
  return (
    <StoreProvider>
      <DocumentList />
      <DocumentEditDialog />
    </StoreProvider>
  )
}
