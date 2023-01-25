import Todo from "./model/Todo";

/**
 * @namespace
 * @author Jehyun
 * @version 1.0.0
 * @license Copyright (c) 2015 Example Corporation Inc.
 * @see https://github.com/JJehyun/wanted-pre-onboarding-challenge-fe-2
 */
const TodosContext = {
  /**
   * @description Todo 할일 생성 함수 , content가 없으면 할 일을 추가 할 수 없습니다.
   * @example addTodo("농구하기","운동",[1,2]);
   * @param {string} content 할일 내용
   * @param {string} category 카테고리
   * @param {number[]} [tagId] 각 테그의 식별자
   * @throws Will throw an error if the content is undefined.
   * @returns {void}
   */
  addTodo(content, category, tags) {},
  /**
   * @description 모든 Todo List 조회하는 함수 입니다.
   * @example getAllTodos();
   * @returns {Todo[] | null}
   */
  getAllTodos() {},
  /**
   * @description id를 기반으로 특정 할일을 조회할 수 있습니다.
   * @example getTodo("550e8400-e29b-41d4-a716-446655440000");
   * @param {string} id 식별자 id
   * @returns {Todo}
   */
  getTodo(id) {},
  /**
   * @description id 식별자를 이용해 특정 Todo를 삭제 할 수 있습니다.
   * @example deleteTodoById("550e8400-e29b-41d4-a716-446655440000");
   * @param {string} id 식별자 id
   * @returns {void}
   */
  deleteTodo(id) {},
  /**
   * @description 모든 todoList 목록들을 삭제할 수 있습니다.
   * @example deleteAllTodos();
   * @returns {void}
   */
  deleteAllTodos() {},
  /**
   * @description 특정 할일을 완료 상태를 토글합니다.
   * @example toggleTodoDone("550e8400-e29b-41d4-a716-446655440000");
   * @param {string} id 식별자 id
   * @returns {void}
   */
  toggleTodoDone() {},
  /**
   * @description 할일을 업데이트 합니다.
   * @example updateTodo("550e8400-e29b-41d4-a716-446655440000" , "축구" , "스포츠" , [2,5]);
   * @param {string} id 식별자 id
   * @param {string} [content] 수정할 할 일
   * @param {string} [category] 수정할 카테고리
   * @param {number} [tags] 수정할 테그들
   * @returns {void}
   */
  updateTodo() {},
  /**
   * @description 특정 할일에 포함된 모든 테그를 삭제 합니다.
   * @example deleteAllTags("550e8400-e29b-41d4-a716-446655440000");
   * @param {string} id 식별자 id
   * @returns {void}
   */
  deleteAllTags() {},
  /**
   * @description 특정 할일에 포함된 테그들을 삭제 합니다.
   * @example deleteAllTags("550e8400-e29b-41d4-a716-446655440000" , [1,4]);
   * @param {string} id 식별자 id
   * @param {number} tag 테그 식별자값
   * @returns {void}
   */
  deleteTag(id, tag) {},
  /**
   * @description 특정 할일의 테그를 수정 합니다.
   * @example deleteAllTags("550e8400-e29b-41d4-a716-446655440000" , [2,5]);
   * @param {string} id 식별자 id
   * @param {number[]} tag 테그 식별자값
   * @returns {void}
   */
  updateTag(id, tag) {},
};

/**
 * @typedef {Object} Todo
 * @example {id : "550e8400-e29b-41d4-a716-446655440000" , content : "농구하기" ,
 *     isDone:false , category: "운동" , tags : [1,2,3]}
 * @property {string} id 식별자 uuid
 * @property {string} content 할 일 내용
 * @property {boolean} isDone 완료 여부 , (default=false)
 * @property {string} category 카테고리
 * @property {number[]} tags 테그
 */
