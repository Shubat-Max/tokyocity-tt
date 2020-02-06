import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "../reducers";
import { watchLoadInterests } from "../sagas/interests";
import { watchLoadNames, watchLoad5AlikeNames } from "../sagas/names";

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createRootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
  );

  sagaMiddleware.run(watchLoadNames);
  sagaMiddleware.run(watchLoadInterests);
  sagaMiddleware.run(watchLoad5AlikeNames);

  return store;
};

export default configureStore;
