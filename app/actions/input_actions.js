

export const CREATE_CONTENT = "CREATE_CONTENT";
export const RETRIEVE_CONTENT = "RETRIEVE_CONTENT";

export function createContent(content) {
  return {
    type: CREATE_CONTENT,
    data: content
  }
}

export function retrieveContent() {
  return {type: RETRIEVE_CONTENT}
}
