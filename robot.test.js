const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");


// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {

  let robot = newRobot(false, false, false) 

  robot.needs_repairs = true 
  robot.foreign_model = true 

  expect(station(robot)).toEqual(1)

});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {

  let robot = newRobot(false, false, false) 

  robot.needs_repairs = true 
  robot.vintage_model = true 


  expect(station(robot)).toEqual(2)

});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {

  let robot = newRobot(false, false, false) 

  robot.needs_repairs = true 

  expect(station(robot)).toEqual(3)

});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  let robot = newRobot(false, false, false) 
  expect(station(robot)).toEqual(4)
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {

  let robot = newRobot(false, false, false) 
  robot.todos = [] 
  expect(prioritizeTasks(robot)).toEqual(-1)
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  let robot = newRobot(false, false, false) 
  let todoList = ['shop', 'eat', 'dance'] 
  robot.todos = todoList 
  expect(prioritizeTasks(robot)).toEqual(Math.max(...robot.todos))

});

test('test_workday_on_day_off_returns_false', () => {
  let robot = newRobot(false, false, false) 
  robot.dayOff = 'monday' 

  expect(isWorkday(robot, 'monday')).toBe(false)



});

test('test_workday_not_day_off_returns_true', () => {


  let robot = newRobot(false, false, false) 
  robot.dayOff = 'monday' 
  expect(isWorkday(robot, 'tuesday')).toBe(true)

});
