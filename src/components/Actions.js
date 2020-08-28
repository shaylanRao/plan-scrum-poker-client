export function dispatchNameRoom(name, room) {
  return { type: "ASSIGN_NAME_ROOM", payload: { name, room } };
}

export function dispatchInputValue(name, value) {
  return { type: "ASSIGN_VALUE", payload: { name, value } };
}
