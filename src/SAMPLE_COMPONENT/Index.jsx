import React from 'react'
import {StoreProvider} from "../StoreProvider/StoreContext";
import DocumentList from "./DocumentList";
import DocumentEditDialog from "./DocumentEditDialog";
import {sampleMiddleware} from "./store/middleware";
import {reducer, initialState} from "./store/reducers";
import {useActions} from "./store/actions";

export default function SAMPLE_COMPONENT() {

  return (
    <StoreProvider middleware={sampleMiddleware} actions={useActions} reducer={reducer} initialState={initialState}>
      <DocumentList />
      <DocumentEditDialog />
    </StoreProvider>
  )
}
