const logger = storeAPI => next => action => {
  next(action)
  return null;
}

export default logger;