import { v4 as uuidv4 } from "uuid";
/**
 * @class
 */
class ToDo {
  id;
  content = "";
  isDone = false;
  category = "";
  tags = [];
  constructor(todo) {
    this.id = uuidv4();
    this.content = todo.content;
    this.category = todo.category;
    this.tags = todo.tags;
  }
  /**
   * @description Todo 객체 생성 함수
   * @param {Object} todo 객체
   * @param {string} todo.content 할일 내용
   * @param {boolean} todo.isDone 완료 여부
   * @param {string} todo.category 카테고리
   * @param {Tag[]} [todo.tags] 테그들
   * @returns {ToDo}
   */
  static create(todo) {
    return new ToDo(todo);
  }
}
export default ToDo;
