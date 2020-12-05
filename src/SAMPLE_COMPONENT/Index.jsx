import React from 'react'
import {StoreProvider} from "./store/StoreContext";
import DocumentList from "./DocumentList";

export default function SAMPLE_COMPONENT() {
  return (
    <StoreProvider>
      <DocumentList />
    </StoreProvider>
  )
}
