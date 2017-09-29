

export const CREATE_CONTENT = "CREATE_CONTENT";
export const RETRIEVE_LESSON_PLAN = "RETRIEVE_LESSON_PLAN";
export const RETRIEVE_LESSON = "RETRIEVE_LESSON";

export function createContent(content) {
  return {
    type: CREATE_CONTENT,
    data: content
  }
}

export function retrieveLessonPlan() {
  return {type: RETRIEVE_LESSON_PLAN}
}

export function retrieveLesson(data) {
  debugger;
  return {
    type: RETRIEVE_LESSON,
    data: data
  }
}
